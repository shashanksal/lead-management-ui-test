const db = require("./db.ts");
const helper = require("../helper.ts");
const cfg = require("../config.ts");

const getNewJobs = async (page = 1) => {
	const offset = helper.getOffset(page, cfg.listPerPage);
	const rows = await db.query(
		`SELECT 
            jobs.id, 
            jobs.contact_name, 
            jobs.created_at, 
            jobs.description, 
            jobs.price, 
            suburbs.name, 
            suburbs.postcode, 
            categories.name as category_name 
        FROM ${cfg.db.database}.jobs 
        INNER JOIN ${cfg.db.database}.suburbs 
            on jobs.suburb_id = suburbs.id 
        INNER JOIN ${cfg.db.database}.categories 
            on jobs.category_id = categories.id
        WHERE jobs.status = "new"
        LIMIT ?,?`,
		[offset, cfg.listPerPage]
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta
	};
};

const getAcceptedJobs = async (page = 1) => {
	const offset = helper.getOffset(page, cfg.listPerPage);
	const rows = await db.query(
		`SELECT 
            jobs.id, 
            jobs.contact_name, 
            jobs.created_at, 
            jobs.description, 
            jobs.price, 
            jobs.contact_phone, 
            jobs.contact_email, 
            suburbs.name, 
            suburbs.postcode, 
            categories.name as category_name 
        FROM ${cfg.db.database}.jobs 
        INNER JOIN ${cfg.db.database}.suburbs 
            on jobs.suburb_id = suburbs.id 
        INNER JOIN ${cfg.db.database}.categories 
            on jobs.category_id = categories.id
        WHERE jobs.status = "accepted"
        LIMIT ?,?`,
		[offset, cfg.listPerPage]
	);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta
	};
};

const updateJobStatusById = async (id, status) => {
	let message = "Error in updating jobs";
	const validStatus = ["new", "accepted", "declined"];
	if (!validStatus.includes(status)) {
		return "Invalid job status";
	}
	const query = `UPDATE ${cfg.db.database}.jobs SET status = ? WHERE id = ?`;
	const result = await db.query(query, [status, id]);

	if (result.affectedRows) {
		message = `Job ${id} updated successfully`;
	}
	return message;
};

module.exports = {
	getNewJobs,
	updateJobStatusById,
	getAcceptedJobs
};
