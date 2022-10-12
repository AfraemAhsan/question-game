import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// internal imports
import Main from "view/Main";
import { routes } from "utils/route";
import { Quizgame } from "contextuse/Quizgame";

const route = createBrowserRouter(routes);

const App = () => {
  return (
    <Quizgame>
      <RouterProvider router={route}>
        <Main />
      </RouterProvider>
    </Quizgame>
  );
};

export default App;
