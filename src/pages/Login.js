import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import Schema from "../validationSchema/userSchema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../Redux/slice/authSlice";
import { useLoginMutation } from "../Redux/api/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: Schema.login,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async function (values) {
      try {
        // getting api response if stats 200
        const result = await login({ ...values }).unwrap();
        // sending api data in state
        dispatch(addUserInfo(result));
        navigate("/");
        
      } catch (error) {
        // toasting api response error message
        toast.error(error.data.message, {
          position: "top-right",
          autoClose: 2000,
          theme: "light",
        });
      }
    },
  });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <ToastContainer />
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
        <h2>Sign In</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            sx={{ mt: "1rem" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            disabled={isLoading}
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
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            disabled={isLoading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: "1rem" }}
          > 
            { isLoading &&
              <CircularProgress color="inherit" size={"1rem"} sx={{ marginRight:"10px"}} />   
            }
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
