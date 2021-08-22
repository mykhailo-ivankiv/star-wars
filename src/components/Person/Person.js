import Planet from "../Planet/Planet.js";
import Film from "../Film/Film.js";
import Specie from "../Specie/Specie.js";

const Person = ({ name, birthYear, homeWorld, species, films }) => (
  <div>
    {name},&nbsp;
    {birthYear},&nbsp;
    <Planet id={homeWorld} />,&nbsp;
    {species.length !== 0 && <><Specie id={species[0]}/>, &nbsp;</>}
    <Film id={films[0]} />
  </div>
);

export default Person;
