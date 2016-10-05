import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import WelcomePage from './WelcomePage';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Resume from './Resume';
import './index.css';
import '../node_modules/normalize.css/normalize.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomePage} />
      <Route path="/about" component={AboutMe} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </Route>
  </Router>
  ), document.getElementById('root'));