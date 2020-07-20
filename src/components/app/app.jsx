import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import MovieViewingPage from "../movie-viewing-page/movie-viewing-page.jsx";
import withVideo from "../../hocs/with-video/with-video";
import {getPromoFilm, getFilteredFilms} from "../../reducer/data/selector.js";
import {getPlayableMovie} from "../../reducer/app-state/selector.js";

const MovieViewingPageWrapped = withVideo(MovieViewingPage);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(index) {
    this.setState({
      activeFilm: index,
    });
  }

  _getAllGenres(films) {
    let genres = [`All genres`];
    films.forEach((film) => genres.push(film.genre));
    genres = Array.from(new Set(genres)).slice(0, 9);
    return genres;
  }

  _renderMain() {
    const {films, onShowMoreClick, playableMovie, promoFilm} = this.props;
    const {activeFilm} = this.state;
    const allGenres = this._getAllGenres(films);
    console.log(promoFilm);

    if (!films.length || !promoFilm) {
      console.log(`error`)
      return <div style={{backgroundColor: `red`, textAlign: `center`}}>У нашего сервера что не так</div>;
    } else

    if (!activeFilm && !playableMovie) {
      return (
        <Main
          films={films}
          onClick={this._handleClick}
          allGenres={allGenres}
          onShowMoreClick={onShowMoreClick}
        />);
    }

    if (activeFilm) {
      return (
        <MoviePage film={films.find((film) => film.id === activeFilm)}/>
      )
      ;
    }

    if (playableMovie) {
      console.log(playableMovie);
      const film = playableMovie;

      return (
        <MovieViewingPageWrapped poster={film.img}
          src={film.videosrc}
          isMuted={true}
          isPlaying={true}
        />
      );
    }

    return null;
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-component">
            <MoviePage film={films[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortGenre: state.sortGenre,
  films: getFilteredFilms(state),
  playableMovie: getPlayableMovie(state),
  promoFilm: getPromoFilm(state)
});


const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.increaseCountDisplayedFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
