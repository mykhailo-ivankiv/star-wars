import { useContext } from "react";
import { ApiContext } from "../App/App.js";
import { useAsync } from "react-use";
import Person from "../Person/Person.js";

const People = () => {
  const api = useContext(ApiContext);

  const { loading, value: people, error } = useAsync(() => api.people(), [api]);

  if (loading) return "loading";
  if (loading) return "Error";

  return people.map(({ name, birthYear, homeWorld, species, films }) => (
    <Person
      name={name}
      birthYear={birthYear}
      homeWorld={homeWorld}
      species={species}
      films={films}
    />
  ));
};

export default People;
