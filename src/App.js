import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [result, setResult] = useState("");

  const allClear = () => {
    setResult("");
  };

  const clear = () => {
    setResult(result.slice(0, -1)); // Using slice will allow user to delete the last input.
  };

  const addDigit = (input) => {
    setResult(result.concat(input.target.name)); // Allows state to be whatever input the user chooses added on to the current state.
  };

  const addOperation = (input) => {
    setResult(result.concat(input.target.name)); // NEED TO FIGURE OUT OPERATIONS(/, *, +, -)

    // How can I access the previous state when adding an operation? I want to display the previous state in the top input field AFTER the user clicks on an operation. The bottom input field would then be reserved for the next input the user chooses.
  };

  const evaluate = () => {
    // This works okay, but it seems kinda sloppy. How can I make this better? Maybe instead of allowing the user to input more than one operation, the calculator should ONLY LET the user input one operation from the start. So if I entered the + operation and tried to enter the * directly after that the calculator wouldnt allow it. Good idea.
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-shell">
      {/* Using css grid to layout calculator */}
      <div className="calculator-grid">
        {/* Output will contain two sections with the top section containing what the user previously entered and the focus will be on what the user is currently entering. */}
        <div className="output">
          <form className="previous-input">
            <input type="text" />
          </form>
          <form className="current-input">
            <input type="text" value={result} />
          </form>
        </div>
        <button className="spans-two" onClick={allClear}>
          AC
        </button>
        <button onClick={clear}>C</button>
        <button name="/" onClick={addDigit}>
          ÷
        </button>
        <button name="1" onClick={addDigit}>
          1
        </button>
        <button name="2" onClick={addDigit}>
          2
        </button>
        <button name="3" onClick={addDigit}>
          3
        </button>
        <button name="*" onClick={addDigit}>
          *
        </button>
        <button name="4" onClick={addDigit}>
          4
        </button>
        <button name="5" onClick={addDigit}>
          5
        </button>
        <button name="6" onClick={addDigit}>
          6
        </button>
        <button name="+" onClick={addDigit}>
          +
        </button>
        <button name="7" onClick={addDigit}>
          7
        </button>
        <button name="8" onClick={addDigit}>
          8
        </button>
        <button name="9" onClick={addDigit}>
          9
        </button>
        <button name="-" onClick={addDigit}>
          -
        </button>
        <button name="." onClick={addDigit}>
          .
        </button>
        <button name="0" onClick={addDigit}>
          0
        </button>
        <button className="spans-two" onClick={evaluate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
