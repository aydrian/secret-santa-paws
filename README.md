# Secret Santa Paws 🐾 Gift Exchange 🎁

A gift exchange for dogs based on the social media meme.

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions](https://www.netlify.com/products/functions/)

## 🥞 Stack

- Framework - [Remix](https://remix.run/)
- Language - [TypeScript](https://www.typescriptlang.org/)
- Database - [CockroachDB serverless](https://www.cockroachlabs.com/product/)
- ORM - [Prisma](https://prisma.io/)
- Hosting - [Netlify](https://netlify.com/)
- Styling - [Tailwind CSS](https://tailwindcss.com/)

## Setup

1. Clone this repo
1. Create a `.env` file using the provided `.env.example`
   ```
   cp .env.example .env
   ```
1. Create a [free CockroachDB Serverless account and cluster](https://cockroachlabs.cloud/signup?referralId=sample_app)

1. Add your database url to the `.env` file
1. Run Prisma migrate to create the database schema
   ```
   npx prisma migrate deploy
   ```
1. Run `row-level-ttl.sql` script to activate row level ttl
   ```
   npx prisma db execute --file ./prisma/row-level-ttl.sql --schema schema.prisma
   ```
1. Update the `SESSION_SECRET` variable with any string in your `.env` file.

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
