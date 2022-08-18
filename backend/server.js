const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const app = express();

//next 2 lines of middleware enable us to read json data from body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/something", require("./routes/someRoutes"));
app.use("/api/bee", require("./routes/beeRoutes"));
app.use("/api/keeper", require("./routes/keeperRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
