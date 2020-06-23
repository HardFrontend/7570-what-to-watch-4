import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {Route} from "react-router-dom";

class MovieList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handlerCardMouseOver = this._handlerCardMouseOver.bind(this);
    this._handlerCardMouseLeave = this._handlerCardMouseLeave.bind(this);
  }

  _handlerCardMouseOver(filmId) {
    const {activeCard} = this.state;
    this.setState({
      activeCard: filmId,
    });

    console.log(`filmId ` + filmId);
    console.log(activeCard);
  }

  _handlerCardMouseLeave() {
    this.setState({
      activeCard: null,
    });
  }


  render() {
    const {films, onTitleButtonClick} = this.props;

    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard key={film.id} film={film}
                          onTitleButtonClick={onTitleButtonClick}
                          onMouseEnterCard={this._handlerCardMouseOver}
                          onMouseLeaveCard={this._handlerCardMouseLeave}
          />
        ))}
      </div>
    </React.Fragment>
      ;
  }
}


MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTitleButtonClick: PropTypes.func.isRequired,
};

export default MovieList;
