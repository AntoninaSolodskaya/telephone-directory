import React, { Component } from 'react';
import Contacts from './Contacts';

class ContactList extends Component {
  
  render() {
    const { contacts, onContactOpen, deleteContact } = this.props;

    return (
      <div>
        <h3 style={{color: "teal"}}>Contacts:</h3>
        {contacts && contacts.map(contact => (
          <Contacts 
            key={contact.id} 
            contact={contact} 
            onContactOpen={onContactOpen} 
            deleteContact={deleteContact} 
          />
        ))}
      </div>
      
    )
  }
}

export default ContactList;
