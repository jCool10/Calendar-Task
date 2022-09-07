import React from 'react';

export default function HeaderTaskList(props) {
  let { date, month, day } = props.resDate.resDate;

  const arrDates = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  return (
    <header className="flex items-start pt-4 ">
      <span className="inline-flex items-center justify-center w-20 h-20 text-[56px] rounded-full text-white bg-black">
        {date}
      </span>
      <div className="flex flex-col mx-2 border-l-4 border-black">
        <span className="text-[26px] tracking-[5px] font-semibold mx-2 h-full ">{arrDates[day]}</span>
        <span className="text-[26px] font-semibold mx-2  h-full ">{month}</span>
      </div>
    </header>
  );
}
