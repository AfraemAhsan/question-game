import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      {data?.map((singledata) => (
        <div key={singledata.id}>{singledata.name}</div>
      ))}
    </div>
  );
};

export default Statistics;
