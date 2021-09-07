import './Form.css';

import React from "react";
import { Link } from "react-router-dom";


class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <Link to={process?.env?.NODE_ENV === 'development' ? '/view' : '/runaway/view'}>view</Link>
      </div>
    );
  }
}

export default Form;
