import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import Hero from "../../components/Hero";

function Addpage(item) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  }

  async function postItem(item) {
    await fetch("http://localhost:3000/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    });
    await getData();
  }

  async function deleteItem(id) {
    await fetch(`http://localhost:3000/${id}`, {
      
      method: "DELETE",
      body: JSON.stringify(),
    });
    await getData();
  }

  return (
    <>
      <Hero />
      <Formik
        initialValues={{ name: "", desc: "", icon: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
          icon: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            postItem(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="formAdd">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc">Description</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />

          <label htmlFor="icon">Icon</label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((x) => (
            <tr key={x._id}>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <button onClick={()=>deleteItem(x._id)}>X</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Addpage;
