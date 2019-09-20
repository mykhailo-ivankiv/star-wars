# Factris Assignment.

This is the technical assignment from Factris.

The task is for you to create an app that's shows a list of Star Wars characters (/people endpoint). When a character is selected then the details of the character should be shown and the details of the related movies should be shown.

You should be able to filter characters by their gender, species and homeplanet. 

How the UI looks is up to you. We do not expect a complete and polished product, but we would like to see clean and efficient code. We are mostly interested in how you approach the assignment.

We would like to see:
- ReactJS best practices
- Redux (or alternative)

Nice to have:
- unit testing

## Data

We have some sample data from https://swapi.co/, the data is included inside the mock API client.

The endpoint for retrieving the results are:

/people - to retrieve a list of characters
/planets - to retrieve a list of planets
/species - to retrieve a list of species
/films - to retrieve a list of movies

Inside your code you can call one of the mock endpoints as follows:

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
