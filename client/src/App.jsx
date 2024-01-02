import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import GeneralLoader from "./components/loaders/GeneralLoader";

export default function App() {
  return (
    <RouterProvider
      router={appRoutes}
      fallbackElement={GeneralLoader}
    ></RouterProvider>
  );
}
