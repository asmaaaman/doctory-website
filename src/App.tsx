import Home from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MasterLayout from "./pages/MasterLayout";
import NotFound from "./pages/NotFound";
import { AppointmentsList } from "./components/AppointmentsList";
import About from "./pages/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "/appointments",
          element: <AppointmentsList />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
