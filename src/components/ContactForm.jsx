import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { composeValidators, combineValidators, isNumeric, createValidator, isRequired, hasLengthGreaterThan } from 'revalidate';
import { Form, Button, Segment } from 'semantic-ui-react';
import { createContact, updateContact } from '../app/actions/contactActions';
import cuid from 'cuid';
import TextInput  from '../app/form/TextInput';
import FileInput from '../app/form/FileInput';

const mapState = (state, ownProps) => {
  const contactId = ownProps.match.params.id;

  let contact = {};

  if (contactId && state.contacts.length > 0) {
    contact = state.contacts.filter(contact => contact.id === contactId)[0];
  }

  return {
    initialValues: contact
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

  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateContact(values);
      this.props.history.goBack();
    } else {
      const newContact = {
        ...values,
        id: cuid(),
        photo: '/assets/user.png'
      }
      this.props.createContact(newContact);
      this.props.history.push('/contacts');
    }
  };

  render() {
  
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

export default connect(mapState, actions)(
  reduxForm({ form: 'contactForm', enableReinitialize: true, validate })(ContactForm)
);
