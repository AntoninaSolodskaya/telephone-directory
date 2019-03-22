import React, { Component } from 'react';
import Contacts from './Contacts';

class ContactList extends Component {
  
  render() {
    const { contacts } = this.props;

    return (
      <div>
        <h3>Contacts:</h3>
        {contacts && contacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </div>
      
    )
  }
}

export default ContactList;
