import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
// function Test() {
//   const [rating, setRating] = useState(0);
//   return (
//     <>
//       <StarRating MaxRating={10} onSetRating={setRating} />;
//       <span>rating:{rating}</span>
//     </>
//   );
// }
root.render(
  // <React.StrictMode>
  <App />
  //   {/* <Test />
  //   <StarRating
  //     MaxRating={5}
  //     message={["Terrable", "Bad", "Average", "Good", "Amazing"]}
  //   />
  //   <StarRating
  //     MaxRating={3}
  //     message={["Bad", "Average", "Good"]}
  //     color="#2aa111"
  //     defaultRating={2}
  //     size={90}
  //     className="test"
  //   /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
