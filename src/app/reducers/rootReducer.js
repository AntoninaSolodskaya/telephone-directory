import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import contactReducer from './contactReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  contacts: contactReducer,
  async: asyncReducer
})

export default rootReducer;
