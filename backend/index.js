require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const cookieSession = require("cookie-session");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const apodRoutes = require("./routes/apodRoutes")

// database connection
connection();


// middlewares
app.use(express.json());
app.use(cors());
app.use(
	cookieSession({
		name: "session",
		keys: ["vikaschhonkar1"],
		maxAge: 24 * 60 * 60 * 100,
	})
);



// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/apod", apodRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
