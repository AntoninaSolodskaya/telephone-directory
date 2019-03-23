import React, { Component } from 'react';
import { Container, Input, Menu, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted fixed="top" style={{backgroundColor: "teal"}}>
          <Container>
            <Menu.Item 
              as={NavLink} 
              to="/" 
              name="Contacts" 
              style={{ fontSize: "22px"}} 
            />
            <Menu.Item>
              <Button
                as={Link}
                to="/addContact"
                floated="right"
                inverted
                content="Create Contact"
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                floated="right"
                inverted
                content="Change Contact"
              />
            </Menu.Item>
          </Container>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default  NavBar;
  