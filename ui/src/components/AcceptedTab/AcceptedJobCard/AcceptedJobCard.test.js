import React from "react";
import { render } from "@testing-library/react";

import AcceptedJobCard from "./AcceptedJobCard";

const props = {
	contact_name: "contact name",
	category_name: "category",
	created_at: "2021-09-27T12:46:16.867Z",
	description: "Description",
	id: "1",
	suburb_name: "suburb",
	postcode: "1234",
	price: "100",
	contact_phone: "0401401401",
	contact_email: "abc@pqr.com"
};

describe("AcceptedJobCard", () => {
	it("should match snapshot", () => {
		const { asFragment } = render(<AcceptedJobCard {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
