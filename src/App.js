
import React from "react";
import app from "./service/app";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import Form from "./pages/form/Form";
import View from "./pages/view/View";
import './App.css';

class App extends React.Component {
  routeName = "app"

  constructor(props) {
    super(props);
    app.register(this.updateName.bind(this));
  }

  updateName(name) {
    this.routeName = name;
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>{this.routeName}</h1>
        </div>
        <Route path="/form" pathname="form" exact={true} component={Form} />
        <Route path="/view" pathname="view" component={View} />
        <Redirect from="/" to="/form" />
      </BrowserRouter>
    );
  }
}

export default App;