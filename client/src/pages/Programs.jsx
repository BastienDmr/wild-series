import { useLoaderData } from "react-router-dom";
import ProgramList from "../components/ProgramList";

function Programs() {
  const programs = useLoaderData();

  return (
    <>
      <h1>Programmes</h1>
      <ProgramList programs={programs} />
    </>
  );
}

export default Programs;
