import { Avatar, Box, Button, CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid, GridSortModel, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useGetProductQuery } from "../Redux/api/productApi";
import ProductList from "../Component/Product/ProductList";

const Product = () => {

  return (
    <Box
      sx={{
        marginLeft: "300px!important",
        height: "85vh",
        marginTop: "60px!important",
        padding: "15px",
        width: "100%",
      }}
    >
    <ProductList/>
    </Box>
  );
};

export default Product;
