import React from "react";

const QQuestiondetails = ({ item }) => {
  const { options, question, correctAnswer } = item;
  return (
    <div>
      <div>
        <p>{correctAnswer}</p>
        <p>{question}</p>
        <p>{options}</p>
      </div>
    </div>
  );
};

export default QQuestiondetails;
