import { useLoaderData } from "react-router-dom";
import ProgramList from "../components/ProgramList";
import ProgramForm from "../components/ProgramForm";

function Programs() {
  const programs = useLoaderData();

  return (
    <>
      <h1>Programmes</h1>
      <ProgramList programs={programs} />
      <ProgramForm />
    </>
  );
}

export default Programs;
