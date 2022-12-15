import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import invariant from "tiny-invariant";

type LoaderData = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  invariant(user, "User must be logged in.");

  const data: LoaderData = {
    user,
  };

  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  return json({});
};

export default function NewExchange() {
  const { user } = useLoaderData();
  return (
    <div>
      <h2>Create a new Gift Exchange</h2>
      <Form method="post">
        <label>
          Exchange Title:
          <input type="text" name="exchangeTitle" />
        </label>
        <div>
          <h3>Participant 1</h3>
          <input type="hidden" name="userId" value={user.id} />
          <label>Name:</label>
          <div>{user.name}</div>
          <label> Email:</label>
          <div>{user.email}</div>
          <label>
            Address 1:
            <input type="text" name="par1_address1" required />
          </label>
          <label>
            Address 2:
            <input type="text" name="par1_address2" />
          </label>
          <label>
            City:
            <input type="text" name="par1_city" required />
          </label>
          <label>
            State:
            <input type="text" name="par1_state" required />
          </label>
          <label>
            Zip:
            <input type="text" name="par1_zip" required />
          </label>
          <label>
            Country:
            <input type="text" name="par1_country" required />
          </label>
          <label>
            Type of Dog:
            <input type="text" name="par1_dogType" required />
          </label>
        </div>
        <h3>Participant 2</h3>
        <fieldset>
          <legend>New or Existing?</legend>
          <label>
            <input
              type="radio"
              name="par2_userType"
              value="new"
              defaultChecked
            />
            New
          </label>
          <label>
            <input type="radio" name="par2_userType" value="existing" />
            Existing
          </label>
        </fieldset>
        <label>
          Name:
          <input type="text" name="par2_name" />
        </label>
        <label>
          Email:
          <input type="email" name="par2_email" />
        </label>
        <label>
          Password:
          <input type="password" name="par2_password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="par2_confirmPassword" />
        </label>
        <label>
          Address 1:
          <input type="text" name="par2_address1" required />
        </label>
        <label>
          Address 2:
          <input type="text" name="par2_address2" />
        </label>
        <label>
          City:
          <input type="text" name="par2_city" required />
        </label>
        <label>
          State:
          <input type="text" name="par2_state" required />
        </label>
        <label>
          Zip:
          <input type="text" name="par2_zip" required />
        </label>
        <label>
          Country:
          <input type="text" name="par2_country" required />
        </label>
        <label>
          Type of Dog:
          <input type="text" name="par2_dogType" required />
        </label>
        <h3>Participant 3</h3>
        <fieldset>
          <legend>New or Existing?</legend>
          <label>
            <input
              type="radio"
              name="par3_userType"
              value="new"
              defaultChecked
            />
            New
          </label>
          <label>
            <input type="radio" name="par3_userType" value="existing" />
            Existing
          </label>
        </fieldset>
        <label>
          Name:
          <input type="text" name="par3_name" />
        </label>
        <label>
          Email:
          <input type="email" name="par3_email" />
        </label>
        <label>
          Password:
          <input type="password" name="par3_password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="par3_confirmPassword" />
        </label>
        <label>
          Address 1:
          <input type="text" name="par3_address1" required />
        </label>
        <label>
          Address 2:
          <input type="text" name="par3_address2" />
        </label>
        <label>
          City:
          <input type="text" name="par3_city" required />
        </label>
        <label>
          State:
          <input type="text" name="par3_state" required />
        </label>
        <label>
          Zip:
          <input type="text" name="par3_zip" required />
        </label>
        <label>
          Country:
          <input type="text" name="par3_country" required />
        </label>
        <label>
          Type of Dog:
          <input type="text" name="par3_dogType" required />
        </label>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
}
