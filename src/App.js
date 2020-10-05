import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddNewPost from "./components/AddNewPost/AddNewPost";
import Search from "./components/Search/Search";
import { search, searchEmpty } from "./Redux/Actions/postAction";

function App(props) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      props.searchEmpty();
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.search(e.target.value);
  };

  const handleSearch = () => {
    setSearch("");
    props.searchEmpty();
  };

  return (
    <div className="App">
      <div className="search_container">
        <Search
          onChange={handleChange}
          value={search}
          deleteSearch={search ? handleSearch : null}
        />
        <ul>
          {props.postSearch
            ? props.postSearch.map((ele) => <li>{ele.title}</li>)
            : null}
        </ul>
      </div>
      <AddNewPost />
    </div>
  );
}
const mapStateToProps = (state) => ({
  postSearch: state.AddPost.postSearch,
});
export default connect(mapStateToProps, { search, searchEmpty })(App);
