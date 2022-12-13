import type { LoaderFunction } from "@remix-run/node"
import { Prisma } from "@prisma/client"
import { json } from "@remix-run/node"
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react"
import invariant from "tiny-invariant"
import { db } from "~/utils/db.server"
import { requireUserId } from "~/utils/session.server"

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
})

type LoaderData = {
  user: Prisma.UserGetPayload<typeof dashboardUser>
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
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
  })
  invariant(user, "Expected user to be a user")

  const data: LoaderData = { user }

  return json(data)
}

export default function Dashboard() {
  const { user } = useLoaderData<LoaderData>()
  const participatingExchanges = user.Participants
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
            <li key={partExchange.id}>
              <NavLink to={partExchange.id}>
                {partExchange.Exchange.title}
              </NavLink>
            </li>
          )
        })}
        <li>
          <Link to="new">New Exchange</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
