import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FilmPromo = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2010,
};

const films = [
  {title: `Fantastic Beasts`},
  {title: `Bohemian Rhapsody`},
  {title: `Macbeth`}
];

ReactDOM.render(
  <App filmPromoName={FilmPromo.name}
       filmPromoGenre={FilmPromo.genre}
       filmPromoDate={FilmPromo.releaseDate}
       films={films}
  />,
  document.querySelector(`#root`)
);
