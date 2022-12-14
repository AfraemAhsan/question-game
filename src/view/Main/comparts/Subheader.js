import React, { useContext } from "react";
// internal imports
import Divided from "Elements/Divided";
import QuizContext from "contextuse/Quizgame";

const Subheader = () => {
  const { right, setRight, wrong, setWrong } = useContext(QuizContext);

  return (
    <Divided className="flex items-center justify-between p-10 m-5">
      <Divided className="flex items-center">
        <img
          className="  md:h-250px] w-full md:w-[300px] object-cover mr-[30px] "
          src="https://img.freepik.com/premium-vector/quiz-time-red-yellow-text-effect-template-with-3d-type-style_7280-3951.jpg?"
          alt=""
        />
        <Divided className="flex flex-col">
          <div className="w-[600px]">
            <p className="text-2xl font-semibold">
              Questions is a game that is played by participants maintaining a
              dialogue of asking questions back and forth for as long as
              possible, without making any declarative statements. Play begins
              when the first player serves by asking a question.{" "}
            </p>
          </div>
        </Divided>
      </Divided>
      <Divided className="flex flex-col">
        <Divided className="flex items-center gap-2">
          <span className="font-bold text-red">Total Right answer: </span>
          <span className="text-xl font-extrabold text-primary">{right}</span>
        </Divided>
        <Divided className="flex items-center gap-2">
          <span className="font-bold text-red">Total Wrong answer: </span>
          <span className="text-xl font-extrabold text-primary">{wrong}</span>
        </Divided>
        <Divided>
          <button
            className="bg-primary p-2 font-semibold text-white rounded-[10px]"
            onClick={() => {
              setRight(0);
              setWrong(0);
            }}
          >
            Reset score
          </button>
        </Divided>
      </Divided>
    </Divided>
  );
};

export default Subheader;
