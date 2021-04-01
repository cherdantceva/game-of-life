import React from "react";
import { shallow } from "enzyme";
import { Cell } from "../src/Cell";

test("test", () => {
  const cell = shallow(<Cell childrenNumber={1} />);
  expect(cell.text()).toEqual("");
  cell.simulate("click");
  expect(cell.text()).toEqual("1");
});
