import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./routes/error";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Login from "./routes/Auth/login";
import Home from "./routes/home/home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/",
        element: <Home/>
      },
      {        
        path: "login/",
        element: <Login />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);