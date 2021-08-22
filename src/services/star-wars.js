import axios from "axios";

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
    people: async () => peopleAdapter(await axios.get(people)),
    planet: async (planetId) => planetAdapter(await axios.get(planetId)),
    film: async (filmId) => filmAdapter(await axios.get(filmId)),
    specie: async (specieId) => specieAdapter(await axios.get(specieId)),
  };
};
