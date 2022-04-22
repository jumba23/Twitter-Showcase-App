import { useState } from "react";
import { FaSearch as Search } from "react-icons/fa";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [searchParam, setSearchParam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParam !== "") {
      props.handleSubmit(searchParam);
    }
  };

  const handleChange = (e) => setSearchParam(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-param"
        placeholder=" Search by @user or keyword..."
        autoComplete="off"
        required
        onChange={handleChange}
        value={searchParam}
      />
      <button id="search-button" type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
