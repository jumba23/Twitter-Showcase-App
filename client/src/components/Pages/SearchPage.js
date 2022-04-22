import { useState } from "react";
import axios from "axios";
import TweetCardV1 from "../TweetCards/TweetCardV1";
import SearchForm from "../SearchForm/SearchForm.js";

const SearchPage = () => {
  const [tweetData, setTweetData] = useState([]);
  const [error, setError] = useState("");

  const getTweetData = async (searchParam) => {
    await axios
      .get("/api/search", { params: { searchParam: searchParam } })
      .then((response) => {
        console.log(response.data)
        setTweetData(response.data.data);
      })
      .catch((error) => {
        if (error.response.status) {
          setError(error.response.status);
        }
      });
  };

  const handleSubmit = (newSearchParam) => {
    if (newSearchParam) {
      getTweetData(newSearchParam);
      setError("");
    }
  };

  return (
    <div id="search-page">
      <SearchForm handleSubmit={handleSubmit} />
      {error !== "" ? (
        <div id="error">
          Please check the screen name you entered and try again
        </div>
      ) : null}
      <TweetCardV1 tweetData_v1={tweetData} />
    </div>
  );
};

export default SearchPage;
