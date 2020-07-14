import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActivePlayItem from "./with-active-play-item.js";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withActivePlayItem(MockComponent);

it(`withActivePlayItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
