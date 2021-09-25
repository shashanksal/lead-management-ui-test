import React, { useState } from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Custom components import
import InvitedJobCard from "./InvitedJobCard/InvitedJobCard";

const InvitedTab = () => {
	return (
		<Box>
			<InvitedJobCard />
		</Box>
	);
};

export default InvitedTab;
