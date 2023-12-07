import { useEffect, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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
    width: 450,
  },
];

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
    <Box sx={{width: '70%'}}>
      <Typography align="center" mb={2} variant="h5">
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
