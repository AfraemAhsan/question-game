import React from "react";

const QQuestiondetails = ({ item }) => {
  const { question } = item;
  return (
    <div>
      <div className="flex flex-col justify-center space-y-5 text-center">
        <h3 className="text-xl mx-auto font-semibold text-emerald-600 w-[450px]">
          Quiz : {question}
        </h3>
      </div>
    </div>
  );
};

export default QQuestiondetails;
