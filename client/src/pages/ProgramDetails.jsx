import { useLoaderData, Link } from "react-router-dom";

function ProgramDetails() {
  const program = useLoaderData();

  return (
    <>
      <h1>{program.title}</h1>
      <p>Voici le detail : {program.synopsis}</p>
      <p>Année de prod : {program.year}</p>
      <p>Pays : {program.country}</p>
      <Link to={`/programmes/${program.id}/edit`}>Modifier</Link>
    </>
  );
}

export default ProgramDetails;
