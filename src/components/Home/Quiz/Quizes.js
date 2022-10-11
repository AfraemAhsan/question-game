import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizes = () => {
  const quizes = useLoaderData();
  console.log(quizes);
  return <div>{quizes.length}</div>;
};

export default Quizes;
