import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../small-player/small-player.jsx";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film, onClick, onHover} = this.props;

    return <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          this.timerId = setTimeout(() =>
            this.setState({
              isPlaying: true,
            }), 2000);

          onHover(film.id);
        }}

        onMouseLeave={() => {
          clearTimeout(this.timerId);
          this.setState({
            isPlaying: false,
          });
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            poster={film.img}
            src={film.videosrc}
            isMuted={true}
            isPlaying={this.state.isPlaying}
            width="280" height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html"
            onClick={(evt) => {
              evt.preventDefault();
              onClick(film.id);
            }}>{film.title}</a>
        </h3>
      </article>
    </React.Fragment>
    ;
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videosrc: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
};
