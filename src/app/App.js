import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
