import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Another from "./components/AnotherRoot/Another";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
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
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/",
          element: <Blog></Blog>,
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
