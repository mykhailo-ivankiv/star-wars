import React, { useContext } from "react";
import { useAsync } from "react-use";
import { ApiContext } from "../App/App.js";
import SpecieView from "./SpecieView.js";

const Specie = ({ id }) => {
  const api = useContext(ApiContext);
  const {
    loading,
    error,
    value: specie,
  } = useAsync(() => api.specie(id), [id]);

  if (loading) return "Loading";
  if (error) return "Error";

  const { name } = specie;

  return <SpecieView name={name} />;
};

export default Specie;
