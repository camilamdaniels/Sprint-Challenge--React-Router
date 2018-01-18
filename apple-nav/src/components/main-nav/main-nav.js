import React, { Component } from 'react';
import './main-nav.css';
import { NavLink, Router } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const MainNav = () => {
	return (
		<Router history={history}>
			<div className="MainNav">
				<div className="HomeIcon">
					<NavLink to="/">
						<a data-flickr-embed="true"  href="https://www.flickr.com/photos/162240944@N04/27973417279/in/dateposted-public/" title="home-icon">
							<img src="https://farm5.staticflickr.com/4607/27973417279_d740ab93a5_m.jpg" width="50" height="30" alt="home-icon"/>
						</a>
						<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
					</NavLink>
				</div>
				<div className="MacIcon">
					<NavLink to="/mac">Mac</NavLink>
				</div>
				<div className="IpadIcon">
					<NavLink to="/ipad">iPad</NavLink>
				</div>
				<div className="IphoneIcon">
					<NavLink to="/iphone">iPhone</NavLink>
				</div>
				<div className="WatchIcon">
					<NavLink to="/watch">Watch</NavLink>
				</div>
				<div className="TVIcon">
					<NavLink to="/tv">TV</NavLink>
				</div>
				<div className="MusicIcon">
					<NavLink to="/music">Music</NavLink>
				</div>
				<div className="SupportIcon">
					<NavLink to="/support">Support</NavLink>
				</div>
				<div className="SearchIcon">
					<NavLink to="/search">
						<a data-flickr-embed="true"  href="https://www.flickr.com/photos/162240944@N04/27973416129/in/dateposted-public/" title="search-icon">
							<img src="https://farm5.staticflickr.com/4676/27973416129_86fbb3efcd_m.jpg" width="50" height="30" alt="search-icon" />
						</a>
						<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
					</NavLink>
				</div>
				<div className="CartIcon">
					<NavLink to="/cart">
						<a data-flickr-embed="true"  href="https://www.flickr.com/photos/162240944@N04/39720394432/in/dateposted-public/" title="cart-icon">
							<img src="https://farm5.staticflickr.com/4717/39720394432_f47e67022b_z.jpg" width="50" height="30" alt="cart-icon" />
						</a>
						<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
					</NavLink>
				</div>
			</div>
		</Router>
	);
}

export default MainNav;