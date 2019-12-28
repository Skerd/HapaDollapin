import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import {Container} from 'reactstrap';

import ClinicModal from './components/ClinicModel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Provider} from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';


class App extends Component {


  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (

      <Provider store={store}  >
        <div className="App">
          <AppNavbar />
          <Container>
            <ClinicModal/>
            <ShoppingList />
          </Container>

        </div>
      </Provider>

    );
  }
}

export default App;
