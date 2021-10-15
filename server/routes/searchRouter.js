require("dotenv").config();
const express = require("express");
const searchRouter = express.Router();
const axios = require("axios");

const token = {
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
};

const SEARCH_URL = "https://api.twitter.com/1.1/statuses/user_timeline.json?";
const SEARCH_PARAMETERS = "tweet_mode=extended&count=10&screen_name=";

searchRouter.get("/", (req, res) => {
  const userQuery = req.query.searchParam;
  axios
    .get(`${SEARCH_URL}${SEARCH_PARAMETERS}${userQuery}`, token)
    .then(async (response) => {
      const tweetData = await response.data;
      res.send(tweetData);
    })
    .catch(error => {
      res.status(error.response.status).send({
        error: error.response.statusText,
      });
    });
});

module.exports = searchRouter;
