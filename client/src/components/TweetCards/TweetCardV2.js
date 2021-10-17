import "./TweetCardV2.css";

const TweetCardV2 = ({ tweetData_v2 }) => {
  return (
    <div id="body">
      {tweetData_v2.map((tweet) => (
        <div id="tweet-card" key={tweet.id}>
          <div id="user-info">
            <img
              id="user-profile-img"
              src={tweet.profile_pic}
              alt="Twitter user's profile image"
            />
            <div id="user-name">{tweet.name}</div>
            <a
              href={`https://twitter.com/${tweet.userName}`}
              id="screen-name"
              target="_blank"
            >
              @{tweet.userName}
            </a>
          </div>
          <div id="tweet-text">{tweet.text}</div>
          <div id="tweet-media">
            {tweet.mediaType === "photo" ? (
              <img src={tweet.pic_url} />
            ) : (
              <img src={tweet.vid_url} />
            )}
          </div>
          <div id="tweet-date">Date: {tweet.created_date} </div>
        </div>
      ))}
    </div>
  );
};

export default TweetCardV2;