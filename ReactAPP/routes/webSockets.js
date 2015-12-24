var solr = require('./modules/Solr');

module.exports = function (app, server){
	
	var onlineUsers = 0;
	
	// Start web sockets
    app.io = require('socket.io').listen(server, {log: false});
	
	app.io.sockets.on('connection', function(socket){
	
		onlineUsers++;
		console.log('user connected');
		
		// Send online Users Information
		app.io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  
  		/**
		 * Search Auto Complete query.
		 * 
		*/
		socket.on('search:ac', function(data){
			solr.autoComplete(data.query, function(data){
				var list = JSON.parse(data).spellcheck;
				if(list){
					var listF = list.suggestions[1];
					if(listF){
					socket.emit('search:ac', listF.suggestion);
					}
					else{
						socket.emit('search:ac', []);
					}
				}
				else{
					socket.emit('search:ac', []);
				}
			});
		});
		
		/**
		 * Search User Query. 
		 * 
		*/
		socket.on('search:query', function(data){
			solr.normalQuery({
				query: data.query, 
				start: data.start, 
				rows: data.rows, 
				stemmer: data.stemmer,
				stopwords: data.stopwords
				}, 
				function(data){
					var resp = JSON.parse(data).response;
					var highlights = JSON.parse(data).highlighting;
					socket.emit('search:query', {results:resp,highlights:highlights});
			})
		});
		
		/**
		 * Search More Like This Query.
		 */
		socket.on('search:mlt', function(data){
			solr.moreLikeThis({
				query: data.query,
				stemmer: data.stemmer,
				stopwords: data.stopwords
				},
				function(data){
				socket.emit('search:mlt', JSON.parse(data).moreLikeThis);
			});
		});
		
		/**
		 * Search Faceted Filters. 
		*/
		socket.on('search:filter', function(data){
			solr.facetedFilter(data, function(data){
				var list = JSON.parse(data).facet_counts.facet_fields;
				var results;
				if(list){
					results = {
						speaker: list.sp_f,
						language: list.language,
						year: list.year
					}
				}
				else{
					results = {
						speaker: [],
						language: [],
						year: []
					}
				}
				socket.emit('search:filter', results);
			})
		});
		
		/**
		 * Search what did you mean
		 */
		socket.on('search:wym', function(data){
			var query = data.query;
			solr.whatYouMean(query, function(data){
				var resp = JSON.parse(data).spellcheck.suggestions;
				socket.emit('search:wym', resp);
			});
		});
				
		/**
		 * User disconnected.
		 */		
		socket.on('disconnect', function() {
			onlineUsers--;
			app.io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
		});
	});
};