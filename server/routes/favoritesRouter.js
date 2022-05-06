require("dotenv").config();
const express = require("express");
const moment = require("moment");
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
      const tweetData = await response.data.data;
      const tweetMediaData = await response.data.includes.media;
      const tweetUserData = await response.data.includes.users[0];

      const tweetsWithAttachements = tweetData.filter((tweet) => {
        if (tweet.attachments) return {};
      });

      const removeExtraMediaKeys = tweetsWithAttachements.map((tweet) => {
        return tweet.attachments.media_keys[0];
      });

      const tweetsMedia = removeExtraMediaKeys.map((e) => {
        const matching = tweetMediaData.filter((tweet) => {
          const key = tweet.media_key;
          if (e === key) {
            return tweet;
          }
        });
        return matching;
      });

      const finalTweetData = tweetsWithAttachements.map((tweet, i) => {
        return {
          tweet: tweet.id,
          profile_pic: tweetUserData.profile_image_url,
          name: tweetUserData.name,
          userName: tweetUserData.username,
          text: tweet.text,
          created_date: moment(tweet.created_at).calendar(),
          mediaType: tweetsMedia[i][0].type,
          pic_url: tweetsMedia[i][0].url,
          vid_url: tweetsMedia[i][0].preview_image_url,
        };
      });
      res.send(finalTweetData);
    });
});

module.exports = favoritesRouter;
