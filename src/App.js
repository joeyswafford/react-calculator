import React, { useState } from "react";
import DigitButton from "./components/DigitButton";
import usePrevious from "./custom-hooks/usePrevious";
import "./styles.css";

// BASIC FUNCTIONALITY FOR CALCULATOR
// 1: *Clear all inputs.
// 2: *Clear most recent input.
// 3: *Add a digit to the output menu.
// 4: *Use an operation(+, -, *, /).
// 5: *Evaluate inputs.

// NEED TO FORMAT OUTPUTS WITH commas and periods.

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
    setResult(result.concat(input.target.name)); // Allows state to be whatever input the user chooses added on to the current state.

    // Figure out how to only allow one "." digit to be entered at a time. If/switch statement?
  };

  const useOperation = (input) => {
    setResult(result.concat(input.target.name));

    // Figure out how to only allow for one operation to be used at a time. If/switch statement?
  };

  const evaluate = () => {
    // Figure out how to only allow one operation to be entered at a time. Same goes for the "." digit.
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const addSquared = () => {
    // debugger;
    setResult(Math.pow(result, 2));
  };

  const addCubed = () => {
    setResult(Math.pow(result, 3));
  };

  const addPercentage = () => {
    // debugger;
    setResult(result / 100);
  };

  const addLogarithm = () => {
    setResult(Math.log2(result));
  };

  return (
    <div className="calculator-shell">
      {/* Using css grid to layout calculator */}
      <div className="calculator-grid">
        {/* Output will contain two sections with the top section containing what the user previously entered and the focus will be on the bottom section which is what the user is currently entering. */}
        <div className="output">
          <form className="previous-input">
            <input type="text" value={prevInput} />
          </form>
          <form className="current-input">
            <input type="text" value={result} />
          </form>
        </div>
        <button className="spans-two" onClick={allClear}>
          AC
        </button>
        <button className="highlight" onClick={clear}>
          C
        </button>
        <button className="highlight" name="/" onClick={useOperation}>
          ÷
        </button>
        {/* <DigitButton digit="7" /> */}
        <button className="no-highlight" name="7" onClick={addDigit}>
          7
        </button>
        <button className="no-highlight" name="8" onClick={addDigit}>
          8
        </button>
        <button className="no-highlight" name="9" onClick={addDigit}>
          9
        </button>
        <button className="highlight" name="*" onClick={useOperation}>
          *
        </button>
        <button className="no-highlight" name="4" onClick={addDigit}>
          4
        </button>
        <button className="no-highlight" name="5" onClick={addDigit}>
          5
        </button>
        <button className="no-highlight" name="6" onClick={addDigit}>
          6
        </button>
        <button className="highlight" name="+" onClick={useOperation}>
          +
        </button>
        <button className="no-highlight" name="1" onClick={addDigit}>
          1
        </button>
        <button className="no-highlight" name="2" onClick={addDigit}>
          2
        </button>
        <button className="no-highlight" name="3" onClick={addDigit}>
          3
        </button>
        <button className="highlight" name="-" onClick={useOperation}>
          -
        </button>
        <button className="no-highlight" name="." onClick={addDigit}>
          .
        </button>
        <button className="no-highlight" name="0" onClick={addDigit}>
          0
        </button>
        <button className="spans-two" onClick={evaluate}>
          =
        </button>
        <button className="secondary-buttons" name="x²" onClick={addSquared}>
          x²
        </button>
        <button className="secondary-buttons" name="x³" onClick={addCubed}>
          x³
        </button>
        <button
          className="secondary-buttons"
          name="log₂"
          onClick={addLogarithm}
        >
          log₂
        </button>
        <button className="secondary-buttons" name="%" onClick={addPercentage}>
          %
        </button>
      </div>
    </div>
  );
};

export default App;
