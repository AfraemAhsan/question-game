import React from "react";
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const quizRating = useLoaderData();
  console.log(quizRating);
  return (
    <div>
      <div>
        {quizRating.data.map((d) => (
          <LineChart width={730} height={250} data={d}>
            <Line type="monotone" dataKey={d.total[0]} stroke="#8884d8" />
            <XAxis dataKey={d.name[0]} />
            <YAxis />
            <Tooltip />
          </LineChart>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
