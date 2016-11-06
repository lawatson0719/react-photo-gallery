var React = require('react');

var galleryStore = require('../stores/galleryStore');

var Image = React.createClass({
	getInitialState: function () {
		return {
			editing: false,
			editValue: ''
		};
	},

	// componentWillReceiveProps: function (nextProps) {
	// 	this.setState({
	// 		likes: nextProps.likes
	// 	});
	// },

	render: function () {
		var editElements;
		
		if (this.state.editing) {
			editElements = (
				<div>
					<input
						ref="edit"
						type="text"
						value={this.state.editValue}
						onChange={this.handleEditChange}
						/>
					<button onClick={this.handleSaveClick}>Save</button>
				</div>
			);
		}

		return (
			<li>
				<img src={this.props.url} onClick={this.handleImageClick} />
				<div className="like-delete">
					<div className="likes">
						<div>Likes</div>
						<button onClick={this.handleLikeClick}>{this.props.likes}</button>
					</div>
					<button onClick={this.handleDeleteClick}>Remove</button>
				</div>
				{editElements}
			</li>
		);
	},

	handleEditChange: function () {
		this.setState({
			editValue: this.refs.edit.value
		});
	},

	handleImageClick: function () {
		this.setState({
			editing: !this.state.editing
		});
	},

	handleLikeClick: function () {
		galleryStore.like(this.props.id);
	},

	handleDeleteClick: function () {
		galleryStore.remove(this.props.id);
	},

	handleSaveClick: function () {
		galleryStore.update(this.props.id, this.state.editValue);
		this.setState({
			editing: false
		})
	}

});

module.exports = Image;