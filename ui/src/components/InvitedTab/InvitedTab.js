import React, { useEffect, useState } from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Custom components import
import InvitedJobCard from "./InvitedJobCard/InvitedJobCard";

import requestController from "../../controller/requestController";

import { BASE_URL } from "../../utils/constants";

const InvitedTab = () => {
	const [newJobs, getNewJobs] = useState([]);
	const fetchData = async event => {
		const url = `${BASE_URL}/jobs/new`;
		const jobsResponse = await requestController.makeRequest(url, "GET");
		if (!jobsResponse.error) {
			getNewJobs(jobsResponse.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Box className="job-card-wrapper">
			{newJobs.length > 0 ? (
				newJobs.map((newJob, i) => {
					return <InvitedJobCard {...newJob} key={i} fireUpdateEvent={fetchData} />;
				})
			) : (
				<Typography variant="h3" component="div">
					No new jobs to show
				</Typography>
			)}
		</Box>
	);
};

export default InvitedTab;
