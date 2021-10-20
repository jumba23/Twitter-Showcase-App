import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import TweetCardV1 from "../TweetCards/TweetCardV1";
import SearchForm from "../SearchForm/SearchForm.js";

const SearchPage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [tweetData, settweetData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchParam) {
      gettweetData();
      setError("");
    }
  }, [searchParam]);

  useEffect(() => {
    filterData();
  }, [tweetData]);

  const gettweetData = async () => {
    await axios
      .get("/search", { params: { searchParam } })
      .then((response) => {
        settweetData(response.data);
      })
      .catch((error) => {
        if (error.response.status) {
          setError(error.response.status);
        }
      });
  };

  const filterData = () => {
    let array = [];
    if (!error) {
      tweetData.forEach((tweet) => {
        array.push({
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
        });
      });
    }
    setFinalData(array);
  };

  const handleSubmit = (newSearchParam) => {
    setSearchParam(newSearchParam);
    setFinalData([]);
  };

  return (
    <div id="search-page">
      <SearchForm handleSubmit={handleSubmit} />
      {error !== "" ? (
        <div id="error">
          Please check the screen name you entered and try again
        </div>
      ) : null}
      <TweetCardV1 tweetData_v1={finalData} />
    </div>
  );
};

export default SearchPage;
