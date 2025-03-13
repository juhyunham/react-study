import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SmileOutlined } from "@ant-design/icons";

function Nav() {
	const [show, setShow] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const handleChange = (event) => {
		setSearchValue(event.target.value)
	}

	useEffect(() => {
		window.addEventListener(`scroll`, () => {
			if (window.scrollY > 50) {
				setShow(true)
			} else {
				setShow(false)
			}
		})
	}, [])
	

	return (
		<nav className={`nav ${show && 'nav_black'}`}>
			<Link to="/">
				<img 
					src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
					alt="Netflix logo"
					className="nav_logo"
				/>
			</Link>

			<input 
				value={searchValue}
				onChange={handleChange}
				type="text"
				className="nav_input"
			/>

			<Link to="/myprofile">
				<SmileOutlined className="nav_avatar" />
			</Link>
		</nav>
	)
}

export default Nav