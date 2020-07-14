import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MovieList from "../small-movie-card-list/small-movie-card-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import Promo from "../promo/promo.jsx";

const Main = (props) => {
  const {filmPromoName, filmPromoGenre, filmPromoDate, films, filmsShow, onClick, onShowMoreClick} = props;


  return <React.Fragment>

    <Promo />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList films={films} sortGenre={`all-genres`}/>

        <MovieList
          films={filmsShow}
          onClick={onClick}
        />

        {films.length > 9 &&
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
  filmPromoName: PropTypes.string.isRequired,
  filmPromoGenre: PropTypes.string.isRequired,
  filmPromoDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  filmsShow: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {Main};
export default connect(mapStateToProps)(Main);
