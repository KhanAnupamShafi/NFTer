'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative bg-white">
      <div className="absolute bottom-0 h-[1px] w-full bg-[#EFEFEF]"></div>
      <div className="mx-auto h-[100px] max-w-[1440px] px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start">
            <Link href="#">
              <span className="sr-only">NFT LOGO</span>
              <Image
                width={107}
                height={29}
                src="/images/brand.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-12 pl-6 lg:flex">
            <div className="relative">
              <button
                type="button"
                className="
                   pb-8' group inline-flex items-center rounded-md bg-white text-base font-medium text-black hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  "
              >
                <span>Marketplace</span>
              </button>
            </div>

            <a
              href="#"
              className="text-blackhover:text-gray-900 text-base font-medium"
            >
              Resource
            </a>
            <a
              href="#"
              className="text-base font-medium text-black hover:text-gray-900"
            >
              About
            </a>
          </nav>

          <div className="hidden items-center justify-end gap-5 lg:flex lg:w-0 lg:flex-1">
            <form className="relative">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 right-3 flex items-center pl-4">
                  <button
                    type="submit"
                    className="focus:shadow-outline p-1 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#757575"
                      />
                      <path
                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                        fill="#757575"
                      />
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="hidden rounded-full border-2 border-[#EFEFEF] py-3 pl-10 text-sm text-white focus:bg-white focus:text-gray-900 focus:outline-none xl:block 2xl:w-[300px]"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </form>
            <a
              href="#"
              className="whitespace-nowrap rounded-full border-2 border-primary  bg-primary px-10 py-3 text-sm font-bold text-white hover:text-gray-900"
            >
              Upload{' '}
            </a>
            <a
              href="#"
              className="whitespace-nowrap rounded-full border-2 border-primary px-10 py-3 text-sm font-bold text-primary hover:text-gray-900"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          open
            ? 'absolute inset-x-0 top-0 origin-top-right scale-100 transform p-2 opacity-100 transition transition duration-200 ease-out lg:hidden'
            : 'absolute inset-x-0 top-0 origin-top-right scale-95 transform p-2 opacity-0 transition lg:hidden'
        }
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/images/brand.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Resource
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 bg-primary px-4 py-2  text-base font-medium text-white   shadow-sm  hover:bg-indigo-700 hover:text-gray-900"
              >
                Upload
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Connect Wallet{' '}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
