import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.films = this.props.films;
    this.getGenresList = this.getGenresList.bind(this);
  }

  getGenresList() {
    let array1 = [`All genres`];

    this.films.forEach((film) => array1.push(film.genre));
    array1 = Array.from(new Set(array1)).slice(0, 9);

    return array1;
  }

  render() {
    const {sortGenre, onFilterClick} = this.props;
    const genresList = this.getGenresList();

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
};

const mapStateToProps = (state) => ({
  sortGenre: state.sortGenre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(id) {
    dispatch(ActionCreator.filterChange(id));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
