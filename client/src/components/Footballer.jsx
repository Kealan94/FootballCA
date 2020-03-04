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
           He has scored over 700 senior career goals for club and country. Born and raised in central Argentina, Messi relocated to Spain to join Barcelona at age 13, for whom he made his competitive debut aged 17 in October 2004. 


           He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 he helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. 
           Three successful seasons followed, with Messi winning three consecutive Ballons d'Or, including an unprecedented fourth. During the 2011–12 season, he set the La Liga and European records for most goals scored in a single season, while establishing himself as Barcelona's all-time top scorer. The following two seasons, Messi finished second for the Ballon d'Or behind Cristiano Ronaldo—his perceived career rival—before regaining his best form during the 2014–15 campaign, 
           becoming the all-time top scorer in La Liga and leading Barcelona to a historic second treble, after which he was awarded a fifth Ballon d'Or in 2015. Messi assumed the captaincy of Barcelona in 2018, and in 2019 he secured a record sixth Ballon d'Or.
An Argentine international, Messi is his country's all-time leading goalscorer. At youth level, he won the 2005 FIFA World Youth Championship, finishing the tournament with both the Golden Ball and Golden Shoe, and an Olympic gold medal at the 2008 Summer Olympics. 
His style of play as a diminutive, left-footed dribbler drew comparisons with his compatriot Diego Maradona, who described Messi as his successor. After his senior debut in August 2005, Messi became the youngest Argentine to play and score in a FIFA World Cup during the 2006 edition, and reached the final of the 2007 Copa América, where he was named young player of the tournament. As the squad's captain from August 2011, he led Argentina to three consecutive finals: the 2014 FIFA World Cup, for which he won the Golden Ball, and the 2015 and 2016 Copas América. 
After announcing his international retirement in 2016, he reversed his decision and led his country to qualification for the 2018 FIFA World Cup, and a third-place finish at the 2019 Copa América.</h3>       
      
      
      
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
