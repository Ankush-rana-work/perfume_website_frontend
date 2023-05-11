import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CircularProgress, Stack } from "@mui/material";
import PrivateRoute from "./Component/PrivateRoute";
import NavBar from "./pages/layouts/NavBar";
import Sidebar from "./pages/layouts/Sidebar";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Product = React.lazy(() => import("./pages/Product"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Stack direction="row" spacing={2}>
          <Routes>
            <Route
              exact
              path="/"
              name="Home screen"
              element={
                <PrivateRoute>
                  <NavBar />
                  <Sidebar />
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/product"
              name="Product"
              element={
                <PrivateRoute>
                  <NavBar />
                  <Sidebar />
                  <Product />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/home"
              name="Home screen"
              element={<Dashboard />}
            />
            <Route path="/login" name="Login Page" element={<Login />} />
            <Route
              path="/register"
              name="Registeration screen"
              element={<Register />}
            />
          </Routes>
        </Stack>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
