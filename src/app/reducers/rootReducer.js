import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import contactReducer from './contactReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  contacts: contactReducer,
  async: asyncReducer
})

export default rootReducer;
