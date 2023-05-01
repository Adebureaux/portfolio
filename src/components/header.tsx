import React from 'react';


const Header = () => (
  <div className="container  mx-auto">
      <div className="">
          <img className="rounded-full" width={75} src="cvpic.png" alt="picture" />
          <span className="object-none object-center bg-yellow-300 w-24 h-24">Augustin Debureaux</span>
      </div>
      <div className="flex-auto">
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
      </div>
  </div>
)
export default Header;