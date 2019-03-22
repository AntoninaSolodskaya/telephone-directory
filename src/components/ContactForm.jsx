import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

class ContactForm extends Component {

  state = {
    contact: {
      firstName: '',
      lastName: '',
      phone: '',
      company: '',
      email: '',
      photo: ''
    }
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.createContact(this.state.contact);
  };

  onInputChange = evt => {
    const newContact = this.state.contact;
    newContact[evt.target.name] = evt.target.value;
    this.setState({
      contact: newContact
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { contact } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input name="firstName" onChange={this.onInputChange} value={contact.firstName} placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="lastName" onChange={this.onInputChange} value={contact.lastName}  placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>Telephone</label>
            <input name="phone" onChange={this.onInputChange} value={contact.phone} placeholder='Your number phone' />
          </Form.Field>
          <Form.Field>
            <label>Company</label>
            <input name="company" onChange={this.onInputChange} value={contact.company} placeholder='Your Company' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input name="email" onChange={this.onInputChange} value={contact.email} placeholder='Your Email' />
          </Form.Field>
          <Form.Field>
            <label>Photo</label>
            <input name="photo" onChange={this.onInputChange} value={contact.photo} placeholder='Your Photo' />
          </Form.Field>
          <Button type='submit' color="teal" content="Submit"/>
          <Button 
            type='button'
            color='grey'
            floated='right'
            content='Cancel'
            onClick={handleCancel}
          />
        </Form>
      </Segment>
      
    )
  }
}

export default ContactForm;
