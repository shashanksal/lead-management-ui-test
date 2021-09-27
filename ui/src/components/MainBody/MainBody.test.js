import React from "react";
import { render } from "@testing-library/react";

import MainBody from "./MainBody";

describe("Mainbody", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<MainBody />);
		expect(asFragment()).toMatchSnapshot();
	});
});
