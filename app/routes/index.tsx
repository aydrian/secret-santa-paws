import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useSearchParams } from '@remix-run/react';
import SecretSantaPawsLogo from '~/components/secret-santa-paws-logo';

import { login, createUserSession, getUserId } from '~/utils/session.server';

import Header from '../components/header';

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect('/dashboard');
  }
  return { ok: true };
};

function validateEmail(email: unknown) {
  if (typeof email !== 'string' || email.length < 3) {
    return `Emails must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) {
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
  const email = form.get('email');
  const password = form.get('password');
  // const redirectTo = validateUrl(form.get("redirectTo") || "/dashboard");
  const redirectTo = form.get('redirectTo') || '/dashboard';
  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string'
  ) {
    return badRequest({ formError: `Form not submitted correctly.` });
  }

  const fields = { email, password };
  const fieldErrors = {
    email: validateEmail(email),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const user = await login({ email, password });
  if (!user) {
    return badRequest({
      fields,
      formError: `Email/Password combination is incorrect`,
    });
  }
  return createUserSession(user.id, redirectTo);
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  return (
    <>
      <Header />
      <main className='grid lg:grid-cols-2 gap-4 w-screen min-h-screen'>
        <section className='flex flex-col gap-4 justify-center bg-red-500 p-4 sm:p-8'>
          <div className='max-w-2xl mx-auto lg:mr-0 lg:ml-auto'>
            <SecretSantaPawsLogo className='w-3/4' />
            <h1 className='sr-only'>Secret Santa Paws</h1>
            <h2 className='m-0 text-center text-white'>
              A Gift Exchange App for Dogs{' '}
              <span aria-label='Christmas Gift'>🎁</span>
            </h2>
            <p className='text-center text-white mb-0 mx-auto sm:w-3/4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              efficitur vitae libero quis condimentum.
            </p>
            <p className='text-center text-sm text-white mb-0'>
              A{' '}
              <a
                className='text-inherit'
                href='https://www.cockroachlabs.com/'
                target='_blank'
                rel='noreferrer'
              >
                Cockroach Labs
              </a>{' '}
              Demo by{' '}
              <a
                className='text-inherit'
                href='https://twitter.com/itsaydrian'
                target='_blank'
                rel='noreferrer'
              >
                Aydrian Howard
              </a>
            </p>
          </div>
        </section>
        <section className='flex flex-col lg:justify-center bg-white p-4 sm:p-8 my-16 lg:my-0'>
          <div className='lg:max-w-xl'>
            <h3 className='font-bold'>Login</h3>
            <Form method='post' className='grid gap-4'>
              <input
                type='hidden'
                name='redirectTo'
                value={searchParams.get('redirectTo') ?? undefined}
              />
              <label>
                Email{' '}
                <input
                  type='email'
                  name='email'
                  required
                  defaultValue={actionData?.fieldErrors?.email}
                  aria-errormessage={
                    actionData?.fieldErrors?.email ? 'email-error' : undefined
                  }
                />
              </label>
              {actionData?.fieldErrors?.email ? (
                <div>{actionData.fieldErrors.email}</div>
              ) : undefined}
              <label>
                Password{' '}
                <input
                  type='password'
                  name='password'
                  required
                  defaultValue={actionData?.fields?.password}
                  aria-errormessage={
                    actionData?.fieldErrors?.password
                      ? 'password-error'
                      : undefined
                  }
                />
              </label>
              {actionData?.fieldErrors?.password ? (
                <div>{actionData.fieldErrors.password}</div>
              ) : undefined}
              {actionData?.formError ? (
                <div>{actionData.formError}</div>
              ) : undefined}
              <button type='submit' className='text-white bg-teal-500'>
                Login
              </button>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
}
