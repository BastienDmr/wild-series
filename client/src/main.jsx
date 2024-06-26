/* eslint-disable camelcase */
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
import ProgramDetails from "./pages/ProgramDetails";
import ProgramEdit from "./pages/ProgramEdit";

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
    action: async ({ request }) => {
      const formData = await request.formData();

      const title = formData.get("title");
      const synopsis = formData.get("synopsis");
      const poster = formData.get("poster");
      const country = formData.get("country");
      const year = formData.get("year");
      const category_id = formData.get("category_id");

      const response = await myAxios.post("/api/programs", {
        title,
        synopsis,
        poster,
        country,
        year,
        category_id,
      });

      return redirect(`/programmes/${response.data.insertId}`);
    },
  },
  {
    path: "/programmes/:id",
    element: <ProgramDetails />,
    loader: async ({ params }) => {
      const response = await myAxios.get(`/api/programs/${params.id}`);

      return response.data;
    },
  },
  {
    path: "/programmes/:id/edit",
    element: <ProgramEdit />,
    loader: async ({ params }) => {
      const response = await myAxios.get(`/api/programs/${params.id}`);

      return response.data;
    },
    action: async ({ request, params }) => {
      const formData = await request.formData();

      switch (request.method.toLowerCase()) {
        case "put": {
          await myAxios.put(`/api/programs/${params.id}`, {
            title: formData.get("title"),
            synopsis: formData.get("synopsis"),
          });

          return redirect(`/programmes/${params.id}`);
        }
        case "delete": {
          await myAxios.delete(`/api/programs/${params.id}`);

          return redirect("/programmes");
        }
        default:
          throw new Response("", { status: 405 });
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
