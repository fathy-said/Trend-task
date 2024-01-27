import { createBrowserRouter } from "react-router-dom";

import Layout from "./Pages/Layout";
import ProjectPage from "./Pages/ProjectPage";

export let Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>errorElement</div>,

    children: [
      { index: true, element: <ProjectPage/> },

      {
        path: "/didn't-create",
        element: <>didn't-create</>,
      },
    ],
  },
]);
