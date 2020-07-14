import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter()
});


it(`Testing play`, () => {

  const videoPlayer = mount(
      <VideoPlayer
        src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
        poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
        isPlaying={false}
      />
  );

  jest.spyOn(videoPlayer.instance(), `onPlay`);
  videoPlayer.instance().componentDidMount();

  videoPlayer.setProps({isPlaying: true});

  expect(videoPlayer.instance().onPlay).toHaveBeenCalledTimes(1);
});

it(`Testing load`, () => {

  window.HTMLMediaElement.prototype.load = () => {};

  const videoPlayer = mount(
      <VideoPlayer
        src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
        poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
        isPlaying={true}
      />
  );

  const {_videoRef} = videoPlayer.instance();
  jest.spyOn(_videoRef.current, `load`);
  videoPlayer.instance().componentDidMount();

  videoPlayer.setProps({isPlaying: false});

  expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
});
