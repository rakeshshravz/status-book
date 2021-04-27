import React, { Fragment } from "react";
import "./App.css";
import { MasterContainer } from "./style";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";

function App() {
  return (
    <Fragment>
      <MasterContainer>
        <Sidebar />
        <Main />
      </MasterContainer>
    </Fragment>
  );
}

export default App;
