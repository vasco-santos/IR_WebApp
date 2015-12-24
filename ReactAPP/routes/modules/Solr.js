var request = require('request');
var request_json = require('request-json');
var clientNSNST = request_json.createClient('http://localhost:8983/solr/ri');

// Solr Server URL
var url = 'http://localhost:8983/solr/ri/';
var url_sw_ps = 'http://localhost:8983/solr/ri-sw-ps/';
var url_sw = 'http://localhost:8983/solr/ri-sw/';
var url_ps = 'http://localhost:8983/solr/ri-ps/';

// Query Options 
var select = 'select?';
var spell = 'spell?';
var suggest = 'suggest?';
var facet = '&facet=true&facet.field=sp_f&facet.field=language&facet.field=year';
var mlt = '&mlt=true&mlt.fl=content&mlt.count=5';
var start = '&start=';
var rows = "&rows=";
var highlighting = "&hl=true&hl.fl=content&hl.simple.pre=<h>&hl.simple.post=</h>"

// Output Options
var queryOptions = '&wt=json&indent=true';

/**
 * Normal Query to Solr Core
 * - Simple Query
 * - Field Query
 * - Range Query
 */ 
module.exports.normalQuery = function(query, cb){
	
	getURL(query.stemmer, query.stopwords, function(solrCore){
		var getReq = solrCore + select + 'q=' + encodeURIComponent(query.query) + start + query.start + rows + query.rows + queryOptions + highlighting;
		console.log('Normal Query Request: ' + getReq);
		var options = {
			url: getReq,
			encoding: 'utf8'
		};
		request(options, function(err, res, body){
			if(res.statusCode == 200) {
				return cb(body);
			}
			else{
				return cb(false);
			} 
		});
	});
};

/**
 * Faceted Filters
 */
module.exports.facetedFilter = function(query, cb){
	
	var getReq = url_sw_ps + select + 'q=' + encodeURIComponent(query) + facet + queryOptions;
	console.log('Faceted Filters Request: ' + getReq);
	var options = {
		url: getReq,
		encoding: 'utf8'
	};
	request(options, function(err, res, body){
        if(res.statusCode == 200) {
            return cb(body);
        }
        else return cb(false);
    });
};

/**
 * What you mean query
 */
module.exports.whatYouMean = function(query, cb){
	
	var getReq = url_sw_ps + spell + 'q=' + encodeURIComponent(query) + queryOptions;
	console.log('What you mean Request: ' + getReq);
	var options = {
		url: getReq,
		encoding: 'utf8'
	};
	request(options, function(err, res, body){
        if(res.statusCode == 200) {
            return cb(body);
        }
        else return cb(false);
    });
}

/**
 * Suggestion Query to Solr Core
 * - Auto complete Query
 */
module.exports.autoComplete = function(query, cb){

	var getReq = url_sw_ps + suggest + 'q=' + encodeURIComponent(query) + queryOptions;
	console.log('Suggestion Request: ' + getReq);
	var options = {
		url: getReq,
		encoding: 'utf8'
	};
	request(options, function(err, res, body){
        if(res.statusCode == 200) {
            return cb(body);
        }
        else return cb(false);
    });
};

/**
 * More like this Query
 */
module.exports.moreLikeThis = function(query, cb){
	
	getURL(query.stemmer, query.stopwords, function(solrCore){
		var getReq = solrCore + select + 'q=' + encodeURIComponent(query.query) + mlt + queryOptions;
		console.log('MLT Query Request: ' + getReq);
		var options = {
			url: getReq,
			encoding: 'utf8'
		};
		request(options, function(err, res, body){
			if(res.statusCode == 200) {
				return cb(body);
			}
			else{
				return cb(false);
			} 
		});
	});
};

var getURL = function(stemmer, stopwords, cb){
	
	console.log("stemmer: " + stemmer);
	console.log("stopwords: " + stopwords);
	stemmer = (stemmer === "true");
	stopwords = (stopwords === "true");
	if(stemmer && stopwords){
		return cb(url_sw_ps);
	}
	else if(stemmer){
		return cb(url_ps);
	}
	else if(stopwords){
		return cb(url_sw);
	}
	else{
		return cb(url);
	}
}