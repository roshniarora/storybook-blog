import React from "react";
import "./TextArea.css";

const TextArea = (props) => {
  const { size = "medium", children, ...rest } = props;
  return <textarea className={`textArea ${size}`} {...rest} />;
};

export default TextArea;
