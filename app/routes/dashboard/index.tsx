import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const latestPart = await db.participant.findFirst({
    select: { id: true },
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  if (latestPart) {
    return redirect(`/dashboard/${latestPart.id}`);
  }

  return {};
};

export default function DashboardIndex() {
  return <div>You're not part of any exchanges</div>;
}
