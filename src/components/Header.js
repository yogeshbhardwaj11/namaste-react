import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
	const [btnValue, setBtnValue] = useState("login");
	return (
		<div className="header">        
			<div className="logo-container">
				<img className="logo" src = {LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>	
					</li>	
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>Cart</li>
					<li>
						<button className="login" onClick={
							() => {
								const changedBtnValue = btnValue === 'login' ? 'logout' : 'login';
									setBtnValue(changedBtnValue);
							}
						}>{btnValue}</button>
					</li>
				</ul>
			</div> 
		</div>
	);
}

export default Header;	