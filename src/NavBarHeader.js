import React from "react";
import './NavBarHeader.css'

class NavBarHeader extends React.Component {
	render() {
		return (
			<div className="NavBarHeader">
				<a className="btn btn-primary" href="/items">All Items</a>
				&nbsp;
				<a className="btn btn-primary" href="/orders">All Orders</a>
				&nbsp;
			</div>
		);
	}
}

export default NavBarHeader;