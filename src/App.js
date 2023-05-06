import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./component/Routes/Container";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Container />
      </div>
    </BrowserRouter>
  );
};

export default App;
