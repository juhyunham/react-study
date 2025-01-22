import React from 'react'
import "./Nav.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SmileOutlined } from "@ant-design/icons";

function Nav() {
	return (
		<nav className="nav">
			<Router>
				<Link to="/">
					<img 
						src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
						alt="Netflix logo"
						className="nav_logo"
					/>
				</Link> 
				<Link to="/myprofile">
					<SmileOutlined />
				</Link>
			</Router>
		</nav>
	)
}

export default Nav