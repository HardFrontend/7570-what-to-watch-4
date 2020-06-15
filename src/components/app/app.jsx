import React from "react";
import Main from "../main/Main.jsx";

const App = (props) => {
// eslint-disable-next-line react/prop-types
  const {filmPromoName, filmPromoGenre, filmPromoDate} = props;

  return <Main filmPromoName={filmPromoName} filmPromoGenre={filmPromoGenre} filmPromoDate={filmPromoDate} />;
};

export default App;
