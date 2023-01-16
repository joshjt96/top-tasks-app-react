import React from "react";
import data from "./data.js";
import "./styles.css";
import Overview from "./components/Overview.js";
import { nanoid } from "nanoid";

export default function App() {
  const [tasks, setTasks] = React.useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  function createNewTask() {
    const newTask = {
      id: nanoid(),
      content: ""
    };
    setTasks((prevTasks) => []);
  }

  return (
    <div>
      <input type="text" id="text-field" name="text-field"></input>
      <button onClick={createNewTask}>Submit</button>
    </div>
  );
}

//

// return:
// an input field and a submit button
// The submit button on click stores the text from input field in the state array
