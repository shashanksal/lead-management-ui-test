import React from "react";
import { render } from "@testing-library/react";

import InvitedTab from "./InvitedTab";

describe("InvitedTab", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<InvitedTab />);
		expect(asFragment()).toMatchSnapshot();
	});
});
