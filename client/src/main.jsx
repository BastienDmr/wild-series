import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import myAxios from "./services/myAxios";

import App from "./App";
import Categories from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories",
    element: <Categories />,
    loader: async () => {
      const response = await myAxios.get("/api/category");

      return response.data;
    },
    action: async ({ request }) => {
      const formData = await request.formData();

      const name = formData.get("name");

      const response = await myAxios.post("/api/categories", { name });

      return redirect(`/categories/${response.data.insertId}`);
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
