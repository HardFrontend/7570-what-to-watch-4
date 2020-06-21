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
  }

  _renderMain() {
    const {filmPromoName, filmPromoGenre, filmPromoDate, films} = this.props;

    return <Main
      filmPromoName={filmPromoName}
      filmPromoGenre={filmPromoGenre}
      filmPromoDate={filmPromoDate}
      films={films}
      onTitleButtonClick={onTitleButtonClick}
    />;
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
            <MoviePage film={films[0]} />
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
