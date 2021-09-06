import './Form.css';

import React from "react";
import { Link } from "react-router-dom";
import app from "../../service/app";


class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <Link to="/view">view</Link>
      </div>
    );
  }
}

export default Form;
