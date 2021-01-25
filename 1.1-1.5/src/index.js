import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part={Part} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name="Fundamentals of React" />
      <Part name="Using props to pass data" />
      <Part name="State of a component" />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Amount of exercises:{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}{" "}
      </p>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
