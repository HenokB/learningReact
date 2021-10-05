import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Counter from "./components/counter";
class App extends Component {
  state = {
    persons: [
      {
        name: "Abisam",
        age: 20,
      },
      {
        name: "Max",
        age: 31,
      },
      {
        name: "Manu",
        age: 30,
      },
    ],
  };

  switchNameHandler = () => {
    // alert("clicked");
    //DONT this.state.persons[0].name = "Hello";
    this.setState({
      persons: [
        {
          name: "Abu",
          age: 20,
        },
        {
          name: "Max",
          age: 31,
        },
        {
          name: "Manu",
          age: 20,
        },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Abu",
          age: 20,
        },
        {
          name: event.target.value,
          age: 31,
        },
        {
          name: "Manu",
          age: 20,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>SwitchName</button>
        <h1>APPLE BALL REACT</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      <Counter/>
      </div>
    );
  }
}

export default App;
