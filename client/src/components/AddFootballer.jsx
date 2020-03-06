
import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import '../components/sass/main.scss';
import Header             from './Header';
import Navbar             from './Navbar';
import Footer             from './Footer';
class AddFootballer extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title    : '',
    image    : '',
    age    : '',
    club    : '',
  

 
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the fooballer. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All footballers</Link>
        </div>
      );
    } else if (this.state.processingAdd) {
      return (
        <div>Adding footballer...</div>
      );
    } else {
      return (
        <div>
          <h1>Add a footballer</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <Navbar></Navbar>
          <Header> </Header>
          <Footer></Footer>
        
            <div>
              <label>fooballer title:
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div>
       
 
            <div>
              <label>fooballer image:
                <input type='' value={this.state.image} onChange={this.handleImageUpdate.bind(this)} />
              </label>
            </div>
        
        
            <div>
              <label>fooballer Age:
                <input type='' value={this.state.age} onChange={this.handleAgeUpdate.bind(this)} />
              </label>
            </div>
            
            <div>
              <label>fooballer club:
                <input type='' value={this.state.club} onChange={this.handleClubUpdate.bind(this)} />
              </label>
            </div>
            <div>
              <input type='submit' value='Add Footballer' />

 
            </div>

          </form>
          <Link to='/'>Back to All footballers</Link>
        </div>
      );
    }
  }
  

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }
 
  
  handleImageUpdate(e) {
    this.setState({image: e.target.value || null});
  }
 
  
  handleAgeUpdate(e) {
    this.setState({age: e.target.value || null});
  }
 
  
  handleClubUpdate(e) {
    this.setState({club: e.target.value || null});
  }
 
 
  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.footballsAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        image     : this.state.image,
        age     : this.state.age,
        club     : this.state.club,

  
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/footballer/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.footballerID);
  }

}

export default AddFootballer;