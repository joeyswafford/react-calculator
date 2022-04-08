export default function DigitButton(addDigit, props) {
  return (
    <button className="no-highlight" name="7" onClick={addDigit}>
      {props.digit}
    </button>
  );
}
