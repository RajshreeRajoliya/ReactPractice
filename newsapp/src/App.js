import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { News } from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize = 12;
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({ progress:progress})
  }
  render() {
    return (
      <div >
        <Router>

          <NavBar />
          <LoadingBar
        color='#008080'
        height={4}
        progress={this.state.progress}
        // onLoaderFinished={() => this.setProgress(0)}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="general"
                  pageSize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="business"
                  pageSize={this.pagesize}
                  country="in"
                  category="business"
                />
              }
            ></Route>

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="entertainment"
                  pageSize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>

            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="general"
                  pageSize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="sports"
                  pageSize={this.pagesize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>

            <Route
              exact
              path="/healthscience"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="health"
                  pageSize={this.pagesize}
                  country="in"
                  category="health"
                />
              }
            ></Route>

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  
                  key="technology"
                  pageSize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
