import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onTitleButtonClick, onMouseOver} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onMouseOver(film.id)}>
      <div className="small-movie-card__image">
        <img src={film.img}
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleButtonClick}>{film.title}</a>
      </h3>
    </article>
  </React.Fragment>
  ;
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTitleButtonClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default SmallMovieCard;