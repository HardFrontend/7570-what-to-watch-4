import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MovieList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handleHover = this._handleHover.bind(this);
    this._handlerCardMouseLeave = this._handlerCardMouseLeave.bind(this);
  }

  _handleHover(filmId) {
    this.setState({
      activeCard: filmId,
    });
  }

  _handlerCardMouseLeave() {
    this.setState({
      activeCard: null,
    });
  }


  render() {
    const {films, onClick} = this.props;

    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard key={film.id} film={film}
            onClick={onClick}
            onHover={this._handleHover }
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
  onClick: PropTypes.func.isRequired,
};

export default MovieList;
