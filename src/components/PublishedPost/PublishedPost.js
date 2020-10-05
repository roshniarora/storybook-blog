import React from "react";
import "./PublishedPost.css";
import ReactMarkdown from "react-markdown";

const Published = (props) => {
  const { title, text } = props;
  return (
    <div class="card">
      <div class="container">
        <h4>
          <b>{title ? `Title: ${title}` : "Title"}</b>
        </h4>

        <ReactMarkdown source={text ? `Text: ${text}` : "Text"} />
      </div>
    </div>
  );
};

export default Published;
