
import './App.css';
import React from 'react';
import axios from 'axios';
import AgeComponent from './AgeComponent.js';
class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Tobias",
      age: 22,
      students : [""],
      newStudent: "",
      editStudent: "",
      editStudentIndex: -1,
      fruitID: "",
      fruitName: "",

    };
  }
  componentDidUpdate() {
    console.log("Name is Updated.")
  }
  incrementAge(){
    this.setState({ age: this.state.age + 1 });
  }
  //incrementAge = () =>{
  //  this.setState({ age: this.state.age + 1 });
  //}
  //Bind bisa dihilangkan
  decrementAge(){
    this.setState({ age: this.state.age - 1 });
  }
  studentAdd(){
    const students = this.state.students
    students.push(this.state.name)
    this.setState({students})
  }
  onLogout = () => {
    this.props.changePage("login")
  }
  componentDidMount() {
    // axios.get("/api/fruit/all").then(res => {
    //   this.setState({
    //     students: res.data.map(fruit => fruit.name)
    //   })
    // })
    axios.get("/api/fruit/all").then(res => {
      this.setState({
        students: res.data.map(fruit => fruit.name)
      })
    }) 
  }
  handleSearch = () => {
    axios.get(`/api/fruit/${this.state.fruitID}`).then(res =>{
      this.setState({
        fruitName: res.data.name
      })
    }).catch(err => {
      this.setState({
        fruitName: "Not Found"
      })
    })

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
        <h1>Hello, my name is {this.state.name}</h1>
        <AgeComponent 
        age={this.state.age}
        incrementAge={this.incrementAge.bind(this)}
        decrementAge={this.decrementAge.bind(this)}
        />
        <br>
        </br>
        {
        //Ver01
        //this.state.students.map(student => {
        
        //  return <p>{student}
        //  <button onClick={this.studentDel(student)}>DELETE</button>
        //  </p>
        // })
        this.state.students.map((student,index) => {
          if(index === this.state.editStudentIndex){
          return <li key={index}>
          <input
          
           value={this.state.editStudent}
           onChange={event => this.setState({ editStudent: event.target.value})}>
           
           </input>  
           <button onClick={() => this.setState({
             editStudentIndex:-1,
             students:this.state.students.map((s,i) =>{
             if(i === index){
               return this.state.editStudent;
             }
             else{
               return s;
             }
             })
           })}>
             Save
           </button>
           </li>
          }
          else{
          return <li key={index}>
            <label style={{marginRight:20}}>
              {student}
            </label>
            <button onClick={() => this.setState({students:
            this.state.students.filter((s, i) => i !== index)})}>DELETE</button>
            
            <button onClick={() => this.setState({editStudentIndex:index,editStudent:student})}>EDIT</button>
          </li>
          }

        })
        }


        <br>
        </br>
        <input 
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value})}
        />

        <button onClick={this.studentAdd.bind(this)}>Add</button>
        <br />
        <button onClick={this.onLogout}>
          Logout
        </button>
        <br>
        </br>
        <input
            value={this.state.fruitID}
            onChange={event => this.setState({fruitID: event.target.value })}
          />
        <button onClick={this.handleSearch}>
          Search
        </button>
        <br>
        </br>
        <label>{this.state.fruitName}</label>
      </div>
    );
  }
}

export default Home;