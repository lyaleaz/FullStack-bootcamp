import React, { useState } from "react";

export default function Quote(props) {
  const Task = ({ task, markComplete }) => {
    const complete = () => markComplete(task.text);
    return (
      <div>
        {task.text} -<button onClick={complete}>Complete</button>
      </div>
    );
  };

  const SpotCheck = () => {
    const [tasks, setTasks] = useState([
      { text: "Take out trash", complete: false },
      { text: "Trash talk Carrie", complete: true },
      { text: "Carry boxes upstairs", complete: false },
    ]);

    const markComplete = (text) => {
      let newTasks = [...tasks];
      newTasks.find((t) => t.text === text).complete = true;
      setTasks(newTasks);
    };

    return tasks
      .filter((t) => !t.complete)
      .map((t) => <Task key={t.text} task={t} markComplete={markComplete} />);
  };

  return <SpotCheck />;
}
