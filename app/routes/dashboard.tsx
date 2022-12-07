import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);

  return {};
};

export default function Dashboard() {
  return <div>Dashboard</div>;
}
