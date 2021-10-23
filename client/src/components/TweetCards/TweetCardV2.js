import "./TweetCard.css";

const TweetCardV2 = ({ tweetData_v2 }) => {
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
          <div id="tweet-media-v2">
            {tweet.mediaType === "photo" ? (
              <img src={tweet.pic_url} alt="" />
            ) : (
              <img src={tweet.vid_url} alt="" />
            )}
          </div>
          <div id="tweet-date">Date: {tweet.created_date} </div>
        </div>
      ))}
    </div>
  );
};

export default TweetCardV2;
