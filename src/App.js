import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.title = "TextUtils Dark Mode";
      showAlerts("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils Light Mode";
      showAlerts("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-3">
          {/* <Routes> */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlerts={showAlerts}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
