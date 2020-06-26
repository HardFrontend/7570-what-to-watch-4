import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./small-movie-card-list.jsx";
import SmallPlayer from "../small-player/small-player";

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
const onHover = () => {};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<Albums /> should render Cinderella'
it(`MovieList render `, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onClick={onClick}
      onHover={onHover}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
