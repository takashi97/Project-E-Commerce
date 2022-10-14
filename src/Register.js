
import './App.css';
import React from 'react';


class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nUser: "",
      nPassword: "",
      errorMessage: ""
    };
  }
  onRegister = () => {
    if(this.state.nUser !== "" && this.state.nPassword !== ""){
      this.props.changeUser({username:this.state.nUser, password:this.state.nPassword

      })
      this.props.changePage("login");
    }
  }
  render() {

    return (
      <div className="Register">
        <div className="Auth-form-container">
         <form className="Auth-form">
        <div>
          <h1> Register Page</h1>
        </div>
        <div>
          <label>Username </label>
          <input
            value={this.state.nUser}
            onChange={event => this.setState({ nUser: event.target.value })}
          />
        </div>
        <div>
          <label>Password </label>
          <input type="password"
            value={this.state.nPassword}
            onChange={event => this.setState({ nPassword: event.target.value })}
          />
        </div>

        {
          this.state.errorMessage !== "" ?
            <label>{this.state.errorMessage}<br /></label> :
            null
        }
        <button onClick={this.onRegister} tyle={{ marginTop: 20}}>
          Submit
        </button>
        </form>
      </div>
      </div>
        );
  }
}

export default Register;
