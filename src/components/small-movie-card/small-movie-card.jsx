import React from "react";
import PropTypes from "prop-types";
import SmallPlayer from "../small-player/small-player.jsx";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerWrapped = withVideo(SmallPlayer);

const SmallMovieCard = (props) => {

  const {film, onClick, isPlaying, onHover, onMouseEnter, onMouseLeave} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayerWrapped
          poster={film.img}
          src={film.videosrc}
          isMuted={true}
          isPlaying={isPlaying}
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
};

export default SmallMovieCard;

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    videosrc: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  //onHover: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
