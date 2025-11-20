import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1 className="bg-primary font-primary">Home Page</h1>,
      },
    ],
  },
]);

export default router;
