import { ApiContext } from "../App/App.js";
import { useAsync } from "react-use";
import { useContext } from "react";
import SearchHighlight from "../SearchHighlight/SearchHighlight.js";
//
import "./Person.css";
import BEM from "../../utils/BEM.js";
const b = BEM("Person");

const Person = ({ name, birthYear, homeWorld, species, films }) => {
  const api = useContext(ApiContext);

  const planetState = useAsync(() => api.planet(homeWorld), [homeWorld]);
  const filmState = useAsync(() => api.film(films[0]), [films[0]]);
  const specie = useAsync(
    async () => (species[0] === undefined ? null : api.specie(species[0])),
    [species[0]]
  );

  return (
    <div className={b()}>
      <SearchHighlight>{name.padEnd(20, ` `)}</SearchHighlight>
      {birthYear.padEnd(10, ` `)}

      {planetState.loading && "loading".padEnd(15)}
      {planetState.error && "error:".padEnd(15)}
      {planetState.value && planetState.value.name.padEnd(15)}

      {filmState.loading && "loading".padEnd(20)}
      {filmState.error && "error".padEnd(20)}
      {filmState.value && filmState.value.title.padEnd(20)}

      {specie.loading && "loading".padEnd(10)}
      {specie.error && "error".padEnd(10)}
      {specie.value && (specie.value?.name ?? "").padEnd(10)}
    </div>
  );
};

export default Person;
