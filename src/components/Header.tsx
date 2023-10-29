import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navitem = [
  { name: " Blog", link: "/" },
  { name: "Portfolio", link: "/Portfolio" },
];

const Header = () => {
  return (
    <>
      <nav className="bg-white  border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="">
            <Link href="">
              <span className="self-center text-2xl font-semibold whitespace-nowrap h-6 mr-3 ">
                S I M P L E
              </span>
            </Link>
          </div>

          <button
            data-collaspse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lgl md:hidden hover:bg-ray-100 focus:rign-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="https://www.w3.org/2000/sv"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {navitem.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className="font-medium l p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-90 dark:borddder-gray-700 "
              >
                <span className="mx-4 hover:text-yellow-500 hover:border-b transform hover:-translate-y-1 transition duration-500">
                  {item.name}
                </span>
              </Link>
            ))}
            <span>
              <button>
                <Link href="/Subscribe">Subcribe</Link>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
