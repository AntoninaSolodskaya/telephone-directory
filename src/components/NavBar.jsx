import React, { Component } from 'react';
import { Container, Input, Menu } from 'semantic-ui-react';

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
  