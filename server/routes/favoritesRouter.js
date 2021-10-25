require("dotenv").config();
const express = require("express");
const favoritesRouter = express.Router();
const axios = require("axios");

const token = {
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
};

const SEARCH_URL = "https://api.twitter.com/2/users/";
const SEARCH_PARAMETERS =
  "/tweets?expansions=attachments.media_keys,author_id&tweet.fields=text,attachments,created_at&user.fields=name,username,profile_image_url&media.fields=media_key,url,preview_image_url";

favoritesRouter.get("/favorites", (req, res) => {
  const userId = req.query.userId;
  axios
    .get(`${SEARCH_URL}${userId}${SEARCH_PARAMETERS}`, token)
    .then(async (response) => {
      const tweetData = await response.data;
      res.send(tweetData);
    });
});

module.exports = favoritesRouter;
