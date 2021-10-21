import { FaSearch as Search } from "react-icons/fa";
import "./SearchForm.css";

const SearchForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const searchParam = document.getElementById("search-param").value;
    if (searchParam) {
      props.handleSubmit(searchParam);
      document.getElementById("search-param").value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="search-param"
        placeholder=" Search by @user or keyword..."
        autoFocus
        required
      />
      <button id="search-button" type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
