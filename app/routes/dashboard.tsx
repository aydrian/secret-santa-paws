import type { LoaderFunction } from "@remix-run/node";
import { Prisma } from "@prisma/client";
import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { db } from "~/utils/db.server";
import { getUser, requireUserId } from "~/utils/session.server";

const participantWithExchange = Prisma.validator<Prisma.ParticipantArgs>()({
  include: { Exchange: true }
});

type LoaderData = {
  participatingExchanges: Array<
    Prisma.ParticipantGetPayload<typeof participantWithExchange>
  >;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);
  invariant(user, "Expected user to be a user");

  const participatingExchanges = await db.participant.findMany({
    where: { userId: user.id },
    include: { Exchange: true }
  });

  const data: LoaderData = { participatingExchanges, user };

  return json(data);
};

export default function Dashboard() {
  const { participatingExchanges, user } = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {user.name}</h2>
      <form method="post" action="/logout">
        <button type="submit">Logout</button>
      </form>
      <ul>
        {participatingExchanges.map((partExchange) => {
          return (
            <li>
              <NavLink to={partExchange.id}>
                {partExchange.Exchange.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
