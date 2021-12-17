import React from "react";

class CancelOrder extends React.Component {
	onclickHandler = e => {
		fetch('/orders/cancel/' + this.props.orderId, {
			method: "DELETE",
		}).then(() => {
			window.location.replace('/orders');
		});
	}

	render() {
		return (
			<button className="btn btn-secondary" onClick={this.onclickHandler}>Cancel</button>
		);
	}
}

export default CancelOrder;
