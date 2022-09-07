import React from 'react';
import Calendar from './Calendar/Calendars';
import PopupModal from '../Modal/Modal';

export default function Home() {
  return (
    <div>
      <div className="container h-[80vh] pt-[30px] ">
        <Calendar />
      </div>
      <PopupModal />
    </div>
  );
}
