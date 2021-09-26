import React from "react";

//Material UI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import UserAvatar from "react-user-avatar";

//Material UI Icons
import PinDropIcon from "@mui/icons-material/PinDrop";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import { getInvitedDateFormat } from "../../../utils/helper";

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

const PrimaryButtonStyled = styled(props => <Button disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	borderRadius: "1px",
	color: "#FFF",
	backgroundColor: "#FF7A12",
	borderBottom: "2px solid #DF6A14",
	fontWeight: theme.typography.fontWeightBold,
	"&:hover": {
		backgroundColor: "#FF7A12"
	}
}));

const SecondaryButtonStyled = styled(props => <Button disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	borderRadius: "1px",
	color: "#6C6C6C",
	backgroundColor: "#EEEEEE",
	borderBottom: "2px solid #BEBEBE",
	fontWeight: theme.typography.fontWeightBold,
	"&:hover": {
		backgroundColor: "#EEEEEE"
	}
}));

const InvitedJobCard = props => {
	const {
		contact_name,
		category_name,
		created_at,
		description,
		id,
		name: suburb_name,
		postcode,
		price
	} = props;
	const contact_first_name = contact_name.split(" ")[0];
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
				<CardContent sx={{ padding: 0 }}>
					<Typography sx={{ fontSize: 20 }} color="#FFFFFF" component="div">
						<Box sx={{ padding: 1 }}>
							<ListItem>
								<ListItemAvatar>
									<UserAvatar size="48" name={contact_first_name.charAt(0)} color="#FF9E41" />
								</ListItemAvatar>
								<ListItemText
									primary={contact_first_name}
									secondary={getInvitedDateFormat(created_at)}
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
							</Grid>
						</Box>
					</Typography>
					<Divider variant="fullWidth" />
					<Typography
						sx={{ padding: "8px 24px" }}
						color="text.secondary"
						variant="body2"
						component="div"
					>
						{description}
					</Typography>
				</CardContent>
				<Divider variant="fullWidth" />
				<CardActions sx={{ padding: 0 }}>
					<Box sx={{ padding: "8px 16px", "& button": { m: 1 }, flexDirection: "column" }}>
						<PrimaryButtonStyled variant="contained">Accept</PrimaryButtonStyled>
						<SecondaryButtonStyled variant="contained">Decline</SecondaryButtonStyled>
						<Typography
							variant="subtitle2"
							component="div"
							sx={{
								display: "inline-flex",
								color: "#686868",
								fontWeight: "600",
								marginLeft: 2
							}}
						>
							{price} $
						</Typography>
						<Typography
							variant="subtitle2"
							component="div"
							sx={{
								display: "inline-flex",
								color: "#686868",
								fontWeight: "400",
								marginLeft: 1
							}}
						>
							Lead Invitation
						</Typography>
					</Box>
				</CardActions>
			</Card>
		</Box>
	);
};

export default InvitedJobCard;
