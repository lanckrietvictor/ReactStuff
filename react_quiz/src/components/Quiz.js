import React from "react";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Quiz(props) {
  function renderAnswerOptions(key) {
   return (
     <AnswerOption
       key={key.content}
       answerContent={key.content}
       answerType={key.type}
       answer={props.answer}
       questionId={props.questionId}
       onAnswerSelected={props.onAnswerSelected}
     />
   );
  }
  return (
    <div className="quiz">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question}/>
      <ul class="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

export default Quiz;
