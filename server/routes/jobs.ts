const expressLib = require("express");
const app = expressLib.Router();
const jobsService = require("../services/jobs.ts");

/* GET all new Jobs. */
app.get("/new", async (req, res, next) => {
	try {
		res.json(await jobsService.getNewJobs(req.query.page));
	} catch (err) {
		console.error(`Error while getting new jobs `, err.message);
		next(err);
	}
});

/* GET all new Jobs. */
app.get("/accepted", async (req, res, next) => {
	try {
		res.json(await jobsService.getAcceptedJobs(req.query.page));
	} catch (err) {
		console.error(`Error while getting accepted jobs `, err.message);
		next(err);
	}
});

/* PUT jobs */
app.put("/:id", async (req, res, next) => {
	try {
		res.json(await jobsService.updateJobStatusById(req.params.id, req.body.status));
	} catch (err) {
		console.error(`Error while updating jobs`, err.message);
		next(err);
	}
});

module.exports = app;
