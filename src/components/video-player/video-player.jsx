import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._videoTimer = null;
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
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
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
        width="280"
        height="175"
        loop={true}
        autoPlay={false}
        src={src}
        poster={poster}
        ref={this._videoRef}
      />
    </React.Fragment>;
  }
}


export default VideoPlayer;
