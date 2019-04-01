import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import Contacts from './Contacts';

class ContactList extends Component {
  state = {
    search: '',
    currentlyDisplayed: this.props.contacts
  };

  componentWillReceiveProps(nextProps){
    const filteredContacts = nextProps.contacts.filter(contact => {
      return contact.firstName.indexOf(this.state.search) !== -1});
    this.setState({currentlyDisplayed: filteredContacts});
  };

  updateSearch = event => {
    let newlyDisplayed = this.state.currentlyDisplayed.filter(
      (contact) => { 
        return (
          contact.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          || contact.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        )}
    )
    console.log(newlyDisplayed);
    this.setState({
      search: event.target.value.substr(0, 20),
      currentlyDisplayed: newlyDisplayed
    })
  };

  render() {
    const { search, currentlyDisplayed } = this.state;
    const { deleteContact } = this.props;
   
    return (
      <div>
        <h3 style={{color: "teal"}}>Contacts:</h3>
        <Input
          type="text"
          placeholder="Search contacts..."
          onChange={this.updateSearch}
          value={search}
          icon="search"
        />
        {currentlyDisplayed.map(contact => (
          <Contacts 
            key={contact.id} 
            contact={contact} 
            deleteContact={deleteContact} 
          />
        ))}
      </div> 
    );
  }
};

export default ContactList;
