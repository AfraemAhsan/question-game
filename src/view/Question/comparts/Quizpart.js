import React, { useState } from "react";
import Swal from "sweetalert2";
// internal imports
import Divided from "Elements/Divided";
import Option from "./Option";
import { cx, Eye } from "Figureout/Near";

const Quizpart = ({ item }) => {
  const [cardDisable, setCardDisable] = useState("");
  return (
    <Divided className="card w-[400px] bg-base-100 relative">
      <button
        className="absolute z-50 text-xl right-2 top-5"
        onClick={() => {
          Swal.fire({
            title: "Correct answer!",
            text: item?.correctAnswer,
          });
        }}
      >
        <Eye />
      </button>
      <Divided
        className={cx(
          "w-full mt-4 shadow-xl p-5 rounded-[5px] ",
          cardDisable === item?.id &&
            "cursor-not-allowed !bg-[#d14d4d75]  opacity-60"
        )}
      >
        <figure className="p-3 m-5 text-xl font-extrabold text-center">
          {item?.question}
        </figure>
        <Divided className="items-center text-center card-body">
          <Divided className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-left">
              Click below items for right answer:
            </h3>
            {item?.options?.map((option, i) => (
              <Option
                key={i}
                option={option}
                cursor={cardDisable}
                info={item}
                setCardDisable={setCardDisable}
              />
            ))}
          </Divided>
        </Divided>
      </Divided>
    </Divided>
  );
};

export default Quizpart;
