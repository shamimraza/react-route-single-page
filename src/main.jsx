import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/shair/About.jsx";
import Contract from "./components/shair/Contract.jsx";
import User from "./users/User.jsx";
import ShowDetails from "./showdetails/ShowDetails.jsx";
import Posts from "./post/Posts.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User></User>,
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
