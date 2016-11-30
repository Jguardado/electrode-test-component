/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import FirstTestComponent from "src/components/first-test-component";

describe("components/first-test-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<FirstTestComponent />);
      expect(component).to.not.be.null;
    });

  });

});
