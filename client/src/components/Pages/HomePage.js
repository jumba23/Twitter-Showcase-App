import Quote from "../Quotes/Quotes.js";

const Home = () => {
  return (
    <div id="home-page">
      <h2>Twitter World Travel Experience</h2>
      <h5>Here, you will be able to:</h5>
      <div id="home-page-text">
        <p>Check out your favorite accounts and their most recent tweets.</p>
        <p>
          Take a look at some of my favorite accounts and enjoy the journey!
        </p>
      </div>
      <Quote />
    </div>
  );
};

export default Home;
