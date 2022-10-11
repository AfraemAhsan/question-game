import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-row p-[50px] justify-evenly">
        <img
          className="h-250px] w-[150px] object-cover mr-[30px] "
          src="https://img.freepik.com/premium-vector/quiz-time-red-yellow-text-effect-template-with-3d-type-style_7280-3951.jpg?"
          alt=""
        />
        <div className="w-[1000px]">
          <p className="text-2xl font-semibold">
            Questions is a game that is played by participants maintaining a
            dialogue of asking questions back and forth for as long as possible,
            without making any declarative statements. Play begins when the
            first player serves by asking a question.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
