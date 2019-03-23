import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import { createContact, deleteContact, updateContact } from '../app/actions/contactActions';

const mapState = state => ({
  contacts: state.contacts
});

const actions = {
  createContact,
  deleteContact,
  updateContact
}
class Main extends Component {
  state = {
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

  handleUpdateContact = () => {
    this.props.updateContact();
    this.setState({
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

  handleDeleteContact = contactId => () => {
    this.props.deleteContact(contactId);
  };

  render() {
    const { selectedContact } = this.state;
    const { contacts } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            <Button
              type='button'
              color='teal'
              content='Add Contact' 
              onClick={this.handleFormOpen}
            />
            {this.state.isOpen && (
              <ContactForm 
                selectedContact={selectedContact} 
                handleCancel={this.handleCancel} 
              />
            )}
          </Grid.Column>
          <Grid.Column width={10} style={{ paddingTop: "15px" }}> 
            <ContactList 
              deleteContact={this.handleDeleteContact} 
              onContactOpen={this.handleOpenContact} 
              contacts={contacts} 
            />
          </Grid.Column>
        </Grid>
      </div>
      
    )
  }
}

export default connect(mapState, actions)(Main);
