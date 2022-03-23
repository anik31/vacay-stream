import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
import { VideoProvider } from "./context/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <App />
      </VideoProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
);
