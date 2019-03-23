import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../constants/contactConstants';

export const createContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: {
      contact
    }
  }
}

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      contact
    }
  }
}

export const deleteContact = (contactId) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      contactId
    }
  }
}