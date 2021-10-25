import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import TweetCardV2 from "../TweetCards/TweetCardV2";
import FavoriteNav from "../FavoriteNav/FavoriteNav";

const FavoritesPage = () => {
  const [tweetData, settweetData] = useState([]);
  const [tweetIncludesMediaArray, setTweetIncludesMediaArray] = useState([]);
  const [tweetUserInfo, setTweetUserInfo] = useState({});
  const [userId, setUserId] = useState("");
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    if (userId !== "") {
      gettweetData();
    }
  }, [userId]);

  useEffect(() => {
    filterData();
  }, [tweetIncludesMediaArray, tweetUserInfo]);

  const gettweetData = async () => {
    await axios
      .get("/favorites", { params: { userId: userId } })
      .then((response) => {
        settweetData(response.data.data);
        setTweetIncludesMediaArray(response.data.includes.media);
        setTweetUserInfo(response.data.includes.users[0]);
      });
  };

  const filterData = () => {
    let array = [];
    tweetData.forEach((tweet) => {
      if (!tweet.attachments) {
        return;
      } else {
        tweetIncludesMediaArray.forEach((e) => {
          if (e.media_key === tweet.attachments.media_keys[0]) {
            array.push({
              id: tweet.id,
              profile_pic: tweetUserInfo.profile_image_url,
              name: tweetUserInfo.name,
              userName: tweetUserInfo.username,
              text: tweet.text,
              created_date: moment(tweet.created_at).calendar(),
              mediaType: e.type,
              pic_url: e.url,
              vid_url: e.preview_image_url,
            });
          }
        });
      }
    });
    setFinalData(array);
  };

  const handleEvent = (newUserId) => {
    setUserId(newUserId);
  };

  return (
    <div id="favorite-page">
      <FavoriteNav onSelection={handleEvent} />
      <TweetCardV2 tweetData_v2={finalData} />
    </div>
  );
};
export default FavoritesPage;
