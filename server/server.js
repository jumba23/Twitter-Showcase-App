require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const favoritesRouter = require("./routes/favoritesRouter");
const searchRouter = require("./routes/searchRouter");
const port = process.env.PORT || 4000;

app.use("/api", favoritesRouter);
app.use("/api", searchRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
