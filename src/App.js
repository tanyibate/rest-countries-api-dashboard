import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ paddingTop: "60px" }} className="router-container">
          <NavBar />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/country">
              <Country />
            </Route>
            <Route path="/">
              <Countries />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
