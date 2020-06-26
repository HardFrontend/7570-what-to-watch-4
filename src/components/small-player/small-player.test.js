import React from "react";
import renderer from "react-test-renderer";
import SmallPlayer from "./small-player.jsx";

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
    .create(<SmallPlayer
      poster={film.img}
      src={film.videosrc}
      isMuted={true}
      isPlaying={true}
      width="280" height="175"
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
