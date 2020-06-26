import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

export default class SmallPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {isPlaying: props.isPlaying};
    this._videoRef = createRef();
  }

  componentDidMount() {
    const {isMuted, poster, src, width, height} = this.props;
    const video = this._videoRef.current;

    if (isMuted) {
      video.muted = true;
    }

    video.poster = poster;
    video.src = src;
    video.width = width;
    video.height = height;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return (
      <video
        ref={this._videoRef}>
      </video>
    );
  }


  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

}

SmallPlayer.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
