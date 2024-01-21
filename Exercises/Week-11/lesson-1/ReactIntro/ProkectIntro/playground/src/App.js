import "./App.css";
/*import { Component } from "react";

class App extends Component {
  getData(n) {
    return (
      <div>
        {n} <p>A summary about this wonder full person </p>
      </div>
    );
  }

  render() {
    let name = "lyale ";
    return (
      <div>
        <div>Hello</div>
        <p>{this.getData(name)}</p>
      </div>
    );
  }
}

export default App;
 */
/* import "./App.css";

function App() {
  let text = "dynamically";
  return (
    <div className="App">
      <h1>Going to display some text...{text}</h1>
    </div>
  );
}
*/

//Spot Check 1
/* function App() {
  const getStuff = () => "Wild function'ed text";

  return (
    <div>
      <div className="ex-space">
        <h4 className="ex-title">Spot-check 1</h4>
        <div className="exercise" id="spotcheck-1">
          <h1>Stuff: {getStuff()}</h1>
        </div>
      </div>
    </div>
  );
} */

// JSX II
/* function App() {
  const personContainer = (name, email) => {
    let greatName = `The Great ${name}`;

    return (
      <div className="person">
        <h4>{greatName}</h4>
        <p>
          Contact at: <a href={email}>email</a>
        </p>
      </div>
    );
  };

  return personContainer("Louisa", "l@elo.com");
} */
//Spot Check 2
/* function App() {
  const getMorningGreeting = () => <div>Good Morning</div>;
  const getEveningGreeting = () => <div>Good Evening</div>;

  let isMorninig = new Date().getHours() < 12;

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot-check 2</h4>
      <div className="exercise" id="spotcheck-2">
        {isMorninig ? getMorningGreeting() : getEveningGreeting()}
      </div>
    </div>
  );
} */
//Spot Check 3
function App() {
  const getMorningGreeting = () => <div>Good Morning</div>;
  const getEveningGreeting = () => <div>Good Evening</div>;

  return [getMorningGreeting(), getEveningGreeting(), <p>some text</p>];
}
export default App;
