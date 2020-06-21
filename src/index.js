import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const FilmPromo = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2010,
};

ReactDOM.render(
    <App filmPromoName={FilmPromo.name}
      filmPromoGenre={FilmPromo.genre}
      filmPromoDate={FilmPromo.releaseDate}
      films={films}
    />,
    document.querySelector(`#root`)
);
