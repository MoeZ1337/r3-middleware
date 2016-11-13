import React from 'react';
import { Route } from 'react-router';

import { App } from './components';
import { AlertPage, MonitorPage, LogPage, DebuggerPage } from './components';
// import { Tool1, Tool2, Tool3 } from './components';

const routes = (
  <Route path="/" component={App}>
    <Route path="alerts" component={AlertPage}/>
    <Route path="monitors" component={MonitorPage}/>
    <Route path="logs" component={LogPage}/>
    <Route path="debugger" component={DebuggerPage}/>
  </Route>
);

export default routes;
