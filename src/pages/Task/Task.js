import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTaskAction } from '../../redux/actions/actions';
import './Task.css';

export default function Task(props) {
  const { id, title, completed, priority, timeStart, timeEnd } = props.task;

  const dispatch = useDispatch();

  const convertTime = (time) => {
    var a = time.split(':');
    var seconds = +a[0] * 60 + +a[1];
    return seconds;
  };

  const handleCheckTask = (id) => {
    dispatch(checkTaskAction(id));
  };

  const borderTask = (priority) => {
    return priority === 'High' ? 'border-red-500' : priority === 'Medium' ? 'border-blue-500' : 'border-gray-500';
  };

  return (
    <div
      className={`absolute top-[5px] h-[40px]`}
      style={{
        width: (convertTime(timeEnd) - convertTime(timeStart)) * 2,
        left: convertTime(timeStart) * 2,
      }}
    >
      <div
        className={`relative flex items-center h-full border-2 rounded-l-full shadow-header ${borderTask(priority)} `}
      >
        <button
          className="absolute left-[-2px]"
          onClick={() => {
            handleCheckTask(id);
          }}
        >
          <i
            className={`text-2xl border-2 fa fa-check checkIcon ${completed ? 'active' : ''} ${borderTask(priority)}`}
          ></i>
        </button>
        <span className="absolute text-2xl font-medium left-[50px] ">{title}</span>
        <button>
          <i className="fa fa-ellipsis-h w-[40px] h-[40px] leading-[40px] rounded-full"></i>
        </button>
      </div>
    </div>
  );
}
