import React, { createContext } from "react";
import { useAsync } from "react-use";
import "./App.css";
import BEM from "../../utils/ BEM.js";
import People from "../People/People.js";
import { starWarsAPI } from "../../services/star-wars.js";

const b = BEM("App");

export const ApiContext = createContext(null);

const App = () => {
  const { loading, error, value: api } = useAsync(() => starWarsAPI(), []);

  return (
    <div className={b()}>
      <h1>Factris Technical Assignment</h1>
      {loading && "Loading"}
      {!loading && error && <div>Error: {error.message}</div>}
      {!loading && api && (
        <ApiContext.Provider value={api}>
          <People />
        </ApiContext.Provider>
      )}
    </div>
  );
};

export default App;
