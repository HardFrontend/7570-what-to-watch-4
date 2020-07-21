import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {getPromoFilm} from "../../reducer/data/selector.js";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import {AuthorizationStatus} from "./../../reducer/user/user.js";

class Promo extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSignInClick = this.handleSignInClick.bind(this);
  }

  handleSignInClick(evt) {
    const {onSignInClick} = this.props;

    evt.preventDefault();

    onSignInClick();
  }

  render() {
    const {onPlayClick, promoFilm, authorizationStatus} = this.props;
    const {title, posterSrc, img,movieCoverSrc, genre, yearRelease} = promoFilm;
    console.log(authorizationStatus);

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
            {authorizationStatus === AuthorizationStatus.AUTH &&

            <div className="user-block__avatar">
              <img src={title} alt="User avatar" width="63" height="63"/>
            </div>
            }

            {authorizationStatus !== AuthorizationStatus.AUTH &&
            <a className="" onClick={this.handleSignInClick}>Sign In</a>
            }
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={movieCoverSrc} alt={title} width="218"
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

Promo.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterSrc: PropTypes.string.isRequired,
    movieCoverSrc: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    yearRelease: PropTypes.number.isRequired,
  }),
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  avatar: PropTypes.string
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick(film) {
    dispatch(ActionCreator.movieToWatch(film));
  },
  onSignInClick() {
    dispatch(ActionCreator.logIn(true));
  }
});

export {Promo};
export default connect(mapStateToProps, mapDispatchToProps)(Promo);
