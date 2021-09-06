import './Preview.css';
import React from "react";
import app from "../../../service/app";

class Preview extends React.Component {
  render() {
    app.updateName("Preview");
    return (
      <div className="Preview">
        <span>preview</span>
      </div>
    );
  }
}

export default Preview;
