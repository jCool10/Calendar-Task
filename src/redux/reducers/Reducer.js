import { ADD_TASK_TYPE, CHECK_TASK_TYPE } from '../types/types';

const initialState = {
  taskList: [
    {
      id: 1,
      title: 'Learn React',
      completed: false,
      priority: 'High',
      timeStart: '00:30',
      timeEnd: '04:30',
      date: {
        day: '6',
        month: '9',
        year: '2022',
      },
    },
    {
      id: 2,
      title: 'Learn Web',
      completed: true,
      priority: 'Low',
      timeStart: '00:30',
      timeEnd: '04:30',
      date: {
        day: '6',
        month: '9',
        year: '2022',
      },
    },
  ],
};

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_TYPE: {
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    }

    case CHECK_TASK_TYPE: {
      const newTaskList = state.taskList;
      let index = newTaskList.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        newTaskList[index].completed = !state.taskList[index].completed;
      }
      // console.log(newTaskList[index]);
      state.taskList = newTaskList;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
