import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top" style={{backgroundColor: "teal"}}>
          <Container>
            <Menu.Item 
              name="My Phone Book" 
              style={{ fontSize: "22px"}} 
            />
            <Menu.Item 
              as={NavLink}
              to="/contacts"
              name="Contacts" 
              style={{ fontSize: "22px"}} 
            />
            <Menu.Item>
              <Button 
                as={Link}
                to="/addContact"
                content="AddContact" 
              />
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
  