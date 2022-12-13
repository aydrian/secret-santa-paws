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
    user
  };

  return json(data);
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData));

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
            <input type="text" name="par1['address1']" />
          </label>
          <label>
            Address 2:
            <input type="text" name="par1['address2']" />
          </label>
          <label>
            City:
            <input type="text" name="par1['city']" />
          </label>
          <label>
            State:
            <input type="text" name="par1['state']" />
          </label>
          <label>
            Zip:
            <input type="text" name="par1['zip']" />
          </label>
          <label>
            Country:
            <input type="text" name="par1['country']" />
          </label>
          <label>
            Type of Dog:
            <input type="text" name="par1['dogType']" />
          </label>
        </div>
        <h3>Participant 2</h3>
        <fieldset>
          <legend>New or Existing?</legend>
          <label>
            <input
              type="radio"
              name="par2['userType']"
              value="new"
              defaultChecked
            />
            New
          </label>
          <label>
            <input type="radio" name="par2['userType']" value="existing" />
            Existing
          </label>
        </fieldset>
        <label>
          Address 1:
          <input type="text" name="par2['address1']" />
        </label>
        <label>
          Address 2:
          <input type="text" name="par2['address2']" />
        </label>
        <label>
          City:
          <input type="text" name="par2['city']" />
        </label>
        <label>
          State:
          <input type="text" name="par2['state']" />
        </label>
        <label>
          Zip:
          <input type="text" name="par2['zip']" />
        </label>
        <label>
          Country:
          <input type="text" name="par2['country']" />
        </label>
        <label>
          Type of Dog:
          <input type="text" name="par2['dogType']" />
        </label>
        <h3>Participant 3</h3>
        <label>
          Address 1:
          <input type="text" name="par3['address1']" />
        </label>
        <label>
          Address 2:
          <input type="text" name="par3['address2']" />
        </label>
        <label>
          City:
          <input type="text" name="par3['city']" />
        </label>
        <label>
          State:
          <input type="text" name="par3['state']" />
        </label>
        <label>
          Zip:
          <input type="text" name="par3['zip']" />
        </label>
        <label>
          Country:
          <input type="text" name="par3['country']" />
        </label>
        <label>
          Type of Dog:
          <input type="text" name="par3['dogType']" />
        </label>
        <button type="submit">Create</button>
      </Form>
    </div>
  );
}
