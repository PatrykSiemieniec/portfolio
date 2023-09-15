import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },

    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;

}

export default App;
