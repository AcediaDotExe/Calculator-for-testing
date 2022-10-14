import React from 'react';
import Calculator from "./components/Calculator";
import {Provider} from "react-redux";
import {store} from "./store";
import {Grid} from "@mui/material";

function App() {
  return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Calculator/>
        </Grid>
  );
}

export default App;
