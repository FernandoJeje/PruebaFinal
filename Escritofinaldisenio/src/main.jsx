import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CrearUsuario from "./components/CrearUsuario";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  { path: "/crear", element: <CrearUsuario /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
