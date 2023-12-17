import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import { MantineProvider } from "@mantine/core";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <UserLogin />,
    },
  ]);
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
