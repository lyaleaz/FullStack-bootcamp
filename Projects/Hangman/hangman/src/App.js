import React from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

const App = () => {
  const wordHint = "Hangman";

  return (
    <div>
      <Score />
      <Solution wordHint={wordHint} />
      <Letters />
    </div>
  );
};

export default App;
