import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Container className="main">
            <Switch>
              <Route path="/" component={Main} />
              <Route path="/addContact" component={ContactForm} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
