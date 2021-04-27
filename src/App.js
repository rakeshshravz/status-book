import React, { Fragment } from "react";
import "./App.css";
import Input from "./InputComponents/Input/index";
import Button from "./InputComponents/Button/index";
import { MasterContainer } from "./style";

function App() {
  return (
    <Fragment>
      <MasterContainer>
        <Input placeholder="Placeholder" />
        <br />
        <br />
        <br />
        <Button />
      </MasterContainer>
    </Fragment>
  );
}

export default App;
