import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Header extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################


  // #######################################################
  // # Render
  // #######################################################

  render() {
      return (
      
          <Header>
            <div>
          <h1> Header </h1>
          </div>
          </Header>

      )


  }
  
}
export default Header;
