import axios from "axios";
import { identity, memoizeWith, toLower } from "ramda";

const peopleAdapter = (peopleResponse) =>
  peopleResponse.data.results.map(
    ({ name, birth_year, homeworld, species, films }) => ({
      name,
      birthYear: birth_year,
      species,
      films,
      homeWorld: homeworld,
    })
  );

const planetAdapter = (planetResponse) => {
  const { name } = planetResponse.data;

  return { name };
};

const filmAdapter = (planetResponse) => {
  const { title } = planetResponse.data;

  return { title };
};

const specieAdapter = (specieResponse) => {
  const { name } = specieResponse.data;

  return { name };
};

export const starWarsAPI = async (rootEndpoint = "https://swapi.dev/api/") => {
  const { data: api } = await axios.get(rootEndpoint);
  const { people } = api;

  return {
    people: memoizeWith(
      (search) => toLower(search),
      async (search) =>
        peopleAdapter(await axios.get(`${people}?search=${search}`))
    ),
    planet: memoizeWith(identity, async (planetId) =>
      planetAdapter(await axios.get(planetId))
    ),
    film: memoizeWith(identity, async (filmId) =>
      filmAdapter(await axios.get(filmId))
    ),
    specie: memoizeWith(identity, async (specieId) =>
      specieAdapter(await axios.get(specieId))
    ),
  };
};
