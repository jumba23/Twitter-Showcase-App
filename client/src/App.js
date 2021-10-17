import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import SearchPage from "./components/Pages/SearchPage";
import FavoritesPage from "./components/Pages/FavoritesPage";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
