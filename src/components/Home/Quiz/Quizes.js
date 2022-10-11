import React from "react";
import { useLoaderData } from "react-router-dom";
import Qoptions from "./QuizeDetails/Qoptions";
import QQuestiondetails from "./QuizeDetails/QQuestiondetails";

const Quizes = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <div>
        {data.questions.map((item) => (
          <QQuestiondetails key={item.id} item={item}></QQuestiondetails>
        ))}
      </div>
      <div>
        {data.questions.options.map((optionitem) => (
          <Qoptions key={optionitem.id} optionitem={optionitem}></Qoptions>
        ))}
      </div>
    </div>
  );
};

export default Quizes;
