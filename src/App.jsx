import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Waveform } from "@uiball/loaders";

const MainPage = lazy(() => import("./pages/MainPage"));
const RootPage = lazy(() => import("./pages/RootPage"));
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className=" flex h-screen w-screen flex-col items-center justify-center gap-4">
            <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
            <p className=" text-3xl text-white text-center">
              Portfolio is loading, wait a second!
            </p>
          </div>
        }
      >
        <RootPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className=" flex h-screen w-screen flex-col items-center justify-center gap-4">
                <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
                <p className=" text-3xl text-white text-center">Just a moment!</p>
              </div>
            }
          >
            <MainPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
