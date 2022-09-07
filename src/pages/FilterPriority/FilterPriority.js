import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPriorityAction } from '../../redux/actions/actions';

export default function FilterPriority() {
  const dispatch = useDispatch();

  const priorities = ['All', 'High', 'Medium', 'Low'];

  const [filterPriority, setFilterPriority] = useState([]);

  const handlePriorityChange = (e) => {
    // setFilterPriority(filterPriority.push(e.target.name));
    setFilterPriority([...filterPriority, e.target.name]);
    dispatch(filterPriorityAction(filterPriority));
  };

  return (
    <div className="flex items-end justify-end px-5 mt-2">
      {priorities.map((priority, index) => {
        return (
          <div>
            <button
              key={index}
              // style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
              name={`${priority}`}
              className="h-[33px] w-[100px] mr-2 rounded-t-[20px] bg-red-200"
              onClick={handlePriorityChange}
            >
              {priority}
            </button>
          </div>
        );
      })}
    </div>
  );
}
