import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import Top10 from "./pages/Top10";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
//  import ErrorElement from "./pages/ErrorElement";
 import Footer from "./components/Footer";
 import ErrorElements from "./pages/EroorElements"

const Applayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

const browserRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Top10", element: <Top10 /> },
      { path: "/Watchlist", element: <Watchlist /> },
      { path: "/Trending", element: <Trending /> },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
