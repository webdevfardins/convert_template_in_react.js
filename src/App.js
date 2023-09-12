import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
        <Header title="About us" img="about-bg.jpg" />
          <About/>
        </Route>
        <Route path="/">
      <Header title="Blogger" img="home-bg.jpg" />
        <Home />
        </Route>
        </Switch>
        <About />
      <Footer />
    </Router>
  );
}

export default App;
