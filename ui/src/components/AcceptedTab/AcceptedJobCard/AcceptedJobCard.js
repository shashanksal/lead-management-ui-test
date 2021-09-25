import React from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import UserAvatar from "react-user-avatar";

//Material UI Icons
import PinDropIcon from "@mui/icons-material/PinDrop";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { getAcceptedDateFormat } from "../../../utils/helper";

// Styles
import { styled } from "@mui/material/styles";

const PinDropIconStyled = styled(PinDropIcon)({
	color: "#414141",
	paddingTop: "4px"
});

const BusinessCenterIconStyled = styled(BusinessCenterIcon)({
	color: "#414141",
	paddingTop: "4px"
});

const PhoneIconStyled = styled(PhoneIcon)({
	color: "#414141",
	paddingTop: "4px"
});

const MailOutlineIconStyled = styled(MailOutlineIcon)({
	color: "#414141",
	paddingTop: "4px"
});

const CardContentStyled = styled(CardContent)({
	padding: 0,
	"&:last-child": {
		paddingBottom: 0
	}
});

const AcceptedJobCard = () => {
	const primaryFont = {
		style: {
			fontSize: "medium",
			fontWeight: "600",
			color: "#414141"
		}
	};
	return (
		<Box>
			<Card>
				<CardContentStyled>
					<Typography sx={{ fontSize: 20 }} color="#FFFFFF" component="div">
						<Box sx={{ padding: 1 }}>
							<ListItem>
								<ListItemAvatar>
									<UserAvatar size="48" name="Chris" color="#FF9E41" />
								</ListItemAvatar>
								<ListItemText
									primary="Chris"
									secondary={getAcceptedDateFormat("2021-09-23 12:04:22")}
									primaryTypographyProps={primaryFont}
								/>
							</ListItem>
						</Box>
					</Typography>
					<Divider variant="fullWidth" />
					<Typography variant="h5" component="div">
						<Box sx={{ padding: "8px 24px" }}>
							<Grid container spacing={1} wrap="nowrap">
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										<PinDropIconStyled />
										<div>Yandera 2112</div>
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										<BusinessCenterIconStyled />
										<div>Painter</div>
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										JOB ID: 12345
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										$49.00 Lead Invitation
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Typography>
					<Divider variant="fullWidth" />
					<Box sx={{ padding: "8px 24px" }}>
						<Typography
							sx={{ display: "inline-flex", color: "#FF9E41", fontWeight: "600", m: "0px 8px" }}
							component="div"
							variant="body2"
						>
							<PhoneIconStyled />
							<div>0400123432</div>
						</Typography>
						<Typography
							sx={{ display: "inline-flex", color: "#FF9E41", fontWeight: "600", m: "0px 8px" }}
							component="div"
							variant="body2"
						>
							<MailOutlineIconStyled />
							<div>abc@pqr.com</div>
						</Typography>
						<Typography
							sx={{ padding: "8px 0px" }}
							color="text.secondary"
							variant="body2"
							component="div"
						>
							Need to paint 2 aluminium windows
						</Typography>
					</Box>
				</CardContentStyled>
			</Card>
		</Box>
	);
};

export default AcceptedJobCard;
