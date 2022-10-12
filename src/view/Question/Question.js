import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
// internal imports
import Divided from "Elements/Divided";
import QuizContext from "contextuse/Quizgame";
import Quizpart from "./comparts/Quizpart";

const Question = () => {
  const { data } = useLoaderData();
  const [quizInfo] = useState(data?.data);
  const [questions] = useState(data?.data?.questions);

  // context
  const { right, wrong } = useContext(QuizContext);

  return (
    <Divided className="flex flex-col flex-wrap p-4">
      <Divided className="relative flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-center text-primary">
          Welcome to quiz for{" "}
          <span className="font-extrabold text-[40px]">{quizInfo?.name} </span>
          questions
        </h1>
        <Divided className="absolute left-0 top-12">
          <span className="font-bold text-red">Right answer:</span> {right} /
          {quizInfo?.total}
        </Divided>
        <Divided className="absolute right-0 top-12">
          <span className="font-bold text-red">Wrong answer:</span> {wrong} /
          {quizInfo?.total}
        </Divided>
      </Divided>
      <Divided className="relative flex flex-col items-center p-4 m-16">
        <Divided className="">
          <span className="font-medium text-primary">
            Total quiz: {quizInfo?.total}
          </span>
        </Divided>
        <Divided className="overflow-y-auto max-h-[500px] w-[70%] flex items-center flex-col">
          {questions?.map((item, i) => (
            <Quizpart item={item} key={i} />
          ))}
        </Divided>
      </Divided>
    </Divided>
  );
};

export default Question;
