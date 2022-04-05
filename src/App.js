import React from "react";
import "./styles.css";

function App() {
  return (
    // Using css grid to layout calculator
    <div className="calculator-grid">
      {/* Output will contain two sections with the top section containing what the user previously entered and the focus will be on what the user is currently entering. */}
      <div className="output">
        <div className="previous-input">5,000 +</div>
        <div className="current-input">5,000</div>
      </div>
      <button className="spans-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="spans-two">=</button>
    </div>
  );
}

export default App;
