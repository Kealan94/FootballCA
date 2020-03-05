import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import '../components/sass/main.scss';

class Footballer extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.footballer && this.state.footballerLoaded === true) {
      return (
        <p>Error loading footballer. Try again later.</p>
      );
    } else if (!this.state.footballer) {
      return (
        <p>Loading footballer...</p>
      );
    } else if (this.state.footballer.length === 0) {
      return (
        <p>Sorry, no footballer are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.footballer.id}</h1>
          <h1>{this.state.footballer.title}</h1>
          <h1>{this.state.footballer.name}</h1>
          <h1>{this.state.footballer.age}</h1>
          <h2>{this.state.footballer.club}</h2>
      
 
      <Link to='/'>Back to All footballers on the home page </Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.footballsAPI}/${this.props.footballID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({footballer      : json});
        this.setState({footballLoaded : true});
      })
      .catch(err => {
        this.setState({footballerLoaded: true});
      });
  }

}

export default Footballer;
