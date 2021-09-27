import React from "react";
import { render } from "@testing-library/react";

import AcceptedTab from "./AcceptedTab";

describe("AcceptedTab", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<AcceptedTab />);
		expect(asFragment()).toMatchSnapshot();
	});
});
