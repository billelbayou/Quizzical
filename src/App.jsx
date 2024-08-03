import React from "react";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

export default function App() {
  const [data, setData] = useState([]);

  const dataURL = "https://the-trivia-api.com/v2/questions/";

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`${dataURL}`);
      const result = await response.json();
      setData(result);
    };
    fetchQuestions();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/main",
      element: <Main dataJson={data} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
