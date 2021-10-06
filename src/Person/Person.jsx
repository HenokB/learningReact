import React, { Component } from "react";

class Person extends Component {
  render() {
    const {click, name, age, children, changed} = this.props;
    
    return (
      <div className="App-header">
        <h1 onClick={click}>
          I am {name} and I am {age} years old
        </h1>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={changed}
          value={name}
        />
      </div>
    );
  }
}

export default Person;
