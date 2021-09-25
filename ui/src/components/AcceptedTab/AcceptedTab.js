import React, { useState } from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Custom components import
import AcceptedJobCard from "./AcceptedJobCard/AcceptedJobCard";

const AcceptedTab = () => {
	return (
		<Box>
			<AcceptedJobCard />
		</Box>
	);
};

export default AcceptedTab;
