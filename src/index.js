import React from "react";
import ReactDOM from "react-dom";

function Greeting( {message} ) {
  return (
    <h4>{ message }</h4>
  )
}

ReactDOM.render(<Greeting message='This is my first component' />, document.getElementById('root'))