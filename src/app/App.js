import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import HomePage from '../components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
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
          )}
        />
      </div>            
    );
  }
}

export default App;
