import React from "react";
import TextArea from "./TextArea";

export default {
  title: "Form/TextArea",
  component: TextArea,
};
export const Small = () => <TextArea size="small" />;
export const Medium = () => <TextArea size="medium" />;
export const Large = () => <TextArea size="large" />;
