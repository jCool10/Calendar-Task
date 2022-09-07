import React from 'react';
import logo from '../../assets/logo.png';
import zly from '../../assets/zly.png';

export default function Header() {
  const time = new Date();

  return (
    <header className="container h-[130px] bg-[#fff] rounded-[35px] shadow-header flex items-center justify-between">
      <div className="container h-full m-auto md:justify-center md:space-x-8">
        <a href="/" aria-label="Back to homepage" className="flex items-center justify-center h-full">
          <img src={logo} alt="logo" className="w-[35vh]" />
          <img src={zly} alt="logo" className="w-[35vh]" />
        </a>
      </div>

      {/* <div className="flex-row">
        <a href="/">
          <img src={logo} alt="" className="h-[80px] " />
        </a>
        <div className="">
          <h1>{time.getHours()}</h1>
          <h1>{time.getDay()}</h1>
          <h1>{time.getMonth() + 1}</h1>
        </div>
      </div> */}

      <div>123</div>
    </header>
  );
}
