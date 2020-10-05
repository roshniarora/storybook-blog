import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import "./Search.css";

const Search = (props) => {
  const { children, ...rest } = props;
  return (
    <div class="input-container">
      <AiOutlineSearch className="icon" />
      <input
        className={`input-field `}
        type="text"
        placeholder="Search"
        {...rest}
      />
      {props.deleteSearch ? (
        <AiOutlineCloseCircle
          className="iconDelete"
          onClick={props.deleteSearch}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
