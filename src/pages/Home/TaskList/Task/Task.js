import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import { checkTaskAction } from '../../../../redux/actions/actions';

export default function Task(props) {
  const {
    task: { id, title, completed, priority, timeStart, timeEnd },
  } = props;

  const dispatch = useDispatch();

  const convertTime = (time) => {
    var a = time.split(':'); // split it at the colons
    var seconds = +a[0] * 60 + +a[1];
    return seconds;
  };

  const handleCheckTask = (id) => {
    dispatch(checkTaskAction(id));
  };

  const checkPriority = (priority) => {
    return priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray';
  };

  return (
    <>
      <div
        className={`absolute top-[5px] h-[40px]`}
        style={{
          width: (convertTime(timeEnd) - convertTime(timeStart)) * 2,
          left: convertTime(timeStart) * 2,
        }}
      >
        <div
          className="relative flex items-center h-full rounded-l-full"
          style={{
            borderColor: 'red',
            // backgroundColor: `${priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray'}`,
            border: `2px solid ${checkPriority(priority)}`,
            backgroundColor: `${completed ? `${checkPriority(priority)}` : 'transparent'}`,
          }}
        >
          <button
            className="absolute left-[-2px]"
            onClick={() => {
              handleCheckTask(id);
            }}
          >
            <i
              class="fa fa-check w-[42px] h-[42px] leading-[42px] border-2  rounded-full"
              style={{
                backgroundColor: `${completed ? '#25b99a' : 'white'}`,
                color: `${completed ? 'white' : '#25b99a'}`,
                borderColor: `${checkPriority(priority)}`,
              }}
            ></i>
          </button>
          <span className="absolute text-2xl font-medium left-[50px] ">{title}</span>
          <button>
            <i class="fa fa-ellipsis-h w-[40px] h-[40px] leading-[40px] rounded-full"></i>
          </button>
        </div>
      </div>
    </>
  );
}
