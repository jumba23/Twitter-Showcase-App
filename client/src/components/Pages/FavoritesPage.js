import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import TweetCardV2 from "../TweetCards/TweetCardV2";
import FavoriteNav from "../FavoriteNav/FavoriteNav";

const FavoritesPage = () => {
  const [userId, setUserId] = useState("");
  const [favoriteTweetData, setFavoriteTweetData] = useState([]);

  useEffect(() => {
    if (userId !== "") {
      gettweetData();
    }
  }, [userId]);

  const gettweetData = async () => {
    await axios
      .get("/api/favorites", { params: { userId: userId } })
      .then((response) => {
        setFavoriteTweetData(response.data);
      });
  };

  const handleEvent = (newUserId) => {
    setUserId(newUserId);
  };

  return (
    <div id="favorite-page">
      <FavoriteNav onSelection={handleEvent} />
      <TweetCardV2 tweetData_v2={favoriteTweetData} />
    </div>
  );
};
export default FavoritesPage;
