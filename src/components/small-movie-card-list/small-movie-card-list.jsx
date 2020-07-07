import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActivePlayItem from "../../hocs/with-active-play-item/with-active-play-item.js";

const WithActivePlayItemWrapper = withActivePlayItem(SmallMovieCard);

const MovieList = (props) => {
  const {films, onClick} = props;

  return <React.Fragment>
    <div className="catalog__movies-list">
      {films.map((film) => (
        <WithActivePlayItemWrapper key={film.id} film={film}
          onClick={onClick}
        />
      ))}
    </div>
  </React.Fragment>
  ;

};


MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieList;
