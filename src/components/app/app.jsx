import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayer from "../video-player/video-player.jsx";


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
    const {filmPromoName, filmPromoGenre, filmPromoDate, films, onShowMoreClick, filmsShowTo, playableMovie} = this.props;
    const {activeFilm} = this.state;
    const allGenres = this._getAllGenres(films);

    let filmsSlised = () => {
      return films.slice(0, filmsShowTo);
    };
    filmsSlised();


    if (!activeFilm && !playableMovie) {
      return (
        <Main
          filmPromoName={filmPromoName}
          filmPromoGenre={filmPromoGenre}
          filmPromoDate={filmPromoDate}
          films={films}
          filmsShow={filmsSlised()}
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
        <VideoPlayer poster={film.img}
          src={film.videosrc}
          isMuted={true}
          isPlaying={true}
          width="280" height="175" />
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
  filmPromoName: PropTypes.string.isRequired,
  filmPromoGenre: PropTypes.string.isRequired,
  filmPromoDate: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  filmsShowTo: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortGenre: state.sortGenre,
  films: state.films,
  filmsShowTo: state.filmsShowTo,
  playableMovie: state.playableMovie
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.sliceFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
