import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';

import Home from 'containers/Home/Home';
import Contact from 'containers/Contact/Contact';
import NotFound from 'containers/NotFound/NotFound';

import { menu } from 'mock-data.js';
import layout from 'css/layout.css';

class App extends Component {
	render() {
		return (
      <Router>
        <div className={layout.container}>

          <Menu nav={menu} />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound} />
          </Switch>

          <Footer />
        </div>
      </Router>
		);
	}
}

export default App;
