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

const AcceptedJobCard = props => {
	const {
		contact_name,
		category_name,
		created_at,
		description,
		id,
		name: suburb_name,
		postcode,
		price,
		contact_phone,
		contact_email
	} = props;

	const primaryFont = {
		style: {
			fontSize: "medium",
			fontWeight: "600",
			color: "#414141"
		}
	};
	return (
		<Box className="invited-card-box" sx={{ paddingBottom: 3 }}>
			<Card>
				<CardContentStyled>
					<Typography sx={{ fontSize: 20 }} color="#FFFFFF" component="div">
						<Box sx={{ padding: 1 }}>
							<ListItem>
								<ListItemAvatar>
									<UserAvatar size="48" name={contact_name.charAt(0)} color="#FF9E41" />
								</ListItemAvatar>
								<ListItemText
									primary={contact_name}
									secondary={getAcceptedDateFormat(created_at)}
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
										<div>
											{suburb_name} {postcode}
										</div>
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										<BusinessCenterIconStyled />
										<div>{category_name}</div>
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										JOB ID: {id}
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography sx={{ display: "inline-flex", color: "#909090" }} component="div">
										${price} Lead Invitation
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
							<div>{contact_phone}</div>
						</Typography>
						<Typography
							sx={{ display: "inline-flex", color: "#FF9E41", fontWeight: "600", m: "0px 8px" }}
							component="div"
							variant="body2"
						>
							<MailOutlineIconStyled />
							<div>{contact_email}</div>
						</Typography>
						<Typography
							sx={{ padding: "8px 0px" }}
							color="text.secondary"
							variant="body2"
							component="div"
						>
							{description}
						</Typography>
					</Box>
				</CardContentStyled>
			</Card>
		</Box>
	);
};

export default AcceptedJobCard;
