import React from 'react';
import Image from 'next/image';

const Header = () => (
  <div className="container">
    <div className="">
      <div className="flex">
          <Image className="rounded-full" width={75} height={75} src="/images/profile.png" alt="picture" />
          <span className="my-auto">Augustin Debureaux</span>
      </div>

      {/* <div className="flex-auto">
        <button className="rounded-full">Home</button>
      </div>
      <div className="flex-auto">
        <button className="rounded-full">About</button>
      </div>
      <div className="flex-auto">
        <button className="rounded-full">Project</button>
      </div>
      <div className="flex-auto">
        <button className="rounded-full">Contact</button>
      </div> */}
    </div>
  </div>
)
export default Header;