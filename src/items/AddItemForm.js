import React from "react";

class AddItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			price: "",
		}
		this.onChangeHandlerName = this.onChangeHandlerName.bind(this);
		this.onChangeHandlerDescription = this.onChangeHandlerDescription.bind(this);
		this.onChangeHandlerPrice = this.onChangeHandlerPrice.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(event) {
		event.preventDefault();
		fetch("/items/add", {
			method: "POST",
			mode: "no-cors",
			credentials: "same-origin",
			body: JSON.stringify({
				name: this.state.name,
				description: this.state.description,
				price: this.state.price,
			}),
			headers: {"Content-Type": "application/json"},
		})
	}

	onChangeHandlerName(event) {
		this.setState({name: event.target.value});
	}
	
	onChangeHandlerDescription(event) {
		this.setState({description: event.target.value});
	}
	
	onChangeHandlerPrice(event) {
		this.setState({price: event.target.value});
	}

	render() {
		return (
			<form method="POST" onSubmit={this.onSubmitHandler}>
				<div className="d-flex flex-row input-group w-100">
					<input className="form-control" onInput={this.onChangeHandlerName} placeholder="name" value={this.state.name} />
					<input className="form-control" onInput={this.onChangeHandlerDescription} placeholder="description" value={this.state.description} />
					<input className="form-control" onInput={this.onChangeHandlerPrice} placeholder="price" value={this.state.price} />
					<input className="btn btn-primary" type="submit" value="Add" />
				</div>
			</form>
		);
	}
}

export default AddItemForm;