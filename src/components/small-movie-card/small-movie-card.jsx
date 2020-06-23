import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onTitleButtonClick, onMouseEnterCard, onMouseLeaveCard} = props;
  const handleCardEnter = () => onMouseEnterCard(film.id);
  const handleCardLeave = () => onMouseLeaveCard();

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => handleCardEnter(film.id)}
             onMouseLeave={handleCardLeave}>
      <div className="small-movie-card__image">
        <img src={film.img}
             alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html"
           onClick={(evt) => {
             evt.preventDefault();
             onTitleButtonClick(film.id);
           }}>{film.title}</a>
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
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
};

export default SmallMovieCard;
