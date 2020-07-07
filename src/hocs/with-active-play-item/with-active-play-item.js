import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActivePlayItem = (Component) => {
  class WithActivePlayItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.handlerHover = this.handlerHover.bind(this);
      this.handlerLeave = this.handlerLeave.bind(this);
    }


    handlerHover() {
      this.timerId = setTimeout(() =>
        this.setState({
          isPlaying: true,
        }));
    }

    handlerLeave() {
      clearTimeout(this.timerId);
      this.setState({
        isPlaying: false,
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          onMouseEnter={this.handlerHover}
          onMouseLeave={this.handlerLeave}
          isPlaying={isPlaying}
        />
      );
    }
  }

  return WithActivePlayItem;
};

export default withActivePlayItem;
