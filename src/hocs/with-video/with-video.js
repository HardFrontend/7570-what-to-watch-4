import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: props.isPlaying
      };
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
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
        >
          <video
            ref={this._videoRef}>
          </video>
        </Component>
      );
    }
  }


  WithVideo.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  };

  return WithVideo;
};


export default withVideo;
