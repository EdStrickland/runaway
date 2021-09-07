
import React from "react";
import app from "./service/app";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Form from "./pages/form/Form";
import View from "./pages/view/View";
import './App.css';


class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "app"
    }
    app.register(this.updateName.bind(this));
  }

  updateName(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppTitle />
        <Route path={process?.env?.NODE_ENV === 'development' ? '/form' : '/runaway/form'} pathname="form" exact={true} component={Form} />
        <Route path={process?.env?.NODE_ENV === 'development' ? '/view' : '/runaway/view'} pathname="view" component={View} />
        <Redirect from={process?.env?.NODE_ENV === 'development' ? '/' : '/runaway/'} to={process?.env?.NODE_ENV === 'development' ? '/form' : '/runaway/form'} />
      </BrowserRouter>
    );
  }
}

export default App;