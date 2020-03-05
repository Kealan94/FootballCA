 
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
  <li><a class="active" href="localhost:3001">Home</a></li>
  <li><a href="localhost:3001">Players</a></li>
  <li><a href="#club">Clubs</a></li>
  <li><a href="https://www.whoscored.com/Statistics ">stats</a></li>
</ul>
        </div>
          <h1>All Footballers in the database</h1>

          <ul>
            {this.state.footballers.map(footballer => (
              <li key={`footballer_${footballer._id}`}><Link to={`/footballer/${footballer._id}`}>{footballer.title}{footballer.description}</Link></li>
            ))}
          </ul>
          <h2>This is the homepage where you can view a list of all of the footballers and get information about them such as the clubs they have 
          played for, awards won, goals scored etc.
          </h2>
          <p><Link to='/add-footballer'>Add a new Footballer</Link></p>
          <p><Link to='/edit-footballer'>Edit a new Footballer</Link></p>
<div class = "footer">
<p>Created By: Kealan Crilly</p>
<p>Contact information: <a href="mailto:Crilly@hotmail.co.uk">Crilly@hotmail.co.uk</a></p></div>
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

