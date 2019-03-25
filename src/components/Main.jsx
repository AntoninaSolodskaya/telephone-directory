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
