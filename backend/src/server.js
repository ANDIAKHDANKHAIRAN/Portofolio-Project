const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

const db = require("./config/db");

const heroRoute = require("./routes/heroRoute");
const projectRoute = require("./routes/projectRoute");
const messageRoute = require("./routes/messageRoute");
const certificateRoute = require("./routes/certificateRoute");
const skillRoute = require("./routes/skillRoute");
const testimonialsRoute = require("./routes/testimonialRoute");
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.use(heroRoute);
app.use(projectRoute);
app.use(messageRoute);
app.use(skillRoute);
app.use(testimonialsRoute);
app.use(certificateRoute);

app.get("/", (req, res) => {
  res.send("Selamat Datang Di Backend Portofolio");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
