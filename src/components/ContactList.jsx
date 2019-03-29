import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Contacts from './Contacts';

class ContactList extends Component {
  state = {
    search: ''
  };


  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }

  render() {
    const { search } = this.state;
    const { contacts, deleteContact } = this.props;
   
    let filteredContacts = contacts.filter(contact => {
      return contact.firstName.indexOf(this.state.search) !== -1;
    });

    return (
      <div>
        <h3 style={{color: "teal"}}>Contacts:</h3>
        <Input
          type="text"
          placeholder="Search contacts..."
          onChange={this.handleSearchChange}
          value={search}
          icon="search"
        />
        {filteredContacts.map(contact => (
          <Contacts 
            key={contact.id} 
            contact={contact} 
            deleteContact={deleteContact} 
          />
        ))}
      </div>
      
    )
  }
}

export default ContactList;
