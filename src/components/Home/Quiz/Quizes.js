import React from "react";
import { useLoaderData } from "react-router-dom";

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
        {/* {data.options.map((optionitem, id) => (
          <Qoptions key={id} optionitem={optionitem}></Qoptions>
        ))} */}
      </div>
    </div>
  );
};

export default Quizes;
