import FilmView from "./FilmView.js";
import { ApiContext } from "../App/App.js";
import { useAsync } from "react-use";
import { useContext } from "react";

const Film = ({ id }) => {
  const api = useContext(ApiContext);
  const { loading, error, value: film } = useAsync(() => api.film(id), [id]);

  if (loading) return "Loading";
  if (error) return "Error";

  const { title } = film;
  return <FilmView title={title} />;
};

export default Film;
