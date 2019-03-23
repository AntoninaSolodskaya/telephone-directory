import { createReducer } from '../util/reducerUtil';
import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../constants/contactConstants';

const initialState = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Watson',
    phone: '+3805022244466',
    company: 'Singapur',
    email: 'test@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg'
  },{
    id: '8',
    firstName: 'Bob',
    lastName: 'Doe',
    phone: '+3809855566688',
    company: 'SityMall',
    email: 'bob@test.com',
    photo: 'https://randomuser.me/api/portraits/men/20.jpg'
  }
];

export const createContact = (state, payload) => {
  return [...state, Object.assign({}, payload.contact)]
}

export const updateContact = (state, payload) => {
  return [
    ...state.filter(contact => contact.id !== payload.contact.id),
    Object.assign({}, payload.contact)
  ]
}

export const deleteContact = (state, payload) => {
  return [
    ...state.filter(contact => contact.id !== payload.contactId)
  ]
}

export default createReducer(initialState, {
  [CREATE_CONTACT]: createContact,
  [UPDATE_CONTACT]: updateContact,
  [DELETE_CONTACT]: deleteContact
})
