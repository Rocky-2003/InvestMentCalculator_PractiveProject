import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  let [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0,
  });

  function handleChange(identifier, value) {
    console.log(identifier, value);
    setUserInput((preState) => {
      return {
        ...preState,
        [identifier]: +value,
      };
    });
  }

  let inputIsValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInfo={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero!</p>
      )}
      {inputIsValid && <Results />}
    </>
  );
}

export default App;
