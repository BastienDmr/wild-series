import { Form } from "react-router-dom";
import { useState } from "react";

import Select from "./Select";

const initialProgram = {
  title: "",
  synopsis: "",
  poster: "",
  country: "",
  year: "",
  category_id: "",
};

function ProgramForm() {
  const [form, setForm] = useState(initialProgram);

  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form method="post">
      <label htmlFor="title">Nouveau film Nom:</label>{" "}
      <input type="text" id="title" name="title" />
      <label htmlFor="synopsis">Synopsis</label>{" "}
      <input type="text" id="synopsis" name="synopsis" />
      <label htmlFor="poster">Poster (poste le lien de l'image)</label>{" "}
      <input type="text" id="poster" name="poster" />
      <label htmlFor="name">Country</label>{" "}
      <input type="text" id="country" name="country" />
      <label htmlFor="year">Year</label>{" "}
      <input type="number" id="year" name="year" />
      <Select
        handleForm={handleForm}
        name="category_id"
        title="category"
        value={form.name}
      />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default ProgramForm;
