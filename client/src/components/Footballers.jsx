 
import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Footballers extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.footballers && this.state.footballersLoaded === true) {
      return (
        <p>Error loading footballers. Try again later.</p>
      );
    } else if (!this.state.footballers) {
      return (
        <p>Loading footballers...</p>
      );
    } else if (this.state.footballers.length === 0) {
      return (
        <p>Sorry, no footballers are available</p>
      );
    } else {
      return (
        <div>
        <div class="navbar">
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        </div>
          <h1>All Footballers in the database</h1>
          <ul>
            {this.state.footballers.map(footballers => (
              <li key={`footballers_${footballers._id}`}><Link to={`/footballers/${footballers._id}`}>{footballers.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-footballer'>Add a new Footballer</Link></p>
          <p><Link to='/add-footballer'>Edit a new Footballer</Link></p>
          <p><Link to='/add-footballer'>Delete a new Footballer</Link></p>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.footballsAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({footballers       : json});
        this.setState({footballersLoaded : true});
      })
      .catch(err => {
        this.setState({footballersLoaded: true});
      });
  }

}

export default Footballers;

