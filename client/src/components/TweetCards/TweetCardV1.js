import { FaRetweet as Retweet, FaHeart as Like } from "react-icons/fa";
import "./TweetCardV1.css";

const TweetCardV1 = ({ tweetData_v1 }) => {
  return (
    <div id="body">
      {tweetData_v1.map((tweet) => (
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
              rel="noreferrer"
              id="screen-name"
              target="_blank"
            >
              @{tweet.userName}
            </a>
          </div>
          <div id="tweet-text">{tweet.text} </div>
          {tweet.pic_url !== "" ? (
            <div id="tweet-media">
              <img src={tweet.pic_url} alt="" />
            </div>
          ) : null}
          <div id="tweet-metrics">
            <div id="tweet-like">
              <Like /> {tweet.likes}{" "}
            </div>
            <div id="tweet-retweet">
              {" "}
              <Retweet /> {tweet.retweet}
            </div>
          </div>
          <div id="tweet-date">Date: {tweet.created_date} </div>
        </div>
      ))}
    </div>
  );
};

export default TweetCardV1;
