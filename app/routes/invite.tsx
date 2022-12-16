import { Outlet } from "@remix-run/react";

import SecretSantaPawsLogo from "~/components/secret-santa-paws-logo";
import Header from "~/components/header";
export default function Invite() {
  return (
    <>
      <Header></Header>
      <main className="w-screen min-h-screen">
        <section className="flex flex-col gap-4 justify-center bg-red-500 px-4 sm:px-8 py-16 max-h-[350px]">
          <SecretSantaPawsLogo className="w-3/4 sm:w-1/2" />
          <h2 className="m-0 text-center text-white mb-4">
            Join the Gift Exchange 🎁
          </h2>
        </section>
        <section className="flex flex-col lg:justify-center bg-white p-4 sm:p-8">
          <Outlet />
        </section>
      </main>
    </>
  );
}
