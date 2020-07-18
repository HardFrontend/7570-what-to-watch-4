
import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._videoTimer = null;
  }

  componentDidMount() {
    const {poster, src, isPlaying} = this.props;
    const video = this._videoRef.current;

    video.poster = poster;
    video.src = src;

    if (isPlaying) {
      this.onPlay();
    } else {
      clearTimeout(this._videoTimer);
      video.load();
    }
  }

  onPlay() {
    const video = this._videoRef.current;
    const videoPlay = () => {
      video.play();
    };
    this._videoTimer = setTimeout(videoPlay, 1000);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this.onPlay();
    } else {
      clearTimeout(this._videoTimer);
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {src, poster} = this.props;

    return <React.Fragment>
      <video
        preload="none"
        loop={true}
        autoPlay={true}
        src={src}
        poster={poster}
        ref={this._videoRef}
      />
    </React.Fragment>;
  }
}
VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
