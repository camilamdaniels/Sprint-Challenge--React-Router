import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainNav from './components/main-nav/main-nav.js';
import { MacNav } from './components/sub-navs/mac/mac-nav.js';
import { IpadNav } from './components/sub-navs/ipad/ipad-nav.js';
import { IphoneNav } from './components/sub-navs/iphone/iphone-nav.js';
import { WatchNav } from './components/sub-navs/watch/watch-nav.js';
import { TVNav } from './components/sub-navs/tv/tv-nav.js';
import { MusicNav } from './components/sub-navs/music/music-nav.js';
import { SupportPage } from './components/sub-navs/support/support-page.js';
import { SearchDropdown } from './components/sub-navs/search/search-dropdown.js';
import { CartDropdown } from './components/sub-navs/cart/cart-dropdown.js';
import { HomePage } from './components/sub-navs/home/home-page.js';

import { Router, Route, NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <MainNav />
        
          <Route path="/" component={HomePage} exact/>
          <Route path="/mac" component={MacNav} />
          <Route path="/ipad" component={IpadNav} />
          <Route path="/iphone" component={IphoneNav} />
          <Route path="/watch" component={WatchNav} />
          <Route path="/tv" component={TVNav} />
          <Route path="/music" component={MusicNav} />
          <Route path="/support" component={SupportPage} />
          <Route path="/search" component={SearchDropdown} />
          <Route path="/cart" component={CartDropdown} />
        
        </div>
      </Router>
    );
  }
}

export default App;
