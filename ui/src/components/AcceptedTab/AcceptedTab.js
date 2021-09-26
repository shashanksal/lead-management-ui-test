import React, { useState, useEffect } from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Custom components import
import AcceptedJobCard from "./AcceptedJobCard/AcceptedJobCard";

import requestController from "../../controller/requestController";

import { BASE_URL } from "../../utils/constants";

const AcceptedTab = () => {
	const [acceptedJobs, getAcceptedJobs] = useState([]);
	const fetchData = async event => {
		const url = `${BASE_URL}/jobs/accepted`;
		const jobsResponse = await requestController.makeRequest(url, "GET");
		if (!jobsResponse.error) {
			getAcceptedJobs(jobsResponse.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Box>
			{acceptedJobs.length > 0 ? (
				acceptedJobs.map((acceptedJob, i) => {
					return <AcceptedJobCard {...acceptedJob} key={i} />;
				})
			) : (
				<Typography variant="h3" component="div">
					No accepted jobs to show
				</Typography>
			)}
		</Box>
	);
};

export default AcceptedTab;
