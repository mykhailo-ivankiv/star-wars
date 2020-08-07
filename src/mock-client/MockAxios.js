import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import peopleData from './data/people.json';
import planetsData from './data/planets.json';
import speciesData from './data/species.json';
import filmsData from './data/films.json';

const mock = new MockAdapter(axios);
mock
	.onGet('/people').reply(200, peopleData)
	.onGet('/planets').reply(200, planetsData)
	.onGet('/species').reply(200, speciesData)
	.onGet('/films').reply(200, filmsData)

export default axios;
