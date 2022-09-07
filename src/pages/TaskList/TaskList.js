import React from 'react';
import FilterPriority from '../FilterPriority/FilterPriority';
import HeaderTaskList from '../HeaderTaskList/HeaderTaskList';
import Tasks from '../Tasks/Tasks';
import './TaskList.css';

export default function TaskList(props) {
  return (
    <div className="px-5 h-[70vh] my-5 mr-10 shadow rounded-tr-[25px]">
      <div className="flex justify-between">
        <HeaderTaskList resDate={props} />
        {/* <FilterPriority /> */}
      </div>

      <div className="w-full mt-1 overflow-x-auto scrollTop">
        <Tasks resDate={props} />
      </div>
    </div>
  );
}
