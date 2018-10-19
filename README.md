# Factris Assignment.

this is the technical assignment from Factris.

the task is for you to create an app thats will list all the people in the data provided with their home planet.

e.g. when "Luke Skywalker" is called, the information should included information about Lukes home planet "Tatooine".

you should be able to filter people by their gender, spiecies and homeplanet. 

the UI is up to you. we dont expect a complete product here but we would like to see some key features for when working on the assignment.  we are interested in your approach to the problem.

we would like to see:
- ReactJS best practices
- Redux

nice to have:
- unit testing

## Data

we have some sample data from https://swapi.co/ the data is included inside the mock API client.

the endpoint for retrieving the results are:

/people - to retrieve a list of poeple
/planets - to retrieve a list of planets
/species - to retrieve a list of species

inside your code you can call one of the endpoints as follows:

```javascript
import apiClient from './src/mock-client/MockAxios';

apiClient.get('/people')
    .then(response => {
        // response is returned in the parameter
        console.log(response);
    });
```

if you have any question feel free to contact us.

good luck.
