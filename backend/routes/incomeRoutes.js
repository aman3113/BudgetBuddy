const express = require("express");
const incomeRouter = express.Router();
const Income = require("../models/Income"); // Assuming you have an Income model

// Route to fetch income data
incomeRouter.get("/", async (req, res) => {
	try {
		const incomeData = await Income.find(); // Fetch income data from MongoDB
		res.json(incomeData);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch income data", error: err.message });
	}
});

incomeRouter.post("/", async (req, res) => {
	const incomeData = req.body;
	try {
		const savedIncome = await Income.create(incomeData);
		res.json({ message: "Income entry added successfully", data: savedIncome });
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to add income entry", error: err.message });
	}
});

module.exports = incomeRouter;
