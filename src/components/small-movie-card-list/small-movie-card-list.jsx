import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MovieList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this.handlerCardMouseOver = this.handlerCardMouseOver.bind(this);
  }

  handlerCardMouseOver(id) {
    this.setState({activeCardId: id});
    console.log(id)
  }

  render() {
    const {films, onTitleButtonClick} = this.props;

    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard key={film.id} film={film} onTitleButtonClick={onTitleButtonClick} onMouseOver={this.handlerCardMouseOver}/>
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
