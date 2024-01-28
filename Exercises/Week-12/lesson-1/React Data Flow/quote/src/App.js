import "./App.css";

const App = () => {
  //spot check 1
  /*  const Task = ({ task, markComplete }) => {
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


  return <SpotCheck />; */
  //Exercise1

  const Ex1Data = {
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  };
};

export default App;
