/**
 * Native date convert to Month Day @ Time <12 hours> format
 * @param {String} date Date to be converted
 */
export const getInvitedDateFormat = date => {
	const dateObject = new Date(date);
	const dateString =
		dateObject.toLocaleString("default", { month: "long" }) + " " + dateObject.getDate();
	const timeString = getTweleveHourTimeString(dateObject);
	return dateString + " @ " + timeString;
};

/**
 * Native date convert to Month Day Year @ Time <12 hours> format
 * @param {String} date Date to be converted
 */
export const getAcceptedDateFormat = date => {
	const dateObject = new Date(date);
	const dateString =
		dateObject.toLocaleString("default", { month: "long" }) +
		" " +
		dateObject.getDate() +
		" " +
		dateObject.getFullYear();
	const timeString = getTweleveHourTimeString(dateObject);
	return dateString + " @ " + timeString;
};

const getTweleveHourTimeString = dateObject => {
	return dateObject
		.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true
		})
		.toLowerCase();
};
