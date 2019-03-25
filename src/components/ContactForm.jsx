import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { Field, reduxForm } from 'redux-form';
import { composeValidators, combineValidators, isNumeric, createValidator, isRequired, hasLengthGreaterThan } from 'revalidate';
import { Form, Button, Segment } from 'semantic-ui-react';
import { createContact, updateContact } from '../app/actions/contactActions';
import TextInput  from '../app/form/TextInput';
import FileInput from '../app/form/FileInput';

const mapState = state => {
  
  let contact = {};

  if (state.firestore.ordered.contacts && state.firestore.ordered.contacts[0]) {
    contact = state.firestore.ordered.contacts[0];
  }

  return {
    initialValues: contact,
    contact
  }
};


const actions = {
  createContact,
  updateContact
};

const customIsRequired = isRequired({ message: 'Required' });
const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message
    }
  },
  'Invalid email address'
);

const validate = combineValidators({
  firstName: composeValidators(
    isRequired({message: "Name is required"}),
    hasLengthGreaterThan(3)({message: "Needs to be at lest 4 charcters"})
  )(),
  lastName: composeValidators(
    isRequired({message: "Name is required"}),
    hasLengthGreaterThan(3)({message: "Needs to be at lest 4 charcters"})
  )(),
  phone: composeValidators(
    customIsRequired,
    isNumeric({
      message: 'Must be a number'
    }),
    hasLengthGreaterThan(11)({
      message: 'Must be 12 characters or less'
    })
  )(),
  company: isRequired({message: "Company is required"}),
  email: composeValidators(
    customIsRequired,
    isValidEmail
  )(),
  photo: isRequired({message: "Photo is required"})
})
  


class ContactForm extends Component {

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.get(`contacts/${match.params.id}`);
  };

  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateContact(values);
      
      this.props.history.goBack();
    } else {
      this.props.createContact(values);
      console.log(values);
      this.props.history.push('/contacts');
    }
  };

  render() {
  const { invalid, submitting, pristine } = this.props;
    return (
        <Segment>
          <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <Field
              name="firstName"
              type="text"
              component={TextInput}
              placeholder="Enter Your Name"
            />
            <Field
              name="lastName"
              type="text"
              component={TextInput}
              placeholder="Enter Your Surname"
            />
             <Field
              name="phone"
              component={TextInput}
              type="text" 
              step="any" 
              placeholder="Phone Number"
              style={{ marginBottom: "15px" }}
            />
            <Field
              name="company"
              type="text"
              component={TextInput}
              placeholder="Enter Your Company"
            />
            <Field
              name="email"
              type="text"
              component={TextInput}
              placeholder="Enter Your Email"
            />
            <Field
              name="photo"
              type="file"
              component={FileInput}
            />
            <Button 
              type='submit' 
              color="teal" 
              content="Submit"
              disabled={invalid || submitting || pristine}
            />
            <Button 
              type='button'
              color='grey'
              floated='right'
              content='Cancel'
              onClick={this.props.history.goBack}
            />
          </Form>
        </Segment>
    );
  }
};

export default withFirestore(
  connect(mapState, actions)(
    reduxForm({ form: 'contactForm', enableReinitialize: true, validate })(ContactForm)
  )
);
