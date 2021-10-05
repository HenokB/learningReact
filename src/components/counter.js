import React, { Component } from "react";
export default class Counter extends React.Component {
   

    state = {
        count: 0 
    }
   

    buttonClick = () =>{
        this.setState({
            count: this.state.count +1
        });
    }
    buttonClick2 =()=>{
        this.setState({
            count: this.state.count -1
        })
    }
    render() {
        
        return(

        <div className="App-header">
        <button onClick={this.buttonClick}>increment</button><br></br>
        <div>Count: {this.state.count}</div><br></br>
        <button onClick={this.buttonClick2}>decrement</button>
        </div>
        );
    }
}
