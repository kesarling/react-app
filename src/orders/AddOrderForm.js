import React from "react";

class AddOrderForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			total: "",
			totalTax: "",
		}
		this.onchangeHandlerTotal = this.onchangeHandlerTotal.bind(this);
		this.onchangeHandlerTotalTax = this.onchangeHandlerTotalTax.bind(this);
		this.onsubmitHandler = this.onsubmitHandler.bind(this);
	}

	onsubmitHandler(event) {
		event.preventDefault();
		fetch("/orders/add", {
			method: "POST",
			body: JSON.stringify({
				"total": this.state.total,
				"totalTax": this.state.totalTax,
				"status": 0,
			}),
			headers: { "Content-Type": "application/json" },
		}).then(() => {
			window.location.href = "/orders";
		});
	}

	onchangeHandlerTotal(event) {
		this.setState({total: event.target.value});
	}

	onchangeHandlerTotalTax(event) {
		this.setState({totalTax: event.target.value});
	}

	render() {
		return (
			<form method="POST" onSubmit={this.onsubmitHandler}>
				<div className="d-flex flex-row input-group w-100">
					<input className="form-control" onChange={this.onchangeHandlerTotal} placeholder="Enter Total" value={this.state.total} />
					<input className="form-control" onChange={this.onchangeHandlerTotalTax} placeholder="Enter Total Tax" value={this.state.totalTax} />
					<input className="btn btn-primary" type="submit" value="Add" />
				</div>
			</form>
		);
	}
}

export default AddOrderForm;