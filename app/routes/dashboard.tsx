import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser, requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const user = await getUser(request);

  return { user };
};

export default function Dashboard() {
  const { user } = useLoaderData();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {user.name}</h2>
      <form method="post" action="/logout">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
