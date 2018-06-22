import { combineReducers } from 'redux';
import todos from './todo';
import VisibilityFilters from './visibilityFilter';

export default combineReducers(
  {
    todos,
    VisibilityFilters
  }
);