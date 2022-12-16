import { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { Participant } from "@prisma/client";
import { json, Response } from "@remix-run/node";
import {
  Form,
  Link,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import invariant from "tiny-invariant";
import { db } from "~/utils/db.server";
import { createUserSession, getUser, register } from "~/utils/session.server";

type LoaderData = {
  participant: Participant;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await getUser(request);
  const participant = await db.participant.findUnique({
    where: { id: params.participantId },
  });

  if (!participant) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  const data: LoaderData = { participant, user };

  return json(data);
};

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

function validateConfirmPassword(password: unknown, confirmPassword: unknown) {
  if (password !== confirmPassword) {
    return `Password and confirm password must match`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    exchangeId?: string | undefined;
    address1?: string | undefined;
    address2?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
    dogType?: string | undefined;
    agree?: boolean | undefined;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    confirmPassword?: string | undefined;
  };
  fields?: {
    exchangeId?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    dogType?: string;
    agree?: boolean;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ params, request }) => {
  const { participantId } = params;
  invariant(participantId, "participantId query param must exist");
  const form = await request.formData();
  const exchangeId = form.get("exchangeId");
  const address1 = form.get("address1");
  const address2 = form.get("address2");
  const city = form.get("city");
  const state = form.get("state");
  const zip = form.get("zip");
  const country = form.get("country");
  const dogType = form.get("dogType");
  const agree = Boolean(form.get("agree"));
  let userId = form.get("userId");
  if (
    typeof exchangeId !== "string" ||
    typeof address1 !== "string" ||
    typeof address2 !== "string" ||
    typeof city !== "string" ||
    typeof state !== "string" ||
    typeof zip !== "string" ||
    typeof country !== "string" ||
    typeof dogType !== "string" ||
    typeof agree !== "boolean"
  ) {
    return badRequest({ formError: `Form not submitted correctly.` });
  }

  let fields = {
    exchangeId,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    dogType,
    agree,
    userId,
  };
  let fieldErrors = {
    exchangeId: undefined,
    address1: undefined,
    address2: undefined,
    city: undefined,
    state: undefined,
    zip: undefined,
    country: undefined,
    dogType: undefined,
    agree: undefined,
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  // If no user, we need to create one.
  if (!userId) {
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof confirmPassword !== "string"
    ) {
      return badRequest({ formError: `Form not submitted correctly.` });
    }

    // TODO: Validation for login fields
    // fieldErrors = {
    //   ...fieldErrors,
    //   name: undefined,
    //   email: undefined,
    //   password: validatePassword(password),
    //   confirmPassword: validateConfirmPassword(password, confirmPassword)
    // };
    // fields = { ...fields, name, email, password, confirmPassword };
    // if (Object.values(fieldErrors).some(Boolean)) {
    //   return badRequest({ fieldErrors, fields });
    // }

    const user = await register({ name, email, password });
    userId = user.id;
  }

  if (typeof userId !== "string") {
    return badRequest({ formError: `Form not submitted correctly.` });
  }

  // Add them as a participate
  await db.participant.create({
    data: {
      userId,
      exchangeId,
      referrerId: participantId,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      dogType,
    },
  });

  return createUserSession(userId, "/dashboard");
};

export default function ParticipantInvite() {
  const { user, participant } = useLoaderData<LoaderData>();
  const location = useLocation();
  return (
    <div>
      <p>
        Welcome to our Secret dog Gift Exchange! I can't wait to see all of the
        happy pups on Christmas!
      </p>
      <p>Here's how it works:</p>
      <ol>
        <li>Complete your profile below to join the gift exchange.</li>
        <li>
          Copy the secret Santa dog request that I posted on my wall to your own
          wall.
        </li>
        <li>
          Send one gift valued at least $10 to the secret dog that is assigned
          to you.
        </li>
        <li>
          Send your referral link to all others that respond to your post.
        </li>
      </ol>
      <p>
        If you cannot complete this within 1 week please notify me, as it isn't
        fair to the people who have participated and are waiting for their dogs
        gifts to arrive. You can order directly from a web-based service
        (Amazon, or any other online shop) which saves a trip to the post
        office.
      </p>
      <p>
        Soon your dog should receive 6-36 gifts! What a deal, 6-36 gifts for
        giving just one! Seldom does anyone drop out because it's so much fun to
        send a gift to someone you may or may not know.... and of course it's
        fun to receive. Your dog should begin receiving gifts in about 2 weeks
        if you get your post out this week.
      </p>
      {!user && (
        <p>
          Already a user?{" "}
          <Link
            to={`/?${new URLSearchParams([["redirectTo", location.pathname]])}`}
          >
            Log in
          </Link>{" "}
        </p>
      )}
      <Form method="post" className="grid gap-4">
        <input type="hidden" name="exchangeId" value={participant.exchangeId} />
        {user ? (
          <>
            <input type="hidden" name="userId" value={user.id} />
            <div>{user.name}</div>
            <div>{user.email}</div>
          </>
        ) : (
          <>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <label>
              Confirm Password:
              <input type="password" name="confirmPassword" required />
            </label>
          </>
        )}
        <label>
          Address 1:
          <input type="text" name="address1" required />
        </label>
        <label>
          Address 2:
          <input type="text" name="address2" />
        </label>
        <label>
          City:
          <input type="text" name="city" required />
        </label>
        <label>
          State:
          <input type="text" name="state" required />
        </label>
        <label>
          Zip:
          <input type="text" name="zip" required />
        </label>
        <label>
          Country:
          <input type="text" name="country" required />
        </label>
        <label>
          Type of Dog:
          <input type="text" name="dogType" required />
        </label>
        <label>
          I agree to send one gift valued at least $10 to the secret dog
          assigned to me within one week.
          <input type="checkbox" name="agree" required />
        </label>
        <button type="submit" className="text-white bg-teal-500">
          I'm in!
        </button>
      </Form>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="error-container">
        "Sorry. No gift exchange exists for this participant. Please check the
        link and try again."
      </div>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

// export function ErrorBoundary() {
//   const { participantId } = useParams();
//   return (
//     <div className="error-container">{`There was an error loading gift exchange by the id ${participantId}. Sorry.`}</div>
//   );
// }
