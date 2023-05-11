import { Avatar, Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetProductQuery } from "../../Redux/api/productApi";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 6,
    page: 0,
  });

  const [sortModel, setSortModel] = useState([
    {
      field: "createdAt",
      sort: "desc",
    },
  ]);

  const { data, isLoading, isFetching, isError, error } = useGetProductQuery({
    pageSize: paginationModel.pageSize,
    page: paginationModel.page,
    sortby_column: sortModel[0]?.field,
    sort_type: sortModel[0]?.sort,
    search,
  });

  const handleSortChange = (model) => {
    if (JSON.stringify(model) !== JSON.stringify(sortModel)) {
      console.log(model);
      setSortModel(model);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product_media",
      headerName: "Image",
      renderCell: (params) => {
        return (
          <>
            <Avatar
              src={`http://localhost:3000/${params.value[0]?.name}`}
              sx={{ width: 80, height: 80 }}
            />
          </>
        );
      },
    },
    { field: "title", headerName: "Title" },
    { field: "subtitle", headerName: "Subtitle" },
    { field: "price", headerName: "Price" },
    {
      field: "manufacturer_name",
      headerName: "Manufacturer Name",
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      width: "100%",
      renderCell: (params) => {
        console.log(params);
        return (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ marginLeft: "5px" }}
              component={Link}
              to={"/product/add"}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              sx={{ marginLeft: "5px" }}
              component={Link}
              to={`/product/view/${params.row.id}`}
            >
              View
            </Button>
            <Button
              variant="contained"
              sx={{ marginLeft: "5px" }}
              color="error"
              component={Link}
              to={`/product/edit/${params.row.id}`}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 1, marginBottom: "15px", marginTop: "15px" }}
      >
        <Button size="small">Add Product</Button>
      </Stack>
      <DataGrid
        autoHeight
        rows={data?.data?.result || []}
        rowCount={data?.data?.total_count || 0}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: paginationModel.page,
              pageSize: paginationModel.pageSize,
            },
          },
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        onSortModelChange={handleSortChange}
        sortingMode="server"
        pageSizeOptions={[5, 10]}
        getRowHeight={() => "auto"}
        sx={{
          "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "8px" },
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            py: "15px",
          },
          "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
            py: "22px",
          },
        }}
        loading={isLoading}
      />
    </>
  );
};

export default ProductList;
