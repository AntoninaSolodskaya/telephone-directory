import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Button, List } from 'semantic-ui-react';

class Contacts extends Component {

  render() {
    
    const { contact, deleteContact } = this.props;
    
    return (
      <Card style={{ width: "500px" }}>
        <Card.Content>
          <Image 
            size='tiny'
            id="myimg" 
            src={contact.photo || "assets/user.png"} 
            style={{ marginBottom: "0" }} 
          />
          <List style={{ margin: "0", minWidth: "70%", marginLeft: "10px" }}>
            <List.Item>
              <List.Icon name='users' />
              <List.Content>{contact.firstName} {contact.lastName}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='phone' />
              <List.Content>{contact.phone}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                {contact.email}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>{contact.company}</List.Content>
            </List.Item>
          </List>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap"}}>
            <Button 
              as={Link}
              to={`/manage/${contact.id}`}
              circular 
              basic 
              color='green' 
              icon="edit"
              style={{ maxHeight: "35px"}} 
            />
            <Button 
              circular 
              basic 
              color="red"
              icon="trash"
              style={{ maxHeight: "35px"}} 
              onClick={deleteContact(contact.id)} 
            />
          </div>
          
        </Card.Content>
      </Card>
    )
  }
}

export default Contacts;
