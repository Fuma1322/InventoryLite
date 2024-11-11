const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ErrorHandling = require("./middlewares/ErrorHandler");
const ApiError = require("./utils/ApiError"); // Add this line to import ApiError

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", require("./routes"));

app.use("*", (req, res) => {
    throw new ApiError(404, "page not founddd");
});

app.use(ErrorHandling);

module.exports = app;
