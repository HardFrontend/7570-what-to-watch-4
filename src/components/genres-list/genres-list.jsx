import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state.js";
import {getFilms} from "../../reducer/data/selector.js";
import {ActionCreator as dataActionCreator} from "../../reducer/data/data.js";
import {getSortGenre} from "../../reducer/app-state/selector.js";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.getGenresList = this.getGenresList.bind(this);
  }

  getGenresList() {
    let genres = [`All genres`];
    const {films} = this.props;
    films.forEach((film) => genres.push(film.genre));
    genres = Array.from(new Set(genres)).slice(0, 9);

    return genres;
  }

  render() {
    const {sortGenre, onFilterClick} = this.props;
    const genresList = this.getGenresList();
    console.log(sortGenre)

    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genresList.map((genre) => (
          <li key={genre} className={`catalog__genres-item
           ${sortGenre === genre ? `catalog__genres-item--active` : ``
          }`}>
            <a href="#" id={genre} className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onFilterClick(genre);
              }}
            >{genre}</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
    ;
  }
}

GenresList.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  sortGenre: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  sortGenre: getSortGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(id) {
    dispatch(ActionCreator.filterChange(id));
    dispatch(dataActionCreator.setGenreForFilter(id));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
