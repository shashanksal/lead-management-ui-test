import React from "react";

//Material UI Components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Styles
import { styled } from "@mui/material/styles";

// Custom components import
import Tabs from "../TaskTabs";

import { THEME_COLOUR_2 } from "../../utils/constants";

const BackgroundPaper = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	color: theme.palette.text.secondary,
	height: "100%",
	backgroundColor: THEME_COLOUR_2
}));

const MainBody = () => {
	return (
		<Container maxWidth="md">
			<Box m={1}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						{/* <Box
							sx={{
								width: "100%",
								height: "100%"
							}}
						> */}
						<BackgroundPaper elevation={0}>
							<Tabs />
						</BackgroundPaper>
						{/* </Box> */}
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default MainBody;
