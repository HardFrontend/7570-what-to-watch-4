import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

const onShowMoreClick = () => {};

it(`ShowMore Button render`, () => {
  const tree = renderer
    .create(<ShowMore
      onShowMoreClick={onShowMoreClick}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
