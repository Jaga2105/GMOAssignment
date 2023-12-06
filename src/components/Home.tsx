import { Box } from "@mui/material"
import PostGrid from "./PostGrid"

const Home = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <PostGrid/>
    </Box>
  )
}

export default Home