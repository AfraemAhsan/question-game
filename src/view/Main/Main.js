import React from "react";
import { useLoaderData } from "react-router-dom";
// internal imports
import Divided from "Elements/Divided";
import Cart from "./comparts/Cart";
import Subheader from "./comparts/Subheader";

const Main = () => {
  const { data } = useLoaderData();
  return (
    <Divided className="flex flex-col">
      <Subheader />
      <Divided className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {data?.data?.map((item, i) => (
          <Cart item={item} key={i} />
        ))}
      </Divided>
    </Divided>
  );
};

export default Main;
