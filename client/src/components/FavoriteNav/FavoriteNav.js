import "./FavoriteNav.css";

const SideNav = ({ onSelection }) => {
  const handleEvent = (e) => {
    onSelection(e.target.id);
  };

  return (
    <div id="side-nav">
      <button onClick={handleEvent} id="21814628">
        Australia
      </button>
      <button onClick={handleEvent} id="22017925">
        Tahiti
      </button>
      <button onClick={handleEvent} id="705928670150467585">
        World
      </button>
      <button onClick={handleEvent} id="36054262">
        London
      </button>
      <button onClick={handleEvent} id="17616232">
        Italy
      </button>
    </div>
  );
};

export default SideNav;
