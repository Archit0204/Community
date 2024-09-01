const express = require("express");
const dbConnect = require("./config/Database");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");

const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

dbConnect();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", postRouter);

app.listen(PORT, () => {
    console.log("App is running");
})