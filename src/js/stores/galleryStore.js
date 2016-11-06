//galleryStore is going to be our source for galley items

//Each gallery item will be represtnted by an object. e.g:

// { url: ..., likes: 0 }

// add, remove, like
//get current state of the store

// need a way to update any Views that are listening for changes in out data(eventEmitter to emit the 'update' button)

var EventEmitter = require('eventemitter3');

var galleryStore = Object.create(EventEmitter.prototype);
EventEmitter.call(galleryStore);

var galleryItems = [
	{ id: 1, url: 'http://static.wixstatic.com/media/7ee089_da328099fd0a4d5990abdb91f271a9d5.jpg_srz_980_980_85_22_0.50_1.20_0.00_jpg_srz', likes: 0 }
];

galleryStore.add = function (url) {
	galleryItems.push({
		id: Math.random(),
		url: url,
		likes: 0
	});
	this.emit('update');
};


galleryStore.remove = function (id) {
	var galleryItem = galleryItems.find(function (item) {
		return item.id === id;
	});
	var index = galleryItems.indexOf(galleryItem);
	galleryItems.splice(index, 1);

	this.emit('update');
};

galleryStore.like = function (id) {
	var galleryItem = galleryItems.find(function (item) {
		return item.id === id;
	});

	galleryItem.likes += 1;

	this.emit('update');
};

galleryStore.getItems = function () {
	return galleryItems;
}

window.galleryStore = galleryStore;

module.exports = galleryStore;



