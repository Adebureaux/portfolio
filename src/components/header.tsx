"use client";

import React from 'react';
import Image from 'next/image';


const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const Header = () => (
  <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((stat) => (
    <div key={stat.name} className="flex flex-col-reverse">
      <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
    </div>
  ))}
  </dl>
  // <div className="container">
  //     <div className="flex">
  //         <Image className="rounded-full" width={75} height={75} src="/images/profile.png" alt="picture" />
  //         <span className="my-auto">Augustin Debureaux</span>
  //     </div>
  //     <div className="container">
  //       <div className="flex-auto">
  //         <button className="rounded-full">Home</button>
  //       </div>
  //       <div className="flex-auto">
  //         <button className="rounded-full">About</button>
  //       </div>
  //       <div className="flex-auto">
  //         <button className="rounded-full">Project</button>
  //       </div>
  //       <div className="flex-auto">
  //         <button className="rounded-full">Contact</button>
  //       </div>
  //     </div>
  //   </div>
)
export default Header;