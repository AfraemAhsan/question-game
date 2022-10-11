import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz/Quiz";

const Home = () => {
  const quizes = useLoaderData();
  console.log(quizes);
  return (
    <div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1  p-[50px] justify-center mb-[20px]">
        <img
          className="  md:h-250px] w-full md:w-[300px] object-cover mr-[30px] "
          src="https://img.freepik.com/premium-vector/quiz-time-red-yellow-text-effect-template-with-3d-type-style_7280-3951.jpg?"
          alt=""
        />
        <div className="w-[800px]">
          <p className="text-2xl font-semibold">
            Questions is a game that is played by participants maintaining a
            dialogue of asking questions back and forth for as long as possible,
            without making any declarative statements. Play begins when the
            first player serves by asking a question.{" "}
          </p>
        </div>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ml-[10px] ">
        {quizes.data.map((quize) => (
          <Quiz key={quize.id} quize={quize}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
