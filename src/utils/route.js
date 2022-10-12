import axios from "axios";
// internal imports
import Layout from "Components/Layouts";
import Error from "Components/Error";
import Main from "view/Main";
import Blog from "view/Blog";
import Question from "view/Question";
import Statisticsss from "view/Statistices";

const api = "https://openapi.programming-hero.com/api";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: async () => await axios.get(`${api}/quiz`),
        element: <Main />,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) =>
          await axios.get(`${api}/quiz/${params.id}`),
        element: <Question />,
      },
      {
        path: "/statisticsss",
        loader: async () => await axios.get(`${api}/quiz`),
        element: <Statisticsss />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
];
