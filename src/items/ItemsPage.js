import React from "react";
import ItemsTable from "./ItemsTable";
import AddItemForm from "./AddItemForm";

class ItemsPage extends React.Component {
	render() {
		return (
			<div className="container">
				<AddItemForm />
				<ItemsTable />
			</div>
		);
	}
}

export default ItemsPage;