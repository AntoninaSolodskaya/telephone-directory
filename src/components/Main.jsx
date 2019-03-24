import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ContactList from './ContactList';
import { deleteContact } from '../app/actions/contactActions';

const mapState = state => ({
  contacts: state.contacts
});

const actions = {
  deleteContact,
}
class Main extends Component {
  
  handleDeleteContact = contactId => () => {
    this.props.deleteContact(contactId);
  };

  render() {
    const { contacts } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            
          </Grid.Column>
          <Grid.Column width={10} style={{ paddingTop: "15px" }}> 
            <ContactList 
              deleteContact={this.handleDeleteContact} 
              contacts={contacts} 
            />
          </Grid.Column>
        </Grid>
      </div>
      
    )
  }
}

export default connect(mapState, actions)(Main);
