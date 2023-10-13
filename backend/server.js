require("./utils/db");
require("./models/User");
require("./models/Inventory");
require("./models/Sales");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const requiresAuth = require("./middlewares/requiresAuth");

const app = express();

//Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

//Routers
app.use("/v1/auth", authRouter);

app.get("/", (req, res) => {
	res.send("Hello this is a Budget Buddy API by Aman.");
});

//server starting
app.listen(3000, () => {
	console.log("server started at port 3000...");
});
