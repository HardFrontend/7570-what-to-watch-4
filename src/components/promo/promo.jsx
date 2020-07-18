import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {getPromoFilm} from "../../reducer/data/selector.js";

class Promo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPlayClick, promoFilm} = this.props;
    const {title, posterSrc,img, genre,yearRelease} = promoFilm;
    console.log(title);
    // const title = film.title;
    // console.log(`title ` + title)

    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={posterSrc} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={title} alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={img} alt={title} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{yearRelease}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onPlayClick(promoFilm);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    ;
  }
}

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    console.log(`onPlayClick`)
    dispatch(ActionCreator.movieToWatch(film));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
