/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function Select({ handleForm, title, name, value }) {
  const [selection, setSelection] = useState([]);
  useEffect(() => {
    const getSelection = async () => {
      try {
        const mySelection = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/${title}`
        );
        setSelection(mySelection.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSelection();
  }, [title]);

  return (
    <label>
      {title}
      <select name={name} onChange={handleForm} value={value}>
        <option value="">Select a {title}</option>
        {selection.map((select) => (
          <option key={select.id} value={select.id}>
            {select.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
