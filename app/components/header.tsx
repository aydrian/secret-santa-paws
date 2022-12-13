import { FunctionComponent, ReactNode } from 'react';

import { useLocation } from '@remix-run/react';

import GitHubLogo from './github-logo';

interface Props {
  children?: ReactNode;
}

const Header: FunctionComponent<Props> = ({ children }) => {
  const location = useLocation();
  const isIndex = location.pathname == '/' ? true : false;
  return (
    <header
      className={`${
        isIndex ? 'fixed' : 'relative bg-red-500'
      } right-0 top-0 w-screen`}
    >
      <div className='flex flex-col items-center sm:flex-row sm:items-start justify-between px-2 py-4 min-h-[70px]'>
        <ul className='flex items-center  gap-2 m-0 p-0 list-none'>
          <li className='not-prose'>
            <a
              className='no-underline text-inherit'
              href='https://github.com/aydrian/secret-santa-paws'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubLogo className='fill-white' />
            </a>
          </li>
        </ul>
        {children}
      </div>
    </header>
  );
};

export default Header;
