import React from "react";
import OrdersTable from "./OrdersTable";

class Main extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column">
				<OrdersTable allOrders={this.props.orders} />
			</div>
		);
	}
}

export default Main;