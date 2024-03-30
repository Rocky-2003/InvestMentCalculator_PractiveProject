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

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preState) => {
      return {
        ...preState,
        [inputIdentifier]: +newValue,
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
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
