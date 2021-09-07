import './View.css';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ViewTable from "./table/Table";
import ViewPreview from "./preview/Preview";
import ViewProcess from "./process/Process";

function View() {
  return (
    <BrowserRouter>
      <div className="View">
        <ul>
          <li><Link to="/view/table">Table</Link></li>
          <li><Link to="/view/preview">Preview</Link></li>
          <li><Link to="/view/process">Process</Link></li>
        </ul>
      </div>
      <Route path={process.env.NODE_ENV === 'development' ? '/view/table' : process.env.PUBLIC_URL + '/view/table'} pathname="table" exact={true} component={ViewTable} />
      <Route path={process.env.NODE_ENV === 'development' ? '/view/preview' : process.env.PUBLIC_URL + '/view/preview'} pathname="preview" exact={true} component={ViewPreview} />
      <Route path={process.env.NODE_ENV === 'development' ? '/view/process' : process.env.PUBLIC_URL + '/view/process'} pathname="process" exact={true} component={ViewProcess} />
      <Redirect from="/view" to="/view/table" />
    </BrowserRouter>
  );
}

export default View;