import { FETCH_CONTACTS } from '../constants/contactConstants';
import { asyncActionStart, asyncActionError, asyncActionFinish } from '../async/asyncActions';
import { fetchSampleData } from '../data/mockApi';
import cuid from 'cuid';
import firebase from '../config/firebase';

export const fetchContacts = contacts => {
  return {
    type: FETCH_CONTACTS,
    payload: contacts
  };
};

export const createNewContact = contact => {
  return {
    ...contact
  }
};

export const createContact = contact => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    let newContact = createNewContact(contact)
    try {
      let createdContact = await firestore.add(`contacts`, newContact);
      console.log(createdContact);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateContact = contact => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`contacts/${contact.id}`, contact)
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteContact = contactId => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    try {
      await firestore.delete(`contacts/${contactId}`)
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadContacts = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let contacts = await fetchSampleData();
      dispatch(fetchContacts(contacts))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
