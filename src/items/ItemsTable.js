import React from "react";
import DeleteItem from "./DeleteItem";

class ItemsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
		fetch("/items", {
			method: "GET",
			mode: "no-cors",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
		}).then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({items: data});
		});
	}

	render() {
		return (
			<table className="table table-active">
				<thead className="thead-light">
					<tr className="d-table-row">
						<th className="d-table-cell">Name</th>
						<th className="d-table-cell">Description</th>
						<th className="d-table-cell">Price</th>
						<th className="d-table-cell"></th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.items.map((item) => {
							return (
								<tr className="d-table-row">
									<td className="d-table-cell">{item["name"]}</td>
									<td className="d-table-cell">{item["description"]}</td>
									<td className="d-table-cell">{item["price"]}</td>
									<td className="d-table-cell">{<DeleteItem />}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}

export default ItemsTable;