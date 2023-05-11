import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Schema from "../validationSchema/userSchema";

function Register() {

  const formik = useFormik({
    validationSchema: Schema.register,
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    onSubmit: function (values) {
      alert(
        `You are registered! Name: ${values.firstName}. Email: ${values.email}. password: ${values.password}`
      );
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          maxWidth: "300px",
          margin: "auto",
          backgroundColor: "white",
          position: "relative",
          top: "20%",
        }}
      >
        <h2>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            type="text"
            fullWidth
            sx={{ mt: "1rem" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={ (formik.touched.firstName &&formik.errors.firstName) ? true : false}
            helperText={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : ""
            }
            /* {formik.touched.email && formik.errors.email ? error="true" : error="false" } */
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            sx={{ mt: "1rem" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={ ( formik.touched.email && formik.errors.email ) ? true : false}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            sx={{ mt: "1rem" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={ ( formik.touched.password && formik.errors.password ) ? true : false}
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: "1rem" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
