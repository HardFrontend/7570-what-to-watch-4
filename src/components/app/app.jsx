import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";


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

  _allGenres(allFilms) {
    let array1 = [`All genres`];
    allFilms.forEach((film) => array1.push(film.genre));
    console.log(new Set(array1));
    array1 = Array.from(new Set(array1)).slice(0, 9);
    return array1;
  }

  _renderMain() {
    const {filmPromoName, filmPromoGenre, filmPromoDate, films, allFilms, filmsShow, onFilterClick, onShowMoreClick, filmsShowTo = 8} = this.props;
    const {activeFilm} = this.state;
    const allGenres = this._allGenres(allFilms);

    let filmsSlised = () => {
      return filmsShow.slice(0, filmsShowTo);
    };
    console.log(filmsSlised());
    filmsSlised();

    if (!activeFilm) {
      return (
        <Main
          filmPromoName={filmPromoName}
          filmPromoGenre={filmPromoGenre}
          filmPromoDate={filmPromoDate}
          films={filmsSlised()}
          filmsShow={filmsShow}
          onClick={this._handleClick}
          onFilterClick = {onFilterClick}
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

    return null;
  }

  render() {
    const {filmsShow} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-component">
            <MoviePage film={filmsShow[0]}/>
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
  allFilms: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortGenre: state.sortGenre,
  filmsShow: state.filmsShow,
  films: state.films,
  allFilms: state.allFilms,
  filmsShowTo: state.filmsShowTo
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(id) {
    console.log(`ActionCreator.onFilterClick`);
    dispatch(ActionCreator.filterChange(id));
  },

  onShowMoreClick() {
    console.log(`ActionCreator.sliceFilms`);
    dispatch(ActionCreator.sliceFilms());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
