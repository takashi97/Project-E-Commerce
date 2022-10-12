import logo from './logo.svg';
import './App.css';
import React from 'react';

class AgeComponent extends React.Component {

  
  componentDidUpdate() {
    console.log("This component is updated.")
  }
  render() {
    return (
      <div className="AgeComponent">
        <h3>I am {this.props.age} years old</h3>

        <button onClick={() => this.props.incrementAge()}>Increase Age</button>
        <button onClick={() => this.props.decrementAge()}>Decrease Age</button>
      </div>
    );
  }
}

export default AgeComponent;