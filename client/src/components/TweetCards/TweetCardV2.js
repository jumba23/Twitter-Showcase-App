import { useState } from "react";
import "./TweetCard.css";

const TweetCardV2 = ({ tweetData_v2 }) => {
  const [selectImgId, serSelectedImgId] = useState("");

  const handleEvent = (e) => {
    serSelectedImgId(e.target.src);
  };

  return (
    <div id="tweet-list-favs">
      {tweetData_v2.map((tweet) => (
        <div id="tweet-card" key={tweet.id}>
          <div id="user-info">
            <img
              id="user-profile-img"
              src={tweet.profile_pic}
              alt="Twitter user's profile"
            />
            <div id="user-name">{tweet.name}</div>
            <a
              href={`https://twitter.com/${tweet.userName}`}
              id="screen-name"
              rel="noreferrer"
              target="_blank"
            >
              @{tweet.userName}
            </a>
          </div>
          <div id="tweet-text">{tweet.text}</div>
          {tweet.mediaType === "photo" ? (
            <div id="tweet-media-v2">
              <a href="#photo1" onClick={handleEvent}>
                <img src={tweet.pic_url} alt="small" id="small-img" />
              </a>
              <a href="#" className="overlay" id="photo1">
                <img src={selectImgId} alt="large" id="large-img" />
              </a>
            </div>
          ) : (
            <div id="tweet-media-v2">
              <a href="#photo1" onClick={handleEvent}>
                <img src={tweet.vid_url} alt="small" id="small-img" />
              </a>
              <a href="#" className="overlay" id="large-image">
                <img src={selectImgId} alt="large" id="large-img" />
              </a>
            </div>
          )}
          <div id="tweet-date">Date: {tweet.created_date} </div>
        </div>
      ))}
    </div>
  );
};

export default TweetCardV2;
