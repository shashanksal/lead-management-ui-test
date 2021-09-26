require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();
const port = 8080;

const jobsRouter = require("../routes/jobs.ts");

const corsOptions = {
	origin: "http://localhost:3000"
};

server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(
	bodyParser.urlencoded({
		extended: true
	})
);

server.get("/", (req, res) => {
	res.json({ message: "ok" });
});

server.use("/jobs", jobsRouter);

/* Error handler middleware */
server.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

server.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
