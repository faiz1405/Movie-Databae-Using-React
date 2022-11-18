import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./my-style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// "https://api.themoviedb.org/3/discover/movie?api_key=7eece5ec623d04d048881febf586390d&certification_country=US&certification.lte=PG-13";
