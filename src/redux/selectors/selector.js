import { createSelector } from 'reselect';

export const taskListSelector = (state) => state.Reducer.taskList;

export const taskListRemainingSelector = createSelector(taskListSelector);
