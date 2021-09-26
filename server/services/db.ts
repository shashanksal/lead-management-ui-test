const mysql = require("mysql2/promise");
const configFile = require("../config.ts");

const query = async (sql, params) => {
	const connection = await mysql.createConnection(configFile.db);
	const [results] = await connection.execute(sql, params);

	return results;
};

module.exports = {
	query
};
