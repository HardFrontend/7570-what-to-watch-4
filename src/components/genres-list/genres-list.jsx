import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }


  render() {
    const {genres,sortGenre, onFilterClick} = this.props;

    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
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
  genres: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  sortGenre: PropTypes.string.isRequired,
};


export default GenresList;
