import React from "react";
import { render } from "@testing-library/react";

import TaskTabs from "./TaskTabs";

describe("TaskTabs", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<TaskTabs />);
		expect(asFragment()).toMatchSnapshot();
	});
});
