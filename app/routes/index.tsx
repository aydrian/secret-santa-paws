import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";

import { login, createUserSession, getUserId } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/dashboard");
  }
  return { ok: true };
};

function validateEmail(email: unknown) {
  if (typeof email !== "string" || email.length < 3) {
    return `Emails must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

// function validateUrl(url: any) {
//   let urls = ["/dashboard", "/", "/invite"];
//   if (urls.includes(url)) {
//     return url;
//   }
//   return "/dashboard";
// }

type ActionData = {
  formError?: string;
  fieldErrors?: { email: string | undefined; password: string | undefined };
  fields?: { email: string; password: string };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  // const redirectTo = validateUrl(form.get("redirectTo") || "/dashboard");
  const redirectTo = form.get("redirectTo") || "/dashboard";
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({ formError: `Form not submitted correctly.` });
  }

  const fields = { email, password };
  const fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const user = await login({ email, password });
  if (!user) {
    return badRequest({
      fields,
      formError: `Email/Password combination is incorrect`
    });
  }
  return createUserSession(user.id, redirectTo);
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>Secret Santa Paws 🐾</h1>
      <h2>A Gift Exchange App for Dogs 🎁</h2>
      <h3>Sign in to your account</h3>
      <Form method="post">
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") ?? undefined}
        />
        <label>
          Email{" "}
          <input
            type="email"
            name="email"
            required
            defaultValue={actionData?.fieldErrors?.email}
            aria-errormessage={
              actionData?.fieldErrors?.email ? "email-error" : undefined
            }
          />
        </label>
        {actionData?.fieldErrors?.email ? (
          <div>{actionData.fieldErrors.email}</div>
        ) : undefined}
        <label>
          Password{" "}
          <input
            type="password"
            name="password"
            required
            defaultValue={actionData?.fields?.password}
            aria-errormessage={
              actionData?.fieldErrors?.password ? "password-error" : undefined
            }
          />
        </label>
        {actionData?.fieldErrors?.password ? (
          <div>{actionData.fieldErrors.password}</div>
        ) : undefined}
        {actionData?.formError ? <div>{actionData.formError}</div> : undefined}
        <button type="submit">Log in</button>
      </Form>
    </div>
  );
}
