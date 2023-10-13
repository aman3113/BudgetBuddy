const express = require("express");
const expenseRouter = express.Router();
const Expense = require("../models/Expense"); // Assuming you have an Expense model

// Route to fetch expenses data
expenseRouter.get("/", async (req, res) => {
	try {
		const expensesData = await Expense.find(); // Fetch expenses data from MongoDB
		res.json(expensesData);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to fetch expenses data", error: err.message });
	}
});

// Route to add a new expense entry
expenseRouter.post("/", async (req, res) => {
	const expenseData = req.body;
	try {
		const savedExpense = await Expense.create(expenseData);
		res.json({
			message: "Expense entry added successfully",
			data: savedExpense,
		});
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to add expense entry", error: err.message });
	}
});

module.exports = expenseRouter;
