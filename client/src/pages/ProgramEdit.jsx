import { Form, useLoaderData } from "react-router-dom";

function ProgramEdit() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form method="put">
        <label htmlFor="title">Titre</label>{" "}
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={loaderData.title}
        />
        <label htmlFor="synopsis">Synopsis</label>{" "}
        <input
          type="text"
          id="synopsis"
          name="synopsis"
          defaultValue={loaderData.synopsis}
        />
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default ProgramEdit;
