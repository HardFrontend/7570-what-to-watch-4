import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class ShowMore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {onShowMoreClick} = this.props;

    return <React.Fragment>
      <div className="catalog__more">
        <button className="catalog__button" type="button"
          onClick={(evt) => {
            evt.preventDefault();
            onShowMoreClick();
          }}
        >Show more</button>
      </div>
    </React.Fragment>
    ;
  }
}

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export default ShowMore;
