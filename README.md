# Factris Assignment.

This is the technical assignment from Factris.

The task is for you to create an app that's will list all the people in the data provided with their home planet.

E.g. when "Luke Skywalker" is called, the information should included information about Lukes home planet "Tatooine".

You should be able to filter people by their gender, spiecies and homeplanet. 

The UI is up to you. we don't expect a complete product here but we would like to see some key features for when working on the assignment.  We are interested in your approach to the problem.

We would like to see:
- ReactJS best practices
- Redux

Nice to have:
- unit testing

## Data

We have some sample data from https://swapi.co/ the data is included inside the mock API client.

The endpoint for retrieving the results are:

/people - to retrieve a list of poeple
/planets - to retrieve a list of planets
/species - to retrieve a list of species

Inside your code you can call one of the endpoints as follows:

```javascript
import apiClient from './src/mock-client/MockAxios';

apiClient.get('/people')
    .then(response => {
        // response is returned in the parameter
        console.log(response);
    });
```

If you have any question feel free to contact us.

Good luck!
