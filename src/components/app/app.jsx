import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

const onTitleButtonClick = () => {
};

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

  _renderMain() {
    const {filmPromoName, filmPromoGenre, filmPromoDate, films} = this.props;
    const {activeFilm} = this.state;

    if (!activeFilm) {
      return (
        <Main
          filmPromoName={filmPromoName}
          filmPromoGenre={filmPromoGenre}
          filmPromoDate={filmPromoDate}
          films={films}
          onClick={this._handleClick}
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
};

export default App;
