import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizRating = useLoaderData();
  console.log(quizRating);
  return (
    <div>
      <div>
        {quizRating.data.map((datas) => (
          <p key={datas.id}>
            {datas.name} {datas.total}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
