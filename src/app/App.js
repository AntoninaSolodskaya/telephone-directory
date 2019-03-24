import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Container className="main">
            <Switch>
              <Route path="/contacts" component={Main} />
              <Route path="/addContact" component={ContactForm} />
              <Route path="/manage/:id" component={ContactForm} />
            </Switch>
          </Container>
      </div>            
    );
  }
}

export default App;
