import './Process.css';
import React from "react";
import app from "../../../service/app";

class Process extends React.Component {
  render() {
    app.updateName("Process");
    return (
      <div className="Process">
        <span>Process</span>
      </div>
    );
  }
}

export default Process;
