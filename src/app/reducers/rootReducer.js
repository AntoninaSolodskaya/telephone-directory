import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import contactReducer from './contactReducer';


const rootReducer = combineReducers({
  form: FormReducer,
  contacts: contactReducer,
  
})

export default rootReducer;
