import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics:</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>
        Avarage:{" "}
        {(props.good * 1 + props.neutral * 0 + props.bad * -1) /
          (props.good + props.neutral + props.bad)}
      </p>
      <p>
        Positive:{" "}
        {(props.good / (props.bad + props.neutral + props.good)) * 100}%
      </p>
    </div>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

ReactDOM.render(<App />, document.getElementById("root"));
