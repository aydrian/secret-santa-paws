import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import GitHubLogo from "./components/github-logo";
import styles from "./styles/app.css";

const siteUrl = "https://www.cockroachlabs.com/demos/secret-santa-paws";
const name = "Secret Santa Paws";
const description = "A Gift Exchange App for Dogs";
const defaultImage = `${siteUrl}/images/secret-santa-paws-open-graph-image.jpg`;
const twitter = "@itsaydrian";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "icon",
      type: "image/x-icon",
      href: `${siteUrl}/images/favicon.ico`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: `${siteUrl}/images/favicon-16x16.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: `${siteUrl}/images/favicon-32x32.png`,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: name,
  cannonical: siteUrl,
  description: description,
  image: defaultImage,
  "image:alt": description,
  "og:type": "website",
  "og:title": name,
  "og:url": siteUrl,
  "og:description": description,
  "og:image": defaultImage,
  "og:image:alt": description,
  "twitter:card": "summary_large_image",
  "twitter:site": twitter,
  "twitter:creator": twitter,
  "twitter:title": name,
  "twitter:description": description,
  "twitter:image": defaultImage,
  "twitter:image:alt": description,
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="prose min-h-screen">
        <header className="absolute right-0 top-0 w-screen">
          <div className="flex justify-end px-4 py-2">
            <ul className="flex gap-2 m-0 p-0 list-none">
              <li>
                <a
                  className="no-underline text-inherit"
                  href="https://github.com/aydrian/secret-santa-paws"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubLogo className="fill-white lg:fill-gray-800" />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="absolute left-0 bottom-0 w-screen">
          <div className="p-4">
            <ul className="flex justify-between lg:justify-start gap-2 m-0 p-0 list-none text-xs text-gray-500 lg:text-red-100">
              <li>
                <a
                  className="no-underline text-inherit"
                  href="https://cockroachlabs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://cockroachlabs.com
                </a>
              </li>
              <li>
                <a
                  className="no-underline text-inherit"
                  href="https://twitter.com/CockroachDB"
                  target="_blank"
                  rel="noreferrer"
                >
                  @CockroachDB
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
