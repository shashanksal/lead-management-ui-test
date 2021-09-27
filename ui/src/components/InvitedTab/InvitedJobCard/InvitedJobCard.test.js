import React from "react";
import { render } from "@testing-library/react";

import InvitedJobCard from "./InvitedJobCard";

const props = {
	contact_name: "contact name",
	category_name: "category",
	created_at: "2021-09-27T12:46:16.867Z",
	description: "Description",
	id: "1",
	suburb_name: "suburb",
	postcode: "1234",
	price: "100",
	fireUpdateEvent: jest.fn()
};

describe("InvitedJobCard", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<InvitedJobCard {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
