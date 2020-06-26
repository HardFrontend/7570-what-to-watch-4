import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import MovieList from "../small-movie-card-list/small-movie-card-list";

// Для тестов мы готовим отдельные моки.
// Не следует импортировать моки, которые
// применяются для приложения.
const FilmPromo = {
  name: `The Grand Budapest Hotel`,
  genre: `Horor`,
  releaseDate: 2010,
};

const films = [
  {
    id: 0,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];


const onClick = () => {};

it(`Main should render films & Promo`, () => {
  const tree = renderer
    .create(<Main
      filmPromoName={FilmPromo.name}
      filmPromoGenre={FilmPromo.genre}
      filmPromoDate={FilmPromo.releaseDate}
      films={films}
      onClick={onClick}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
