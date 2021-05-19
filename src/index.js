import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import returnStoreAndPersistor from "./redux/store";

const { store, persistor } = returnStoreAndPersistor();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
