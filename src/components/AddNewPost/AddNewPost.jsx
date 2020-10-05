import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import Input from "../Input/Input";
import { addPost } from "../../Redux/Actions/postAction";

import Button from "../Button/Button";

import styled from "styled-components";
import Published from "../PublishedPost/PublishedPost";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  text: Yup.string().required("Required"),
});

function AddNewPost(props) {
  const [newPost, setNewPost] = useState(true);
  const [published, setPublished] = useState(false);

  const handleNewpost = () => {
    setNewPost(true);
    setPublished(false);
  };

  const handlePublished = () => {
    setPublished(true);
    setNewPost(false);
  };

  const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;

  const TextArea = styled.textarea`
    border: none;
    padding-left: 0.5rem;
    border-bottom: 2px solid gray;
    width: 50%;
    margin-bottom: 1.5rem;
  `;

  return (
    <>
      <hr />
      <Div>
        <Button className="button secondary small" onClick={handleNewpost}>
          New Post
        </Button>
        <Button className="button secondary small" onClick={handlePublished}>
          Published
        </Button>
      </Div>
      <hr />
      {newPost ? (
        <Formik
          initialValues={{ title: "", text: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            props.addPost(values);
            resetForm();
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <div>
                  <Field
                    name="title"
                    placeholder="Title"
                    type="text"
                    as={Input}
                  />
                  <ErrorMessage
                    name="title"
                    render={(msg) => (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          lineHeight: "2",
                          //   marginTop: "5px",
                        }}
                      >{`*${msg}`}</div>
                    )}
                  />
                </div>
              </div>
              <div>
                <div>
                  <TextArea
                    name="text"
                    placeholder="Text"
                    type="text"
                    onChange={handleChange}
                    value={values.text}
                    rows="10"
                  />
                  <ErrorMessage
                    name="text"
                    render={(msg) => (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          lineHeight: "2",
                        }}
                      >{`*${msg}`}</div>
                    )}
                  />
                </div>
              </div>

              <div>
                <Button type="submit">PUBLISH</Button>
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
      {published ? (
        props.post.length === 0 ? (
          <h1>Oops no post yet!!!</h1>
        ) : (
          props.post.map((ele) => (
            <Published title={ele.title} text={ele.text} />
          ))
        )
      ) : null}
    </>
  );
}

const mapStateToPorps = (state) => ({
  post: state.AddPost.post,
});

export default connect(mapStateToPorps, { addPost })(AddNewPost);
