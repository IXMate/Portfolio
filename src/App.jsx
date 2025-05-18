import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contract from "./pages/Contract";

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contract />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router2} />;
}