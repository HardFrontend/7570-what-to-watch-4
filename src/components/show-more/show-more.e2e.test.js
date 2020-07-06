import React from "react";
import renderer from "react-test-renderer";

import ShowMore from "./show-more.jsx";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should ShowMore Button button be pressed`, () => {
  const onShowMoreClick = jest.fn();

  const showMore = mount(
      <ShowMore
        onShowMoreClick={onShowMoreClick}
      />
  );

  const showMoreButton = showMore.find(`.catalog__button`);
  showMoreButton.simulate(`click`);

  expect(onShowMoreClick.mock.calls.length).toBe(1);
});
