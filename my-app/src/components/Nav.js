import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SmileOutlined } from "@ant-design/icons";

function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener(`scroll`, () => {
			if (window.scrollY > 50) {
				setShow(true)
			} else {
				setShow(false)
			}
		})
		
		// return () => {
		// 	window.removeEventListener(`scroll`)
		// }
	}, [])
	

	return (
		<nav className={`nav ${show && 'nav_black'}`}>
			<Router>
				<Link to="/">
					<img 
						src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
						alt="Netflix logo"
						className="nav_logo"
					/>
				</Link> 
				<Link to="/myprofile">
					<SmileOutlined className="nav_avatar" />
				</Link>
			</Router>
		</nav>
	)
}

export default Nav