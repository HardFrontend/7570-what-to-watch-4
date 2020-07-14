import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: props.isPlaying,
        isFullScreenMode: false,
        isControllersVisible: true,
        progress: 0,
        timeLeft: `00:00:00`,
      };

      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
      this.handleFullScreenHover = this.handleFullScreenHover.bind(this);
      this.handleFullScreenMouseOver = this.handleFullScreenMouseOver.bind(this);
      this.handlePlayClick = this.handlePlayClick.bind(this);
    }

    handleFullScreenClick() {
      this.setState(()=>({
        isFullScreenMode: true,
        isControllersVisible: false,
      }));
    }

    handleFullScreenHover() {
      this.setState(()=>({
        isControllersVisible: true
      }));
    }

    handleFullScreenMouseOver() {
      if (this.state.isPlaying) {
        this.setState(()=>({
          isControllersVisible: false
        }));
      }
    }

    handlePlayClick() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }


    componentDidMount() {
      const {poster, src} = this.props;
      const video = this._videoRef.current;


      video.poster = poster;
      video.src = src;

      video.onloadedmetadata = () => {
        video.ontimeupdate = () =>
          this.setState({
            progress: (Math.floor(video.currentTime) * 100) / video.duration,
            timeLeft: this.secondsToTime(video.duration - video.currentTime),
          });
      };
    }

    secondsToTime(seconds) {
      const date = new Date(0);
      date.setSeconds(seconds);
      const timeString = date.toISOString().substr(11, 8);
      return timeString;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

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
      const {isPlaying, autoPlay, isControllersVisible,progress,timeLeft} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          autoPlay={autoPlay}
          progress={progress}
          timeLeft={timeLeft}
          onFullScreenClick={this.handleFullScreenClick}
          handleFullScreenHover={this.handleFullScreenHover}
          handlePlayClick={this.handlePlayClick}
          handleFullScreenMouseOver={this.handleFullScreenMouseOver}
          isControllersVisible={isControllersVisible}
        >
          <video
            className="player__video"
            autoPlay={true}
            loop={false}
            ref={this._videoRef}
          >
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
