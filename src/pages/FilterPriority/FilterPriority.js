import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPriorityAction } from '../../redux/actions/actions';

export default function FilterPriority() {
  const dispatch = useDispatch();

  const priorities = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="flex items-end justify-end px-5 mt-2">
      {priorities.map((priority, index) => {
        return (
          <div>
            {/* <button
              key={index}
              className="bg-red-400 border border-red-400 h-[33px] w-[100px] font-bold rounded-t-[10px] mr-2"
              onClick={() => {
                dispatch(filterPriorityAction(priority));
              }}
            >
              {priority}
            </button> */}
            <Button
              shape="round"
              className="h-[33px] w-[100px] mr-2"
              onClick={() => {
                dispatch(filterPriorityAction(priority));
              }}
            >
              {priority}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
