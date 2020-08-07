# Factris Assignment.

Hi, this is the front end technical assignment of Factris. In this assignment we use an existing publicly available API. You can find the documentation here: https://swapi.dev/documentation. The endpoint can be found here: https://swapi.dev/api/

The task for you is to update this application so that it shows a list of the Star Wars characters (`/people` endpoint). The list should have the following items:
- Character name
- Character birth year
- Homeworld name (`/planet`)
- Species (`/species`) name, we assume there is only one species 
- Title of the first film (`/films`) in which the character appears (by release date)

Create a mechanism that resolves all directly related resources. For example if "Luke Skywalker" (`/people/1`) is one of the resources in your list then you should fetch the following related resources: 
```javascript
"homeworld": "https://swapi.dev/api/planets/1/",
"films": [
	"https://swapi.dev/api/films/2/",
	"https://swapi.dev/api/films/6/",
	"https://swapi.dev/api/films/3/",
	"https://swapi.dev/api/films/1/",
	"https://swapi.dev/api/films/7/"
],
"species": [
	"https://swapi.dev/api/species/1/"
],
"vehicles": [
	"https://swapi.dev/api/vehicles/14/",
	"https://swapi.dev/api/vehicles/30/"
],
"starships": [
	"https://swapi.dev/api/starships/12/",
	"https://swapi.dev/api/starships/22/"
]

```


Make sure that the mechanism you develop is resource agnostic. This means that it should support resolving the relations of any given resource. For example if you were to load the resource `/species/1` (human species) then your code should be able to fetch:
```javascript
"people": [
	"http://swapi.dev/api/people/66/",
	"http://swapi.dev/api/people/67/",
	"http://swapi.dev/api/people/68/",
	"http://swapi.dev/api/people/74/"
],
"films": [
	"http://swapi.dev/api/films/1/",
	"http://swapi.dev/api/films/2/",
	"http://swapi.dev/api/films/3/",
	"http://swapi.dev/api/films/4/",
	"http://swapi.dev/api/films/5/",
	"http://swapi.dev/api/films/6/"
]
```
Restict your implementation to only resolve directly related resources (do not load and cache all `people` and use them when needed). Given the example of `/species/1` you should only load the four related `people` and six related `films`. So the `planets` related to the `people` should not be fetched since these are not directly related to the `species`.

How the UI looks is up to you. A polished UI is not necessary, you can use any out of the box framework (e.g. material-ui). We would like to see clean and efficient code. We are mostly interested in how you approach the assignment.

We would like to see:
- ReactJS best practices
- State management
- Unit tests for your resource fetching mechanism

## Data

You can use the Star wars api endpoint https://swapi.dev/ to fetch data. You can use a library of your own choosing to fetch the data.
There's a mock client available in this repo that gives you the option to try out a few endpoints.

If you have any question feel free to contact us.

Good luck!
