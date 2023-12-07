import { Box } from "@mui/material";
import PostGrid from "./PostGrid";
import CheckboxAccordion from "./CheckboxAccordion";

const Home = () => {
    
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PostGrid />
      </Box>
      <CheckboxAccordion />
    </Box>
  );
};

export default Home;
