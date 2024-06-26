import { useLoaderData } from "react-router-dom";

function ProgramDetails() {
  const program = useLoaderData();

  return (
    <>
      <h1>{program.title}</h1>
      <p>Voici le detail : {program.synopsis}</p>
      <p>Année de prod : {program.year}</p>
      <p>Pays : {program.country}</p>
    </>
  );
}

export default ProgramDetails;
