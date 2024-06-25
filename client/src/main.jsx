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
import CategoryDetails from "./pages/CategoryDetails";

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

      const response = await myAxios.post("/api/category", { name });

      return redirect(`/categories/${response.data.insertId}`);
    },
  },
  {
    path: "/categories/:id",
    element: <CategoryDetails />,
    loader: async ({ params }) => {
      const response = await myAxios.get(`/api/category/${params.id}`);

      return response.data;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
