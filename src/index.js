import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ReactDom from "react-dom";

function Order(id, price) {
	this.id = id;
	this.price = price;
}

const seedOrders = (seedCount) => {
	let _orders = [];
	for (let i = 1; i <= seedCount; i++) {
		_orders.push(new Order(i, i * 10));
	}
	return _orders;
};

const Table = (props) => {
	return (
		<table className="table table-bordered">
			<thead className="thead-light">
				<tr className="d-table-row">
					<th className="d-table-cell">OrderId</th>
					<th className="d-table-cell">Price</th>
				</tr>
			</thead>
			<tbody>
				{props.orders.map((order) => (
					<tr className="d-table-row" key={order.id}>
						<td className="d-table-cell">{order.id}</td>
						<td className="d-table-cell">{order.price}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const AddOrder = (props) => {
	return (
		<button
			className="btn btn-primary"
			onClick={() =>
				props.setState((prev) => [
					...prev,
					new Order(
						parseInt(prompt("Enter Id")),
						parseFloat(prompt("Enter Price"))
					),
				])
			}>
			Add Order
		</button>
	);
};

const DeleteOrder = (props) => {
	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				let _id = parseInt(prompt("Enter Id"));
				props.setState((prev) =>
					prev.filter((order) => order.id !== _id)
				);
			}}>
			Delete Order
		</button>
	);
};

const App = () => {
	const [orders, setState] = useState(seedOrders(4));
	return (
		<div className="d-flex flex-column">
			<div className="d-flex flex-row-reverse">
				<DeleteOrder orders={orders} setState={setState} />
				<AddOrder orders={orders} setState={setState} />
			</div>
			<div>
				<Table orders={orders} />
			</div>
		</div>
	);
};

ReactDom.render(<App />, document.getElementById("root"));
