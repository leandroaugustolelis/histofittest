import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
