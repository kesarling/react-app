import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import OrdersPage from "./orders/OrdersPage";
import ItemsPage from "./items/ItemsPage";
import { Route, Router, Routes } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container">
				<Router>
					<Routes>
						<Route path="/orders" element={<OrdersPage />} />
						<Route path="/items" element={<ItemsPage />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;