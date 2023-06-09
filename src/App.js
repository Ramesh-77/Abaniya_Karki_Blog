import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./component/Routes/Container";
import Footer from "./component/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Container />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
