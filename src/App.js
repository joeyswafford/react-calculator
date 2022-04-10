import React, { useState } from "react";
import usePrevious from "./usePrevious";
import Button from "./components/Button";
import "./styles.css";

// BASIC FUNCTIONALITY FOR CALCULATOR
// 1: *Clear all inputs.
// 2: *Clear most recent input.
// 3: *Add a digit to the output menu.
// 4: *Use an operation(+, -, *, /).
// 5: *Evaluate inputs.

// TODO: NEED TO FORMAT AT OUTPUTS WITH commas and periods.

const App = () => {
  const [result, setResult] = useState("");

  const prevInput = usePrevious(result); // Variable to access the previous state using custom react hook.

  // FUNCTIONS

  const allClear = () => {
    setResult("");
  };

  const clear = () => {
    setResult(result.slice(0, -1)); // Using slice will allow user to delete the last input.
  };

  const addDigit = (input) => {
    setResult(result.concat(input)); // Allows state to be whatever input the user chooses added on to the current state.

    // Figure out how to only allow one "." digit to be entered at a time. If/switch statement?
  };

  const evaluate = () => {
    // Figure out how to only allow one operation to be entered at a time. Same goes for the "." digit.
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const square = () => {
    setResult(Math.pow(result, 2));
  };

  const cube = () => {
    setResult(Math.pow(result, 3));
  };

  const calcPercantage = () => {
    setResult(result / 100);
  };

  const squareRoot = () => {
    setResult(Math.sqrt(result));
  };

  return (
    <div className="calculator-shell">
      {/* Using css grid to layout calculator */}
      <div className="calculator-grid">
        {/* Output will contain two sections with the top section containing what the user previously entered and the focus will be on the bottom section which is what the user is currently entering. */}
        <div className="output">
          <div className="previous-input">
            <input type="text" value={prevInput} />
          </div>
          <div className="current-input">
            <input type="text" value={result} />
          </div>
        </div>
        <Button text="AC" onClick={allClear} hasTwoColumns />
        <Button text="C" onClick={clear} hasHighlight />
        <Button text="/" onClick={addDigit} hasHighlight />
        <Button text="7" onClick={addDigit} />
        <Button text="8" onClick={addDigit} />
        <Button text="9" onClick={addDigit} />
        <Button text="*" onClick={addDigit} hasHighlight />
        <Button text="4" onClick={addDigit} />
        <Button text="5" onClick={addDigit} />
        <Button text="6" onClick={addDigit} />
        <Button text="+" onClick={addDigit} hasHighlight />
        <Button text="1" onClick={addDigit} />
        <Button text="2" onClick={addDigit} />
        <Button text="3" onClick={addDigit} />
        <Button text="-" onClick={addDigit} hasHighlight />
        <Button text="." onClick={addDigit} />
        <Button text="0" onClick={addDigit} />
        <Button text="=" onClick={evaluate} hasTwoColumns />
        <Button text="x²" onClick={square} hasHighlight isSecondary />
        <Button text="x³" onClick={cube} hasHighlight isSecondary />
        <Button text="√" onClick={squareRoot} hasHighlight isSecondary />
        <Button text="%" onClick={calcPercantage} hasHighlight isSecondary />
      </div>
    </div>
  );
};

export default App;
