import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <Route path="/about">
              <About />
            </Route>
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
function Home() {
  return <div>Home</div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
