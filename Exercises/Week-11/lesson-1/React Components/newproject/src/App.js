import "./App.css";
localStorage["loggedIn"] = true;

function Sum() {
  const num1 = 9;
  const num2 = 3;
  return <div>The sum is {num1 + num2}</div>;
}
/* 
function Nav() {
  return (
    <div id="nav">
      <span>Home</span>
      <span>About</span>
    </div>
  );
}
function LandingPage() {
  return <h1>Welcome</h1>;
}
 */
//Components & JSX
function AboutUs() {
  return <p>This is an example of an about us page~</p>;
}

function Nav() {
  return (
    <div id="nav">
      <span>Home</span>
      <span>About</span>
    </div>
  );
}

function LandingPage() {
  return <h1>Welcome!</h1>;
}
function About() {
  /* your code here... */
}

function SignUp() {
  /* your code here... */
}

function Blurb() {
  /* your code here... */
}
function App() {
  return (
    <div className="app">
      <Nav />
      <AboutUs />
      <LandingPage />
    </div>
  );
}
export default App;
export { Sum, Nav, LandingPage, About, SignUp, Blurb };
