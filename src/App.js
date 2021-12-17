import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Main from "./Main";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: [],
		}
		fetch("/orders", {
			method: "GET",
			mode: "no-cors",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
		}).then((response) => 
			response.json()
		).then((data) => {
			this.setState({orders: data});
		});
	}
	
	render() {
		return (
			<div className="container">
				<Main orders={this.state.orders} />
			</div>
		);
	}
}

export default App;