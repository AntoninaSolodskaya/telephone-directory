import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const contacts = [
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

class Main extends Component {
  state = {
    contacts,
    isOpen: false,
    selectedContact: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedContact: null
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateContact = updatedContact => {
    this.setState({
      contacts: this.state.contacts.map(contact => {
        if (contact.id === updatedContact.id) {
          return Object.assign({}, updatedContact);
        } else {
          return contact
        }
      }),
      isOpen: false,
      selectedContact: null
    });
  };
  
  handleOpenContact = contactToOpen => () => {
    this.setState({
      selectedContact: contactToOpen,
      isOpen: true
    })
  }

  handleCreateContact = newContact => {
    newContact.id = cuid();
    newContact.photo = '/assets/user.png';
    const updatedContact = [...this.state.contacts, newContact];
    this.setState({
      contacts: updatedContact,
      isOpen: false
    });
  };

  handleDeleteContact = contactId => () => {
    const updatedContacts = this.state.contacts.filter(e => e.id !== contactId);
    this.setState({
      contacts: updatedContacts
    });
  };

  render() {
    const {selectedContact} = this.state;
    return (
      <div>
        <Header as='h1' textAlign='center' color="teal">My Phone Book</Header>
        <Grid>
          <Grid.Column width={6}>
            <Button
              type='button'
              color='teal'
              content='Add Contact' 
              onClick={this.handleFormOpen}
            />
            {this.state.isOpen && (
              <ContactForm updateContact={this.handleUpdateContact} selectedContact={selectedContact} createContact={this.handleCreateContact} handleCancel={this.handleCancel} />
            )}
          </Grid.Column>
          <Grid.Column width={10} style={{ paddingTop: "15px" }}> 
            <ContactList deleteContact={this.handleDeleteContact} onContactOpen={this.handleOpenContact} contacts={this.state.contacts} />
          </Grid.Column>
        </Grid>
      </div>
      
    )
  }
}

export default Main;
