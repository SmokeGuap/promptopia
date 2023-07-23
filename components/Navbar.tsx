'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  signOut,
  signIn,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
  useSession,
} from 'next-auth/react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const providers = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    providers();
  }, []);

  return (
    <nav className='flex justify-between items-center w-full mb-16 pt-3 '>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/images/logo.svg' width={30} height={30} alt='Logo' />
        <p className='max-sm:hidden font-satoshi font-semibold text-lg text-primary tracking-wide'>
          Promptopia
        </p>
      </Link>
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link
              href='/create-prompt'
              className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-primary hover:border-primary text-center text-sm font-inter flex items-center justify-center'
            >
              Create Post
            </Link>
            <button
              onClick={() => signOut()}
              className='rounded-full border border-primary bg-transparent py-1.5 px-5 text-primary transition-all hover:bg-primary hover:text-white text-center text-sm font-inter flex items-center justify-center'
            >
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src={String(session?.user.image)}
                width={37}
                height={37}
                alt='profile'
                className='rounded-full hover:scale-110'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='rounded-full border border-primary bg-primary py-1.5 px-5 text-white transition-all hover:bg-white hover:text-primary text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={String(session?.user.image)}
              width={37}
              height={37}
              alt='profile'
              className='rounded-full'
              onClick={() => {
                setToggleDropdown(!toggleDropdown);
              }}
            />
            {toggleDropdown && (
              <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end'>
                <Link
                  href='/profile'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
