import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MovieList from "../small-movie-card-list/small-movie-card-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import Promo from "../promo/promo.jsx";
import {getFilms, getPromoFilm} from "../../reducer/data/selector.js";
import {getCountDisplayedFilms} from "../../reducer/app-state/selector.js";
import {getSortGenre} from "../../reducer/app-state/selector";
import {getFilteredFilms} from "../../reducer/data/selector";

const Main = (props) => {
  const {films, onClick, onShowMoreClick, isButtonDisplayed} = props;


  return <React.Fragment>

    <Promo />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList films={films} sortGenre={`all-genres`}/>

        <MovieList
          films={films}
          onClick={onClick}
        />

        {isButtonDisplayed &&
          <ShowMore
            onShowMoreClick={onShowMoreClick}
          />
        }

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>
  ;
};

Main.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  isButtonDisplayed: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const countDisplayedFilms = getCountDisplayedFilms(state);
  const filmsState = getFilteredFilms(state);
  const films = filmsState.slice(0, countDisplayedFilms);
  const isButtonDisplayed = filmsState.length > countDisplayedFilms;
  const sortGenre = getSortGenre(state);

  return {
    films,
    isButtonDisplayed,
    sortGenre
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
