import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import Header         from './Header';
import Navbar         from './Navbar';
import Footer        from './Footer';

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
        <p>Error loading footballers. Try again later.</p>
      );
    } else if (!this.state.footballer) {
      return (
        <p>Loading footballers...</p>
      );
    } else if (this.state.footballer.length === 0) {
      return (
        <p>Sorry, no footballers are available</p>
      );
    } else {
      return (
        <body>
        <div>
          <Navbar></Navbar>
        <Header> </Header>
      
        
          <h1>name: {this.state.footballer.title}</h1>
          <div >
          <h1><img class ="image" src={this.state.footballer.image}></img></h1></div>
          <h1>age:{this.state.footballer.age}</h1>
          <h1>club:{this.state.footballer.club}</h1>

          <Link to='/'>Back to All footballers</Link>
        </div>
        <footer><Footer></Footer></footer>
        </body>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.footballsAPI}/${this.props.footballerID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({footballer       : json});
        this.setState({footballerLoaded : true});
      })
      .catch(err => {
        this.setState({footballerLoaded: true});
      });
  }

}

export default Footballer;
