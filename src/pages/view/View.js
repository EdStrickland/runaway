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
      <Route path={process?.env?.NODE_ENV === 'development' ? '/view/table' : '/runaway/view/table'} pathname="table" exact={true} component={ViewTable} />
      <Route path={process?.env?.NODE_ENV === 'development' ? '/view/preview' : '/runaway/view/preview'} pathname="preview" exact={true} component={ViewPreview} />
      <Route path={process?.env?.NODE_ENV === 'development' ? '/view/process' : '/runaway/view/process'} pathname="process" exact={true} component={ViewProcess} />
      <Redirect from="/view" to={process?.env?.NODE_ENV === 'development' ? '/view/table' : '/runaway/view/table'} />
    </BrowserRouter>
  );
}

export default View;
