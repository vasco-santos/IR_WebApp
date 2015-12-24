var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  previewDocument: function(content) {
    var action = {
      actionType: "onPreviewDocument",
      comment: content
    };

    AppDispatcher.dispatch(action);
  }
};