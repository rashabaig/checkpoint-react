import React, { Component } from 'react';

class NewContact extends Component {
	render() {
		return (
			<div>
				<h1>New Contact</h1>
				<form>
					<input type="text" />
					<input type="text" />
					<input type="file" />
				</form>
			</div>
		);
	}
}

export default NewContact;
