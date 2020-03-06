import React              from 'react'; 
import '../components/sass/main.scss';
class Header extends React.Component {


  render() {
      return (
        <div class="header">
        <h1>Add footballer</h1>
        <p>Please type in the name of the footballer in the box below to add a footballer to the database.</p>
      </div>
      )


  }
  
}
export default Header;
