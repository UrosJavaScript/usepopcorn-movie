import React from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./components/starRating";
// import "./index.css";
// import App from "./App";

const id = document.getElementById("root");
const root = ReactDOM.createRoot(id);

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" size={20} className="test" defaultRating={3} />
  </React.StrictMode>
);
