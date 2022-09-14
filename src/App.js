/** @format */

import "./App.css";
import React from "react";
import Main from "./Page/Main/Main";
import SinglePost from "./Page/SinglePost/SinglePost";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={() => <Main />} />
        <Route path='/:id' exact component={() => <SinglePost />} />
      </Switch>
    </div>
  );
}

export default App;
