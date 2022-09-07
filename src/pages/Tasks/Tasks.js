import React from 'react';
import Task from '../Home/TaskList/Task/Task';
import { useSelector } from 'react-redux';
import './Tasks.css';
import { taskListSelector } from '../../redux/selectors/selector';

export default function Tasks(props) {
  const { resDate } = props.resDate;

  const arrTime = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const taskList = useSelector(taskListSelector);

  const renderTime = () => {
    return arrTime.map((time, index) => {
      return (
        <td key={index} className="min-w-[120px] border text-center text-[20px] font-medium">
          {time}
        </td>
      );
    });
  };

  const renderTaskPriority = (priority) => {
    return taskList
      .filter((task) => +task.date.day === resDate.date)
      .filter((task) => task.priority === priority)
      .map((task, index) => {
        return (
          <tr key={index} className="relative h-[50px] border-b-2">
            <td>
              <Task task={task} />
            </td>
          </tr>
        );
      });
  };

  return (
    <table className="m-2 scrollTop">
      <thead className="mb-2 bg-red-500">
        <tr>{renderTime()}</tr>
      </thead>
      <tbody>
        {/* {renderTaskPriority('')} */}

        {renderTaskPriority('High')}
        {renderTaskPriority('Medium')}
        {renderTaskPriority('Low')}
        <tr className="relative h-[50px] border-b-2"></tr>
      </tbody>
    </table>
  );
}
