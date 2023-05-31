"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid"

const Header = () => (
  <Popover>
  <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
    <Image className="rounded-full border" src="/images/profile.png" width={75} height={75} alt="Profile Picture" />
    <h1 className="font-bold px-5">Augustin Debureaux</h1>
    <div className="grow">
      <div className="flex items-center justify-end gap-2 md:gap-8">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          <Link href="home">Home</Link>
          <Link href="blog">Blog</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
        </Popover.Button>
      </div>
    </div>
  </div>
  </Popover>
)
export default Header;