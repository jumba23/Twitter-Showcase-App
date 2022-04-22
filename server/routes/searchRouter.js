require("dotenv").config();
const moment = require("moment");
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

searchRouter.get("/search", (req, res) => {
  const userQuery = req.query.searchParam;
  axios
    .get(`${SEARCH_URL}${SEARCH_PARAMETERS}${userQuery}`, token)
    .then(async (response) => {
      const tweetData = await response.data;

      const newTweetData = tweetData.map((tweet) => {
        return {
          id: tweet.id,
          profile_pic: tweet.user.profile_image_url_https,
          name: tweet.user.name,
          userName: tweet.user.screen_name,
          text: tweet.full_text,
          likes: tweet.favorite_count,
          retweet: tweet.retweet_count,
          created_date: moment(tweet.created_at).calendar(),
          pic_url: tweet.entities.media
            ? tweet.entities.media[0].media_url_https
            : "",
        };
      });
      res.send(newTweetData);
    })
    .catch((error) => {
      res.status(error.response.status).send({
        error: error.response.statusText,
      });
    });
});

module.exports = searchRouter;
