import "./App.css";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState("");
  const translateX = position === "left" ? "-300px" : "300px";

  const togglePosition = (position) => {
    setPosition(position);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "green",
          width: "700px",
          height: "350px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => togglePosition("left")}
          style={{
            width: 10,
            height: 100,
            backgroundColor: "#fff",
            position: "absolute",
            left: "10px",
            cursor: "pointer",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            width: 50,
            height: 50,
            backgroundColor: "#000",
            borderRadius: "50%",
            transform: position !== "" ? `translateX(${translateX})` : "",
            transition: "all 1s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "5px",
            height: "100%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              border: "5px solid #fff",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div
          onClick={() => togglePosition("right")}
          style={{
            width: 10,
            height: 100,
            backgroundColor: "#fff",
            position: "absolute",
            right: "10px",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
