import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import {connect} from 'react-redux'; 





import './i.css'; 
// import megamenu
import megamenu from '../commonFeilds/megamenu/megamenu'; 


// ACTIONS 
import {logoutUser} from '../../actions/authAction' ; 
import {clearCurrentProfile} from '../../actions/profileAction'; 


class Navbar extends Component {

  onLogoutClick = (e) => {
    e.preventDefault(); 
    this.props.clearCurrentProfile(); // clearing the profile before logout
    this.props.logoutUser(); // firing the action here 
  }


  render() {

    const {isAuthenticate, user} = this.props.auth;

    const logedInUserLinks = (
      <React.Fragment>
         <li>
      <Link to="/feed"> PostsFeed </Link>
    </li>
      <li>
        <Link to="/dashboard"> Dashboard </Link>
      </li>
      <li>
          <a href="#" onClick={this.onLogoutClick}> 
            <img src={user.avatar}  
            alt={user.name} 
            className="rounded-circle"
            style={{
              width: '25px',
              marginRight: '5px'
            }}
            title="you must have a Gravatar connect to your email for displaying image"/>
            Logout
          </a>
      </li>
      </React.Fragment>
    ); 
    const newUserLinks = (
     <React.Fragment>
        <li>
        <Link to="/register">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
     </React.Fragment>
    ); 


    

    return (
      
  <header>
  <Link className="logo" to="/">ToPerfect</Link>
    <div class="menu-toggle"></div>
 <nav>
   <ul>
     <li>
        <Link className="active" to="/profiles"> Students</Link>
     </li>
     <li>
       <a href="#">Sports</a>
     </li>
      {isAuthenticate ? logedInUserLinks : newUserLinks} {/* Conditional rendering */}
   </ul>
 </nav>
 <div class="clearfix"></div>
</header>
    )
  }
}; 


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{logoutUser,clearCurrentProfile})(Navbar); 