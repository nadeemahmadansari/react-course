import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    React Course using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
