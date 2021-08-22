import PlanetView from "./PlanetView.js";
import React, { useContext } from "react";
import { ApiContext } from "../App/App.js";
import { useAsync } from "react-use";

const Planet = ({ id }) => {
  const api = useContext(ApiContext);
  const {
    loading,
    error,
    value: planet,
  } = useAsync(() => api.planet(id), [id]);

  if (loading) return "Loading";
  if (error) return "Error";

  const { name } = planet;

  return <PlanetView name={name} />;
};

export default Planet;
