import './App.css';
import React from 'react';


class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username:"",
        password:"",
      errorMessage: ""
    };
  }

  onLogin = () => {
    if(this.props.users.find(nUser => (nUser.username === this.state.username && nUser.password === this.state.password)))
    {this.props.changePage("home");
    this.props.setCurrentUser(this.props.users.find(nUser => (nUser.username === this.state.username && nUser.password === this.state.password)))
    } else {
      this.setState({ errorMessage: "Invalid Login Info" });
    }
  }
  onRegister = () => {
    this.props.changePage("register");
  }

  render() {
    return (
      <div className="Login">
         <div className="Auth-form-container">
         <form className="Auth-form">
        <div>
          <h1> Sign In</h1>
        </div>
        <div>
          <label>Username </label>
          <input
            value={this.state.username}
            onChange={event => this.setState({ username: event.target.value })}
          />
        </div>
        <div>
          <label>Password </label>
          <input type="password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>

        {
          this.state.errorMessage !== "" ?
            <label>{this.state.errorMessage}<br /></label> :
            null
        }
        <button onClick={this.onLogin} style={{ marginTop: 20}}>
          Masuk
        </button>

        <p className="text-center mt-2">
            New? <a href="#" onClick={this.onRegister}>Register</a>
          </p>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;