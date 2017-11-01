import React from "react";

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={props.answerType===props.answer}
      id={props.answerType}
      value={props.answerType}
      disable={props.answer}
      onChange={props.onAnswerSelected}
      />
      <label htmlFor={props.answerType} class="radioCustomLabel">
        {props.answerContent}
      </label>
    </li>
  );
}

export default AnswerOption;
