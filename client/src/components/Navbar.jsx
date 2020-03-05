import React              from 'react'; 
import '../components/sass/main.scss';
class Navbar extends React.Component {


  render() {
      return (
        
       
<div class="navbar">
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="localhost:3000/footballers">Players</a></li>
  <li><a href="#club">Clubs</a></li>
  <li><a href="https://www.whoscored.com/Statistics ">stats</a></li>
</ul>
      </div>
      )


  }
  
}
export default Navbar;
