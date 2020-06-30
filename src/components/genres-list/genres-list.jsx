import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }


  render() {
    const {genres, onFilterClick} = this.props;

    return <React.Fragment>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item">
          <a href="#" id="all-genres" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onFilterClick(`all-genres`);
            }}
          >All genres</a>
        </li>
        {genres.map((genre) => (
          <li key={genre} className="catalog__genres-item">
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
  genres: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortGenre: state.sortGenre,
  filmsShow: state.filmsShow,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(id) {
    console.log(`mapDispatchToProps ` + id);
    dispatch(ActionCreator.filterChange(id));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
