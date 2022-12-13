import type { LoaderFunction } from '@remix-run/node';
import { json, Response } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { requireUserId } from '~/utils/session.server';
import { db } from '~/utils/db.server';
import { Prisma } from '@prisma/client';

const participantsWithExchangeAndReferrer =
  Prisma.validator<Prisma.ParticipantArgs>()({
    include: { Exchange: true, Referrer: true, Referrals: true },
  });

const grandReferrerInfo = Prisma.validator<Prisma.ParticipantArgs>()({
  select: {
    address1: true,
    address2: true,
    city: true,
    state: true,
    zip: true,
    country: true,
    dogType: true,
    User: { select: { name: true } },
  },
});

type LoaderData = {
  exchange: Prisma.ParticipantGetPayload<
    typeof participantsWithExchangeAndReferrer
  >;
  giftCount: number;
  grandReferrer: Prisma.ParticipantGetPayload<typeof grandReferrerInfo>;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const { participantId } = params;
  const userId = await requireUserId(request);

  const exchange = await db.participant.findUnique({
    where: { id: participantId },
    include: { Exchange: true, Referrer: true, Referrals: true },
  });

  if (!exchange || exchange.userId !== userId) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  const grandReferrer = await db.participant.findUnique({
    select: {
      address1: true,
      address2: true,
      city: true,
      state: true,
      zip: true,
      country: true,
      dogType: true,
      User: { select: { name: true } },
    },
    where: { id: exchange.Referrer.referrerId },
  });
  invariant(grandReferrer, 'should be a grandReferrer');

  // Get all the participants referred by the current participant
  // and return the count of their referrals
  const referralsCount = await db.participant.findMany({
    select: { _count: { select: { Referrals: true } } },
    where: { referrerId: participantId },
  });
  // Sum all the referrals
  const giftCount = referralsCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue._count.Referrals,
    0
  );

  const data: LoaderData = { exchange, giftCount, grandReferrer };

  return json(data);
};

export default function ParticipatingExchange() {
  const { exchange, giftCount, grandReferrer } = useLoaderData<LoaderData>();
  const details = [
    {
      title: 'Referrals',
      value: exchange.Referrals.length,
    },
    {
      title: 'Gifts',
      value: giftCount,
    },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='m-0'>Your secret dog</h2>
      <div className='flex flex-col border border-gray-200 rounded p-4 gap-8'>
        <div className='flex flex-col'>
          <span className='text-xs text-gray-400'>Name</span>
          <span className='font-bold mb-2'>{grandReferrer.User.name}</span>
          <span className='text-xs text-gray-400'>Breed</span>
          <span className='font-bold mb-2'>{grandReferrer.dogType}</span>
          <span className='text-xs text-gray-400'>Address</span>
          <span>{grandReferrer.address1}</span>
          {grandReferrer.address2 ? (
            <span>{grandReferrer.address2}</span>
          ) : null}
          <span>
            {grandReferrer.city}, {grandReferrer.state} {grandReferrer.zip}
          </span>
          <span>{grandReferrer.country}</span>
        </div>
        <div>
          <span className='text-xs text-gray-400'>Details</span>
          <ul className='flex flex-cols gap-6 list-none m-0 p-0'>
            {details.map((detail, index) => {
              const { title, value } = detail;
              return (
                <li key={index} className='m-0 p-0'>
                  <span className='flex items-center gap-1'>
                    {title}:
                    <span className='flex items-center justify-center font-bold text-xs text-center rounded-full bg-teal-400 text-white w-6 h-6'>
                      {`x${value}`}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h2>Your referral Link</h2>
      <pre>{`https://localhost/invite/${exchange.id}`}</pre>
    </div>
  );
}
