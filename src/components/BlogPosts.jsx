import React from "react";
import api from "./api";
import { Formik, Form,  Field} from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const response = await api.get("/articles");
    setPosts(response.data);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const initialValues = {
    title: "",
    author: "",
    content: "",
  };

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    author: Yup.string()
      .min(10, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    content: Yup.string()
      .min(10, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),
    // date: Yup.string().required(),
  });

  return (
    <Row>
      <Col sm={12} className="m-2">
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            if (!values.title || !values.author || !values.content) {
              return;
            }
            try {
              const response = await api.post("/articles", values);
              console.log(response);
              if (response.status === 201) {
                // fetchBlogPosts();
                alert("Post created successfully");
              }
            } catch (error) {
              if (error.response) {
                return alert(error.response.data);
              } else {
                alert(error);
              }
            }
          }}
        >
          {({ values, errors, touched }) => (
            <Form className=" row g-3 align-items-center justify-content-center w-50 m-auto">
              <div className=" col-md-12">
                <label htmlFor="title">Title</label>
                <Field
                  className="w-100"
                  type="text"
                  name="values.title"
                  arial-label="title"
                />
                {touched.title && errors.title && (
                  <span className=" text-danger ">{errors.title}</span>
                )}
              </div>

              <div className=" col-md-12 ">
                <label htmlFor="title">Description</label>
                <Field className="w-100" type="text" name="author" />
                {touched.author && errors.author && (
                  <span className="text-danger">
                    {errors.author}
                  </span>
                )}
              </div>

              <div className="col-md-12  ">
                <label htmlFor="content">Content</label>
                <div>
                  <Field type="text" name="values.content" className="w-100" />
                  {touched.content && errors.content && (
                    <span className="text-danger">{errors.content}</span>
                  )}
                </div>
              </div>

              <div className="col-12 mt-4 d-flex-md justify-content-end-md">
                <Button type="submit" className="outline-primary  w-100">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default BlogPosts;
