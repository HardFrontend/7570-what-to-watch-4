import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {filmPromoName, filmPromoGenre, filmPromoDate, films} = props;

  return <Main
    filmPromoName={filmPromoName}
    filmPromoGenre={filmPromoGenre}
    filmPromoDate={filmPromoDate}
    films={films}
  />;
};

App.propTypes = {
  filmPromoName: PropTypes.string.isRequired,
  filmPromoGenre: PropTypes.string.isRequired,
  filmPromoDate: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
