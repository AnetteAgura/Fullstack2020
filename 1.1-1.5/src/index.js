import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} />
      <Total exercises={exercises1} />
    </div>
  );
};
const Header = () => {};
const Content = () => {};
const Total = () => {};
ReactDOM.render(<App />, document.getElementById("root"));
