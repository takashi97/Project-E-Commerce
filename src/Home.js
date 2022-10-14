import './App.css';
import React from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';  


class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      uName: "",
      product:"",
      products:[],
      item:"",
      productsList:[],

    };
  }
  componentDidUpdate() {
    console.log("Name is Updated.")
  }
  
  onLogout = () => {
    this.props.changePage("login")
  }
  onCart = () => {
    this.setState({ page: "cart" })
  }
  componentDidMount() {
    axios.get("https://online.akomate.com/atma/api/products").then(res => {
      this.setState({
        products: res.data

      })
    }) 
  }
  addToCart(){
    
  }
  
  
  render() {
    return (
      <div className="App">
        <Navbar expand="lg" variant="light" bg="dark">
        <span class="row d-flex justify-content-center" style={{color: 'white'}}>{' '}
              Welcome, {this.props.currentUser.username} to E-Commerce 
              <button onClick={this.onLogout}>Logout </button>
        </span>
        </Navbar>
        
        
        <input
            value={this.state.item}
            onChange={event => this.setState({item: event.target.value })}
          />
        <br>
        </br>
        <h3>Items List</h3>
        <ul>
          
        
        {
        this.state.products.filter((searchProduct => 
          searchProduct.name.toLowerCase().includes(this.state.item.toLowerCase()))).map((product) => {
            return <ul>
              <img src={product.image} alt="for sell"></img>
              <h2>{product.name}</h2>
              <p>{product.detail}</p>
              <p>Harga: Rp.{product.price}</p>
              <button style={{ marginBottom: 20}} onClick={this.addToCart}>Add To Cart </button>
        </ul>
        })
      }
      {/* {
        <Cart changePage={this.changePage} users={this.state.users} setCurrentUser={this.setCurrentUser}/>
      } */}
        </ul>
        {
        //Ver01
        //this.state.students.map(student => {
        
        //  return <p>{student}
        //  <button onClick={this.studentDel(student)}>DELETE</button>
        //  </p>
        // })
        }

      </div>
    );
  }
}

export default Home;