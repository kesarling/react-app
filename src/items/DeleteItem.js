import React from "react";

class DeleteItem extends React.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(event) {
		event.preventDefault();
		fetch("/items/delete/itemId=" + this.props.itemId, {
			method: "DELETE",
			mode: "no-cors",
			credentials: "same-origin",
			headers: {"Content-Type": "application/json"},
		});
	}

	render() {
		return (
			<button className="btn btn-secondary" onClick={this.onClickHandler}>delete</button>
		);
	}
}

export default DeleteItem;