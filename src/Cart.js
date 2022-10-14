import './App.css';
import React from 'react';
import axios from 'axios';
class Cart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      total_price: 0
    };
  }
  componentDidUpdate() {
    console.log("Name is Updated.")
  }
  
  backHome = () => {
    this.props.changePage("home")
  }
  componentDidMount() {
    axios.get("https://online.akomate.com/atma/api/products").then(res => {
      this.setState({
        products: res.data

      })
    }) 
  }

  
  render() {
    return (
      <div className="Cart">
        <button onClick={() => {
          this.backHome()
        }}>
          Back To Home
        </button>
      <h3>Items List</h3>
        <ul>
          {this.state.products.map((product) => {
            return <ul>
              <img src={product.image} alt="for sell"></img>
              <h2>{product.name}</h2>
              <p>{product.detail}</p>
              <p>Harga: Rp.{product.price}</p>
        </ul>
        })

        }
        </ul>
      </div>
    );
  }
}

export default Cart;