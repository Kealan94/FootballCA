import React    from 'react';
import {Router} from "@reach/router";
import Footballers   from './Footballers';
import Football    from './Football';
import AddFootball from './AddFootball';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Footballers   path='/' />
        <Football    path='/football/:footballID' />
        <AddFootball path='/add-football/' />
      </Router>
    );
  }

}

export default App;