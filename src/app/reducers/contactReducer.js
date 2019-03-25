import { createReducer } from '../util/reducerUtil';
import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, FETCH_CONTACTS } from '../constants/contactConstants';

const initialState = [];

export const createContact = (state, payload) => {
  return [...state, Object.assign({}, payload.contact)]
};

export const updateContact = (state, payload) => {
  return [
    ...state.filter(contact => contact.id !== payload.contact.id),
    Object.assign({}, payload.contact)
  ]
};

export const deleteContact = (state, payload) => {
  return [
    ...state.filter(contact => contact.id !== payload.contactId)
  ]
};

export const fetchContacts = (state, payload) => {
  return payload.contacts
};

export default createReducer(initialState, {
  [CREATE_CONTACT]: createContact,
  [UPDATE_CONTACT]: updateContact,
  [DELETE_CONTACT]: deleteContact,
  [FETCH_CONTACTS]: fetchContacts
})
