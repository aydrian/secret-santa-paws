import type { LoaderFunction } from '@remix-run/node';
import { Prisma } from '@prisma/client';
import { json } from '@remix-run/node';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { db } from '~/utils/db.server';
import { requireUserId } from '~/utils/session.server';

import SecretSantaPawsLogo from '~/components/secret-santa-paws-logo';
import Header from '~/components/header';

const dashboardUser = Prisma.validator<Prisma.UserArgs>()({
  select: {
    id: true,
    email: true,
    name: true,
    Participants: {
      select: {
        id: true,
        Exchange: { select: { title: true, isArchived: true } },
      },
    },
  },
});

type LoaderData = {
  user: Prisma.UserGetPayload<typeof dashboardUser>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const user = await db.user.findUnique({
    select: {
      id: true,
      email: true,
      name: true,
      Participants: {
        select: {
          id: true,
          Exchange: { select: { title: true, isArchived: true } },
        },
      },
    },
    where: { id: userId },
  });
  invariant(user, 'Expected user to be a user');

  const data: LoaderData = { user };

  return json(data);
};

export default function Dashboard() {
  const { user } = useLoaderData<LoaderData>();
  const participatingExchanges = user.Participants;
  return (
    <>
      <Header>
        <ul className='flex items-center gap-2 m-0 p-0 list-none'>
          {participatingExchanges.map((partExchange) => {
            return (
              <li key={partExchange.id} className='not-prose m-0 p-0'>
                <NavLink to={partExchange.id} className='nav-link'>
                  {partExchange.Exchange.title}
                </NavLink>
              </li>
            );
          })}
          <li className='not-prose m-0 p-0'>
            <NavLink to='new' className='nav-link'>
              New Exchange
            </NavLink>
          </li>
          <li className='not-prose m-0 p-0'>
            <form method='post' action='/logout' className='m-0'>
              <button type='submit' className='nav-link'>
                Logout
              </button>
            </form>
          </li>
        </ul>
      </Header>
      <main className='w-screen min-h-screen'>
        <section className='flex flex-col gap-4 justify-center bg-red-500 px-4 sm:px-8 py-16 max-h-[350px]'>
          <SecretSantaPawsLogo className='w-3/4 sm:w-1/2' />
          <h2 className='m-0 text-center text-white mb-4'>
            Welcome {user.name}
          </h2>
        </section>
        <section className='flex flex-col lg:justify-center bg-white p-4 sm:p-8'>
          <Outlet />
        </section>
      </main>
    </>
  );
}
