import React    from 'react';
import {Router} from "@reach/router";
import Footballers   from './Footballers';
import Footballer    from './Footballer';
import AddFootballer from './AddFootballer';
import EditFootballer from './EditFootballer';
import Header         from './Header';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header     path = '/Header' />
        <Footballers   path='/' /> 
        <Footballer    path='/footballer/:footballerID' />
        <AddFootballer path='/add-footballer/' />
       <EditFootballer path='/edit-footballer/' /> 
       
      </Router>
    );
  }

}

export default App;