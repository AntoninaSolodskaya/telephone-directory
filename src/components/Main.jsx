import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ContactList from './ContactList';
import { deleteContact } from '../app/actions/contactActions';
import LoadingComponent from '../app/LoadingComponent';

const mapState = state => ({
  contacts: state.contacts,
  loading: state.async.loading
});

const actions = {
  deleteContact,
}
class Main extends Component {
  
  handleDeleteContact = contactId => () => {
    this.props.deleteContact(contactId);
  };

  render() {
    const { contacts, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />
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

export default connect(mapState, actions)(Main);
