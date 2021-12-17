import React from "react";
import CancelOrder from "./CancelOrder";

class OrdersTable extends React.Component {

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
			this.setState({ orders: data });
		});
	}

	render() {
		return (
			<div className="d-flex flex-column">
				<table className="table table-active">
					<thead className="thead">
						<tr className="d-table-row">
							<th className="d-table-cell">Id</th>
							<th className="d-table-cell">Total</th>
							<th className="d-table-cell">TotalTax</th>
							<th className="d-table-cell">Status</th>
							<th className="d-table-cell"></th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.orders.map((order) => {
								return (
									<tr className="d-table-row" key={order["orderId"]}>
										<td className="d-table-cell">{order["orderId"]}</td>
										<td className="d-table-cell">{order["total"]}</td>
										<td className="d-table-cell">{order["totalTax"]}</td>
										<td className="d-table-cell">{order["status"]}</td>
										<td className="d-table-cell">{<CancelOrder orderId={order["orderId"]} />}</td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default OrdersTable;