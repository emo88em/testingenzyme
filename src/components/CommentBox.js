import React from 'react';

class CommentBox extends React.Component {
	state = { comment: '' };

	handleChange = (event) => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ comment: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="ui form">
					<h4>Add a comment</h4>
					<textarea onChange={this.handleChange} value={this.state.comment} />
					<div>
						<button className="ui button blue">Submit a Comment</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentBox;
