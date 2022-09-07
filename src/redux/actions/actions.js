import { ADD_TASK_TYPE, FILTER_PRIORITY, CHECK_TASK_TYPE } from '../types/types';

export const addTaskAction = (payload) => ({
  type: ADD_TASK_TYPE,
  payload,
});

export const checkTaskAction = (payload) => ({
  type: CHECK_TASK_TYPE,
  payload,
});

export const filterPriorityAction = (payload) => ({
  type: FILTER_PRIORITY,
  payload,
});
