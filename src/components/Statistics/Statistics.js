import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const quizRating = useLoaderData();
  return (
    <div>
      <div>{quizRating.data.map()}</div>{" "}
    </div>
  );
};

export default Statistics;
