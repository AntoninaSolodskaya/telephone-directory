import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Grid } from 'semantic-ui-react';
import ContactList from './ContactList';
import { deleteContact } from '../app/actions/contactActions';
import LoadingComponent from '../app/LoadingComponent';

const mapState = state => ({
  contacts: state.firestore.ordered.contacts,
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
    if (!isLoaded(contacts) || isEmpty(contacts)) return <LoadingComponent inverted={true} />
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <ContactList 
            deleteContact={this.handleDeleteContact} 
            contacts={contacts} 
          /> 
        </Grid.Column>
      </Grid> 
    );
  }
};

export default connect(mapState, actions)(
  firestoreConnect([{ collection: 'contacts' }])(Main)
);
