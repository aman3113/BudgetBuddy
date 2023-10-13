const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema(
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

const Savings = mongoose.model("Savings", savingsSchema);

module.exports = Savings;
