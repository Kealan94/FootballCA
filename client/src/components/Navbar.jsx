import React              from 'react'; 
import '../components/sass/main.scss';
class Navbar extends React.Component {


  render() {
      return (
        
       
<div class="navbar">
        <ul>
  <li><a class="active" href="http://localhost:3001/">Home</a></li>
  <li><a href="https://bleacherreport.com/articles/1660422-europes-50-best-footballers-of-the-season">Players</a></li>
  <li><a href="https://www.uefa.com/uefachampionsleague/">UEFA Champions League Home Page</a></li>
  <li><a href="https://www.whoscored.com/Statistics ">Stats</a></li>
</ul>
      </div>
      )


  }
  
}
export default Navbar;
