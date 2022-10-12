
import './App.css';
import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }

  onLogin = () => {
    if (this.state.username === "atmajaya" && this.state.password === "atma2022") {
      this.props.changePage("home");
    } else {
      this.setState({ errorMessage: "Invalid Login" });
    }
  }

  render() {
    return (
      <div className="Login">
        <div>
          <label>Username</label>
          <input
            value={this.state.username}
            onChange={event => this.setState({ username: event.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
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
        <button onClick={this.onLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;