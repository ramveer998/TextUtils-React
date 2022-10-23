import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const upperCaseHandler = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlerts("Converted to Upper Case", "success");
    } else {
      props.showAlerts("Enter something in the textbox below", "warning");
    }
  };
  const lowerCaseHandler = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlerts("Converted to Lower Case", "success");
    } else {
      props.showAlerts("Enter something in the textbox below", "warning");
    }
  };
  const clearTextHandler = () => {
    if (text !== "") {
      let newText = "";
      setText(newText);
      props.showAlerts("Clear Text", "success");
    } else {
      props.showAlerts("Enter something in the textbox below", "warning");
    }
  };

  const copyHandler = () => {
    if (text !== "") {
      let text = document.getElementById("myTextUtils");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlerts("Copy to Clipboard", "success");
    } else {
      props.showAlerts("Enter something in the textbox below", "warning");
    }
  };

  const extraSpacesHandler = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlerts("Remove extra space", "success");
    } else {
      props.showAlerts("Enter something in the textbox below", "warning");
    }
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" && "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myTextUtils"
            rows="8"
            placeholder="Enter Text Here"
            value={text}
            onChange={onChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" && "#343a40",
              color: props.mode === "dark" && "white",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-sm py-2 me-1"
          onClick={upperCaseHandler}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm py-2 me-1"
          onClick={lowerCaseHandler}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm py-2 me-1"
          onClick={clearTextHandler}
        >
          Clear Text
        </button>
        <button className="btn btn-primary btn-sm py-2 me-1" onClick={copyHandler}>
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm py-2 me-1"
          onClick={extraSpacesHandler}
        >
          Remove extra Spaces
        </button>
      </div>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" && "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} wpm reads</p>
        <h1>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
