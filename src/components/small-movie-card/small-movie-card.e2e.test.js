import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const film =
  {
    id: 1,
    title: `Fantastic Beasts`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `comedy`,
    year: `2011`,
    videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
;
const isPlaying = false;

it(`Should title button be pressed`, () => {
  const onClick = jest.fn();
  const onMouseLeave = jest.fn();
  const onMouseEnter = jest.fn();
  const onHover = jest.fn();

  const smallMovieCard = mount(
      <SmallMovieCard
        film={film}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onHover={onHover}
        isMuted={true}
        isPlaying={isPlaying}
      />
  );

  const titleButton = smallMovieCard.find(`.small-movie-card__link`);
  titleButton.simulate(`click`);

  expect(onClick.mock.calls.length).toBe(1);
});

it(`smallMovieCard hover`, () => {
  const filmHover =
    {
      id: 1,
      title: `Fantastic Beasts`,
      img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      genre: `comedy`,
      year: `2011`,
      videosrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
    }
  ;

  const onHover = jest.fn();
  const onMouseLeave = jest.fn();
  const onMouseEnter = jest.fn();

  const smallMovieCard = mount(
      <SmallMovieCard
        film={filmHover}
        onClick={() => {}}
        onHover={onHover}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        isMuted={true}
        isPlaying={isPlaying}
      />
  );

  smallMovieCard.find(`article.small-movie-card`).simulate(`mouseover`);

  smallMovieCard.props().onMouseLeave();
  expect(onMouseLeave).toHaveBeenCalledTimes(1);

  onHover.mockImplementation(() => filmHover.id);
  expect(onHover()).toBe(1);
  expect(onHover).toHaveBeenCalledTimes(1);

});
