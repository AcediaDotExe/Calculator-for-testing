import React from 'react';
import Calculator from "./components/Calculator";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
    <Provider store={store}>
      <Calculator/>
    </Provider>
  );
}

export default App;
