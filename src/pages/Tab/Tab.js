import React from 'react';

export default function Tab(props) {
  let { date, month, year, day } = props.resDate;

  const arrDates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className={`w-[120px] h-[120px] m-auto pt-3 mt-2  rounded-[15px] cursor-pointer `}>
      <div className="mb-0 text-xl text-center tracking-[10px]">{year}</div>
      <div className="flex items-center justify-center">
        <span className="leading-none mr-1 text-[50px] font-bold mb-0">{date}</span>
        <div className="pl-2 border-l-2 border-black flex-cols">
          <div className="tracking-[2px] font-semibold text-[18px]">{arrDates[day]}</div>
          <div className="text-start">{month}</div>
        </div>
      </div>
    </div>
  );
}
