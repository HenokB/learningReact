import React, { Component, useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';
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
    const [value, setValue] = useState();
  
    const onChange = useCallback(
      (value) => {
        setValue(value);
      },
      [setValue],
    );
    return (
      <div className="App-header">
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
    <div>
      <h1>Calendar - GeeksforGeeks</h1>
      <Calendar value={value} onChange={onChange} />
    </div>
      </div>
    );
  }
}

export default App;
