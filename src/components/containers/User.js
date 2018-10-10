import React, { Component } from 'react'
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser, clearCurrentProfile, registerAndSignIn } from '../../actions';
import store from '../../stores';
import setAuthToken from '../../utils/setAuthToken';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    
  }
}

class User extends Component {


  state = {
    email: '',
    password: '',
    username: '',
    errors: {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
    };
    console.log(userData)
    this.props.registerAndSignIn(userData);
  }

  logout = (e) => {
    e.preventDefault();

    this.props.logoutUser();
  }

  render() {

    const authID = this.props.auth.isAuthenticated.id;
    let isAuth;

    if (authID) {
      isAuth = (
        <div>
          <span style={{marginRight: '5px'}}>{this.props.auth.isAuthenticated.username}</span>
          <span>{this.props.auth.isAuthenticated.email}</span>
          <br />
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      isAuth = (
        <form onSubmit={this.onSubmit}>
        <input name='email' type='text' onChange={this.onChange}/>
        <br />
        <input name='username'  type='text' onChange={this.onChange}/>
        <br />
        <input name='password'  type='text' onChange={this.onChange}/>
        <br />
        <button>Submit</button>
      </form>
      )
    }

    return (
      <div>
        {isAuth}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerAndSignIn, logoutUser })(User);