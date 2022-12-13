import type { LoaderFunction } from "@remix-run/node"
import { json, Response } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import { requireUserId } from "~/utils/session.server"
import { db } from "~/utils/db.server"
import { Prisma } from "@prisma/client"

const participantsWithExchangeAndReferrer =
  Prisma.validator<Prisma.ParticipantArgs>()({
    include: { Exchange: true, Referrer: true, Referrals: true },
  })

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
})

type LoaderData = {
  exchange: Prisma.ParticipantGetPayload<
    typeof participantsWithExchangeAndReferrer
  >
  giftCount: number
  grandReferrer: Prisma.ParticipantGetPayload<typeof grandReferrerInfo>
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const { participantId } = params
  const userId = await requireUserId(request)

  const exchange = await db.participant.findUnique({
    where: { id: participantId },
    include: { Exchange: true, Referrer: true, Referrals: true },
  })

  if (!exchange || exchange.userId !== userId) {
    throw new Response("Not Found", {
      status: 404,
    })
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
  })
  invariant(grandReferrer, "should be a grandReferrer")

  // Get all the participants referred by the current participant
  // and return the count of their referrals
  const referralsCount = await db.participant.findMany({
    select: { _count: { select: { Referrals: true } } },
    where: { referrerId: participantId },
  })
  // Sum all the referrals
  const giftCount = referralsCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue._count.Referrals,
    0
  )

  const data: LoaderData = { exchange, giftCount, grandReferrer }

  return json(data)
}

export default function ParticipatingExchange() {
  const { exchange, giftCount, grandReferrer } = useLoaderData<LoaderData>()
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
        <h3>
          Estimated Number of gifts received: <strong>{giftCount}</strong>
        </h3>
      </h3>
    </div>
  )
}
