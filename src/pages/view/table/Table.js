import './Table.css';
import React from "react";
import app from "../../../service/app";

class Table extends React.Component {
  render() {
    app.updateName("Table");
    return (
      <div className="Table">
        <span>Table</span>
      </div>
    );
  }
}

export default Table;
