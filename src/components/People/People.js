import React, { useContext, useState } from "react";
import { ApiContext } from "../App/App.js";
import { useAsync, useDebounce } from "react-use";
import Person from "../Person/Person.js";
import {SearchHighlightContext} from "../SearchHighlight/SearchHighlight.js";

const People = () => {
  const api = useContext(ApiContext);
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useDebounce(() => setDebouncedSearch(search), 400, [search]);

  const people = useAsync(
    () => api.people(debouncedSearch),
    [api, debouncedSearch]
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <div>
        {people.loading && !people.value && "loading"}
        {people.error && `Error: ${people.error.message}`}
        {people.value?.map(({ name, birthYear, homeWorld, species, films }) => (
          <SearchHighlightContext.Provider value={search}>
            <Person
              key={name}
              name={name}
              birthYear={birthYear}
              homeWorld={homeWorld}
              species={species}
              films={films}
            />
          </SearchHighlightContext.Provider>
        ))}
      </div>
    </>
  );
};

export default People;
