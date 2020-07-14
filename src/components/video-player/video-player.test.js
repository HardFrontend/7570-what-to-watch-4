import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film =
  {
    id: 0,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  };


it(`VideoPlayer render`, () => {
  const tree = renderer
    .create(<VideoPlayer
      poster={film.img}
      src={film.videosrc}
      preload="none"
      loop={true}
      autoPlay={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
