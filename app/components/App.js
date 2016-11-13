import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

const App = ({
  pushPath,
  children,
}) => (
  <div>
    <h1>3R Middleware</h1>
    <ul>
      <li><Link to="/alerts">Alerts</Link></li>
      <li><Link to="/monitors">Monitors</Link></li>
      <li><Link to="/logs">Logs</Link></li>
      <li><Link to="/debugger">Debugger</Link></li>
    </ul>
    <button onClick={() => pushPath('/alerts')}>Go to /alerts</button>
    { children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default connect(null, { pushPath })(App);
