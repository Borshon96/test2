import React from "react";
import "./App.css";
import Stepper from "./Stepper";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "100vh",
            width: "100vw",
            overflowY: "scroll",
          }}
        >
          <LoginPage />
          
        </div>
      </div>
    </div>
  );
}

export default App;
