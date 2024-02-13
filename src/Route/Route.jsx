import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Main from "../Layout/Main";
import ProjectDetails from "../Components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
