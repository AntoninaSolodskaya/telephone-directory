import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import { configureStore } from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Container className="main">
             <Main />
            </Container>
          </div>
        </BrowserRouter>  
      </Provider>
      
    );
  }
}

export default App;
