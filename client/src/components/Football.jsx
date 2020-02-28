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

    if (!this.state.Football && this.state.FootballLoaded === true) {
      return (
        <p>Error loading Footballs. Try again later.</p>
      );
    } else if (!this.state.football) {
      return (
        <p>Loading Footballs...</p>
      );
    } else if (this.state.football.length === 0) {
      return (
        <p>Sorry, no Footballs are available</p>
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
    fetch(urlToCurrentDomain(`${Config.footballsAPI}/${this.props.footballID}`))
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

export default Football;