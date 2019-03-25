import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, FETCH_CONTACTS } from '../constants/contactConstants';
import { asyncActionStart, asyncActionError, asyncActionFinish } from '../async/asyncActions';
import { fetchSampleData } from '../data/mockApi';

export const fetchContacts = contacts => {
  return {
    type: FETCH_CONTACTS,
    payload: contacts
  }
};

export const createContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: {
      contact
    }
  }
};

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      contact
    }
  }
};

export const deleteContact = (contactId) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      contactId
    }
  }
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
  }
}
