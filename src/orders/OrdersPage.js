import React from "react";
import AddOrderForm from "./AddOrderForm";
import OrdersTable from "./OrdersTable";

class OrdersPage extends React.Component {
	render() {
		return (
			<div className="container">
				<AddOrderForm />
				<OrdersTable />
			</div>
		);
	}
}

export default OrdersPage;