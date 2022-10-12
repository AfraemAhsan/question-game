import React from "react";
// internal imports
import Divided from "Elements/Divided";

const Blog = () => {
  return (
    <Divided className="flex flex-col p-5 m-2 ">
      <Divided className="flex flex-col p-3 capitalize">
        <h3 className="text-3xl font-bold text-violet-700">
          what is the purpose of react router
        </h3>
        <p className="text-xl font-semibold text-sky-400">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </Divided>
      <Divided className="flex flex-col p-3">
        <h3 className="text-3xl font-bold text-violet-700">
          How does context api works
        </h3>
        <p className="text-xl font-semibold text-sky-400">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </Divided>
      <Divided className="flex flex-col p-3">
        <h3 className="text-3xl font-bold text-violet-700">
          what is useref in react
        </h3>
        <p className="text-xl font-semibold text-sky-400">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </Divided>
    </Divided>
  );
};

export default Blog;
