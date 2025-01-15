import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import MaskedInput from "./MaskedInput";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <MaskedInput mask={"9$$:$$1$$"} value={value} setValue={setValue} />
    </>
  );
};

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
