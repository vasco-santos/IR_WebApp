var Dispatcher = require('flux').Dispatcher;
var SearchPreviewStore = require('../stores/SearchPreviewStore');


let AppDispatcher = new Dispatcher();

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {
	
	let action = payload.action;
  	let new_item = payload.new_item;
  	let id = payload.id;
	  
	switch(action) {

		// Respond to add-item action
		case 'previewDocument':
			console.log("previewing :)");
			//ListStore.addItem(new_item);
		break;	
		default:
		return true;
	}
	
	// If action was responded to, emit change event
	//ListStore.emitChange();
	
	return true;
});


export default AppDispatcher;