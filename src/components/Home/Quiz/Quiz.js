import React from "react";

const Quiz = ({ quize }) => {
  console.log(quize);
  const { name, logo, total } = quize;
  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100 ">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="flex flex-col items-center pb-[20px]">
          <h2 className="py-2 text-xl font-semibold text-indigo-600">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex flex-row space-x-[100px] justify-around">
            <span className="mt-[20px] text-xl  font-bold">
              Total Quize:{total}
            </span>
            <button className="text-white bg-blue-600 p-[12px] mt-[15px] rounded-sm">
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
