import React, {Fragment} from "react";
import PropTypes from "prop-types";

const SmallPlayer = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};
export default SmallPlayer;

SmallPlayer.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
