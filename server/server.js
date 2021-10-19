require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const favoritesRouter = require("./routes/favoritesRouter");
const searchRouter = require("./routes/searchRouter");
const port = process.env.PORT || 4000;

app.use("/favorites", favoritesRouter);
app.use("/search", searchRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname, "build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
