import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";


class MovieViewingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {onExitClick, onFullScreenClick, handleFullScreenHover, handleFullScreenMouseOver, handlePlayClick, isControllersVisible, children, isPlaying, progress, timeLeft} = this.props;
    console.log(`isControllersVisible ` + isControllersVisible);
    const opacity = isControllersVisible ? 1 : 0;

    return <React.Fragment>
      <div className="player">
        {children}

        <button type="button" className="player__exit"
          style={{opacity: `${opacity}`}}
          onClick={onExitClick}
          onMouseEnter={handleFullScreenHover}
          onMouseLeave={handleFullScreenMouseOver}
        >Exit
        </button>

        <div className="player__controls" style={{opacity: `${opacity}`}}
          onMouseEnter={handleFullScreenHover}
          onMouseLeave={handleFullScreenMouseOver}
        >
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeLeft}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play"
              onClick={handlePlayClick}
            >
              {isPlaying &&
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
              }
              {!isPlaying &&
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              }
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen"
              onClick={onFullScreenClick}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>;
  }
}

MovieViewingPage.propTypes = {
  onExitClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  timeLeft: PropTypes.string,
  isControllersVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  handleFullScreenHover: PropTypes.func.isRequired,
  handleFullScreenMouseOver: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onExitClick() {
    dispatch(ActionCreator.movieToWatch(null));
  }
});


export {MovieViewingPage};
export default connect(null, mapDispatchToProps)(MovieViewingPage);
