import React from 'react';

export default function Footer() {
  return (
    <div className=" w-full  h-[5vh] text-center bg-gray-800/90">
      <h1 className="text-lg text-white">
        Built and designed by{' '}
        <a
          href="https://jcool10.github.io/MyPortfolio/"
          className="font-bold text-red-500"
          target="_blank"
          rel="noreferrer"
        >
          jCool
        </a>
      </h1>
    </div>
  );
}
