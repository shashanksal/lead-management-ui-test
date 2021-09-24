import React, { useState } from "react";
import PropTypes from "prop-types";

//Material UI Components
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { THEME_COLOUR_1 } from "../../utils/constants";

// Styles
import { styled } from "@mui/material/styles";

// Custom components import
import InvitedTab from "../InvitedTab";
import AcceptedTab from "../AcceptedTab";

const CustomTab = styled(props => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	minWidth: 0,
	[theme.breakpoints.up("sm")]: {
		minWidth: 0
	},
	border: "1px solid #EEEEEE",
	fontWeight: theme.typography.fontWeightRegular,
	color: "#121212",
	"&.Mui-selected": {
		color: "#121212",
		fontWeight: theme.typography.fontWeightBold
	},
	backgroundColor: "#FFFFFF"
}));

const TabPanel = props => {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node
};

const TaskTabs = () => {
	const [value, setValue] = useState("invited");

	const handleChange = (event, newValue) => {
		console.log("VAl ===", newValue);
		setValue(newValue);
	};

	const tabIndicatorProps = {
		style: { background: THEME_COLOUR_1 }
	};

	return (
		<Grid>
			<Box sx={{ width: "100%" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="myapp tabs"
					centered
					TabIndicatorProps={tabIndicatorProps}
					variant={"fullWidth"}
				>
					<CustomTab disableRipple value="invited" label="Invited" />
					<CustomTab disableRipple value="accepted" label="Accepted" />
				</Tabs>
			</Box>
			{value === "invited" && (
				<TabPanel>
					<InvitedTab />
				</TabPanel>
			)}
			{value === "accepted" && (
				<TabPanel>
					<AcceptedTab />
				</TabPanel>
			)}
		</Grid>
	);
};

export default TaskTabs;
