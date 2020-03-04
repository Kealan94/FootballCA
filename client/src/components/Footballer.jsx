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
          <h1>{this.state.footballer.title}</h1>
          <h2>{this.state.footballer.description}</h2>
          <h3>Lionel Andrés Messi eas born on the 24th of June 1987. He is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards, and a record six European Golden Shoes. He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles and six Copas del Rey. 
          A prolific goalscorer and a creative playmaker, Messi holds the records for most goals in La Liga (437), a La Liga and European league season (50), most hat-tricks in La Liga (36) and the UEFA Champions League (8), and most assists in La Liga (181) and the Copa América (12).
           He has scored over 700 senior career goals for club and country. Born and raised in central Argentina, Messi relocated to Spain to join Barcelona at age 13, for whom he made his competitive debut aged 17 in October 2004. </h3>       
 
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
