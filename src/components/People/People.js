import React, { useContext, useState } from "react";
import { ApiContext } from "../App/App.js";
import { useAsync, useDebounce } from "react-use";
import Person from "../Person/Person.js";
import { SearchHighlightContext } from "../SearchHighlight/SearchHighlight.js";
//
import "./People.css";
import BEM from "../../utils/BEM";
const b = BEM("People");

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
    <div className={b()}>
      <input
        type="text"
        className={b("search-input")}
        value={search}
        placeholder="Search here"
        onChange={({ target }) => setSearch(target.value)}
      />
      <div className={b("search-result", { loading: people.loading })}>
        {people.loading && !people.value && "loading"}
        {people.error && `Error: ${people.error.message}`}
        {people.value?.map(({ name, birthYear, homeWorld, species, films }) => (
          <SearchHighlightContext.Provider value={search}>
            <div className={b("search-result-item")}>
              <Person
                key={name}
                name={name}
                birthYear={birthYear}
                homeWorld={homeWorld}
                species={species}
                films={films}
              />
            </div>
          </SearchHighlightContext.Provider>
        ))}
      </div>
    </div>
  );
};

export default People;
