const express = require("express");
const cors = require("cors");
const main = require("./dbconnection"); // Ensure this points correctly
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const 
config({ path: "./config/config.env" });
const app = express();

app.use(
  cors({
    origin: [process.env.BACKEND_URL, process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
main();
module.exports = app;
