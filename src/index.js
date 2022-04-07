import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider, HistoryProvider, LikeProvider, PlaylistProvider, VideoProvider, WatchLaterProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <HistoryProvider>
            <LikeProvider>
              <PlaylistProvider>
                <WatchLaterProvider>
                  <App />
                </WatchLaterProvider>
              </PlaylistProvider>
            </LikeProvider>
          </HistoryProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
);
