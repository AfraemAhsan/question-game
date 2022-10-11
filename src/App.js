import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Another from "./components/AnotherRoot/Another";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quizes from "./components/Home/Quiz/Quizes";
import Statistics from "./components/Statistics/Statistics";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:Id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quizes></Quizes>,
        },
      ],
    },
    {
      path: "*",
      element: <Another></Another>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
