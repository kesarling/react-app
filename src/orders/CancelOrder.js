import React from "react";

class CancelOrder extends React.Component {
	onclickHandler = () => {
		fetch('/orders/cancel/' + this.props.orderId, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		}).then(() => {
			window.location.replace('/orders');
		});
	}

	render() {
		return (
			<a className="btn btn-secondary" onClick={this.onclickHandler}>Cancel</a>
		);
	}
}

export default CancelOrder;
