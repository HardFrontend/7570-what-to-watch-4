import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import SmallPlayer from "../small-player/small-player";

const film =
  {
    id: 0,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };

const onMouseEnter = () => {};
const onMouseLeave = () => {};
const onClick = () => {};
const isPlaying = false;

it(`SmallMovieCard render`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      isPlaying={isPlaying}
    />, {
        createNodeMock: () => {
          return {};
        }
      }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
