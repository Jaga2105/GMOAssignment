import { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Typography } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const columns: GridColDef[] = [
  { field: 'id', headerName: 'Post ID', width:90 },
  {
    field: 'userId',
    headerName: 'Usr Id',
    width: 90,
  },
  {
    field: 'title',
    headerName: 'Post Title',
    width: 300,
  },
  {
    field: 'body',
    headerName: 'Description',
    // type: 'number',
    width: 500,
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const PostGrid = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(posts);

  return (
    <Box sx={{ height: 400, width: '70%'}}>
      <Typography align="center" mb={4} variant="h4">
          Posts
        </Typography>
    <DataGrid
      rows={posts}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      autoHeight
    />
  </Box>
  );
};

export default PostGrid;
