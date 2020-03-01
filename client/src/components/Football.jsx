import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Football extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.football && this.state.footballLoaded === true) {
      return (
        <p>Error loading footballs. Try again later.</p>
      );
    } else if (!this.state.football) {
      return (
        <p>Loading footballs...</p>
      );
    } else if (this.state.football.length === 0) {
      return (
        <p>Sorry, no footballs are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.football.title}</h1>
          <Link to='/'>Back to All footballs</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.footballersAPI}/${this.props.footballID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({football       : json});
        this.setState({footballLoaded : true});
      })
      .catch(err => {
        this.setState({footballLoaded: true});
      });
  }

}

export default Cake;
