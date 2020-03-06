import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import Header             from './Header';
import Navbar             from './Navbar';

class EditFootballer extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title     : '',
    name      : '',
    age       :'',
    club      : ''
      }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the footballer. The error was: {this.state.reportedError || 'Unknown'}</p>
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
          <h1>Edit footballer</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div class="navbar">
        <ul>
  <li><a class="active" href="localhost:3000/footballers">Home</a></li>
  <li><a href="localhost:3001">Players</a></li>
  <li><a href="https://europeanleagues.com/">Clubs</a></li>
  <li><a href="https://www.whoscored.com/Statistics ">Stats</a></li>
</ul>
        </div>
            <div>
              <label>footballer Title:
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div><div>
              <label>footballer name:
                <input type='' value={this.state.name} onChange={this.handleNameUpdate.bind(this)} />
              </label>
            </div><div>

              <label>footballer Age:
                <input type='' value={this.state.age} onChange={this.handleAgeUpdate.bind(this)} />
              </label>
            </div>

            <div>

              <label>football Club:
                <input type='' value={this.state.club} onChange={this.handleClubUpdate.bind(this)} />
              </label>
            </div>



            {/* <div>
              <label>football Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Edit Footballer' />
            </div>

            

          </form>
          <Link to='/'>Back to All footballers</Link>
          <div class = "footer">
<p>Created By: Kealan Crilly</p>
<p>Contact information: <a href="mailto:Crilly@hotmail.co.uk">Crilly@hotmail.co.uk</a></p></div>
        </div>
        
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }


  handleNameUpdate(e) {
    this.setState({name: e.target.value || null});

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
        name      : this.state.name,
        age       : this.state.age,
        club      : this.state.club,
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/football/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.footballID);
  }

}

export default EditFootballer;