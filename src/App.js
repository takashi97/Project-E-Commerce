
import './App.css';
import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      users:[{username:"", password:""}, {}],
      currentUser:null
  
    };
  }
  changePage = newPage => {
    this.setState({page: newPage});
  }
  changeUser = nUser =>{
    this.setState({users: this.state.users.concat(nUser)})
  }
  setCurrentUser = user =>{
    this.setState({currentUser: user})
  }
 
  //#Ver01
  //studentDel = (student)  => () =>{
  //  const students = this.state.students.filter(name => {
  //    
  //    return student !== name
        
    
  //  })
  //  this.setState({students})
  //}
  
  render() {
    return (
      <div className="App">
        {
          this.state.page === "login" ?
          <Login changePage={this.changePage} users={this.state.users} setCurrentUser={this.setCurrentUser}/>:
          
          this.state.page === "home" ?
          <Home changePage={this.changePage} users={this.state.users} currentUser={this.state.currentUser}/> :
          <Register changePage={this.changePage} changeUser={this.changeUser}
          
          
          />
        }

        
        

      </div>
    );
  }
}

export default App;