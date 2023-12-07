// import React from 'react'

import Register from "./components/Register";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Register />
      <ToastContainer />
    </div>
  );
};

export default App;
