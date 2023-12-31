const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
	{
		description: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
