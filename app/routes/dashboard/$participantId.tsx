import type { LoaderFunction } from "@remix-run/node";
import { json, Response } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { requireUserId } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import { Prisma } from "@prisma/client";

const participantsWithExchangeAndReferrer =
  Prisma.validator<Prisma.ParticipantArgs>()({
    include: { Exchange: true, Referrer: true, Referrals: true }
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
    User: { select: { name: true } }
  }
});

type LoaderData = {
  exchange: Prisma.ParticipantGetPayload<
    typeof participantsWithExchangeAndReferrer
  >;
  grandReferrer: Prisma.ParticipantGetPayload<typeof grandReferrerInfo>;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const { participantId } = params;
  const userId = await requireUserId(request);

  const exchange = await db.participant.findUnique({
    where: { id: participantId },
    include: { Exchange: true, Referrer: true, Referrals: true }
  });

  if (!exchange || exchange.userId !== userId) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  invariant(exchange.Referrer, "should have a referrer");
  invariant(exchange.Referrer.referrerId, "referrer should have a referrer id");

  const grandReferrer = await db.participant.findUnique({
    select: {
      address1: true,
      address2: true,
      city: true,
      state: true,
      zip: true,
      country: true,
      dogType: true,
      User: { select: { name: true } }
    },
    where: { id: exchange.Referrer.referrerId }
  });
  invariant(grandReferrer, "should be a grandReferrer");

  const data: LoaderData = { exchange, grandReferrer };

  return json(data);
};

export default function ParticipatingExchange() {
  const { exchange, grandReferrer } = useLoaderData<LoaderData>();
  return (
    <div>
      <h2>Your secret dog</h2>
      <p>{grandReferrer.User.name}</p>
      <p>
        {grandReferrer.address1}
        <br />
        {grandReferrer.address2 && (
          <>
            {grandReferrer.address2} <br />
          </>
        )}
        {grandReferrer.city}, {grandReferrer.state} {grandReferrer.zip}
        <br />
        {grandReferrer.country}
        <br />
        Type of dog: {grandReferrer.dogType}
      </p>
      <h2>Your referral Link</h2>
      <code>{`https://localhost/invite/${exchange.id}`}</code>
      <h3>
        Number of referrals: <strong>{exchange.Referrals.length}</strong>
      </h3>
    </div>
  );
}
