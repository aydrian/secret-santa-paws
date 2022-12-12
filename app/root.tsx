import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import GitHubLogo from './components/github-logo';
import styles from './styles/app.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='prose min-h-screen'>
        <header className='absolute right-0 top-0 w-screen'>
          <div className='flex justify-end px-4 py-2'>
            <ul className='flex gap-2 m-0 p-0 list-none'>
              <li>
                <a
                  className='no-underline text-inherit'
                  href='https://github.com/aydrian/secret-santa-paws'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubLogo className='fill-white lg:fill-gray-800' />
                </a>
              </li>
            </ul>
          </div>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className='absolute left-0 bottom-0 w-screen'>
          <div className='p-4'>
            <ul className='flex justify-between lg:justify-start gap-2 m-0 p-0 list-none text-xs text-gray-500 lg:text-red-100'>
              <li>
                <a
                  className='no-underline text-inherit'
                  href='https://cockroachlabs.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  https://cockroachlabs.com
                </a>
              </li>
              <li>
                <a
                  className='no-underline text-inherit'
                  href='https://twitter.com/CockroachDB'
                  target='_blank'
                  rel='noreferrer'
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
