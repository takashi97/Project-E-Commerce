
import './App.css';
import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: "login"
    };
  }
  changePage = newPage => {
    this.setState({page: newPage});
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
          <Login changePage={this.changePage} />:
          <Home changePage={this.changePage}/>
        }
      </div>
    );
  }
}

export default App;