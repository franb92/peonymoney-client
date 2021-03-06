import React from "react";
import { BrowserRouter as Router, Switch, Route }from
"react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateProjectPage from "./pages/CreateProject";

function App() {
return (
  <Router>
  <div>
  <Nav />
  
  <Switch>
      <Route path="/project/:id">
      <ProjectPage />
      </Route>
      <Route exact path="/createprojectpage">
        <CreateProjectPage />
      </Route>
      <Route path="/login">
      <LoginPage />
      </Route>
      <Route path="/">
      <HomePage />
      </Route>
  </Switch>
  </div>
  </Router>
  );
}

export default App;
