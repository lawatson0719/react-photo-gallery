var React = require('react');

var Image = require('./Image.jsx');
var galleryStore = require('../stores/galleryStore')

var Gallery = React.createClass({

	getInitialState: function () {
		return {
			galleryItems: galleryStore.getItems(),
			newItemValue: '',
		};
	},

	componentWillMount: function () {
		var _this = this;
		galleryStore.on('update', function () {
			_this.setState({
				galleryItems: galleryStore.getItems()
			});
		});
	},

	render: function () {
		var galleryItems = this.state.galleryItems;
		var imageComponents = galleryItems.map(function (galleryItem) {
			return <Image 
				key={galleryItem.id} 
				id={galleryItem.id} 
				url={galleryItem.url} 
				likes={galleryItem.likes} />;
		})

		return (
			<main>
				<div className="text-box">
					<input
						ref="newItemInput" 
						type="text" 
						value={this.state.newItemValue} 
						onChange={this.handleNewItemChange}/>
					<button onClick={this.handleClick} className="add">Add</button>
				</div>
				<ul>{imageComponents}</ul>
			</main>
		);
	},

	handleClick: function () {
		galleryStore.add(this.state.newItemValue)
		this.setState({
			newItemValue: ''
		})
	},

	handleNewItemChange: function () {
		var newItemInput = this.refs.newItemInput;
		this.setState ({
			newItemValue: newItemInput.value
		});
	}

});

module.exports = Gallery;

