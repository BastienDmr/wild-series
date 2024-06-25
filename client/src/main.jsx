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
import CategoryEdit from "./pages/CategoryEdit";
import Programs from "./pages/Programs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Category
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
  {
    path: "/categories/:id/edit",
    element: <CategoryEdit />,
    loader: async ({ params }) => {
      const response = await myAxios.get(`/api/category/${params.id}`);

      return response.data;
    },
    action: async ({ request, params }) => {
      const formData = await request.formData();

      switch (request.method.toLowerCase()) {
        case "put": {
          await myAxios.put(`/api/category/${params.id}`, {
            name: formData.get("name"),
          });

          return redirect(`/categories/${params.id}`);
        }
        case "delete": {
          await myAxios.delete(`/api/category/${params.id}`);

          return redirect("/categories");
        }
        default:
          throw new Response("", { status: 405 });
      }
    },
  },

  // Programs
  {
    path: "/programmes",
    element: <Programs />,
    loader: async () => {
      const response = await myAxios.get("/api/programs");

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
