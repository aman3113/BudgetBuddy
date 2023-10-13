const express = require("express");
const savingsRouter = express.Router();
const Savings = require("../models/Savings"); // Assuming you have a Savings model

// Route to fetch savings data
savingsRouter.get("/", async (req, res) => {
	try {
		const savingsData = await Savings.find(); // Fetch savings data from MongoDB
		res.json(savingsData);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch savings data", error: err.message });
	}
});

// Route to add a new savings entry
savingsRouter.post("/", async (req, res) => {
	const savingsData = req.body;
	try {
		const savedSavings = await Savings.create(savingsData);
		res.json({
			message: "Savings entry added successfully",
			data: savedSavings,
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to add savings entry", error: err.message });
	}
});

module.exports = savingsRouter;
