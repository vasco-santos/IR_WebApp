import alt from '../alt';
import SearchResultsActions from '../actions/SearchResultsActions';

class SearchResultsStore{
	constructor(){
		this.bindActions(SearchResultsActions);
		this.queryResults = [];
		this.queryHighlights = [];
		this.wymResults = [];
		this.numberOfDocuments = 0;
		this.pageNum = 0;
		this.perPage = 10;
		this.selected = 0;
	}
	
	onUpdateQueryResults(data){
		this.wymResults = [];
		this.queryResults = data.results.docs;
		this.numberOfDocuments = data.results.numFound;
		this.queryHighlights = data.highlights;
		this.pageNum = Math.ceil(this.numberOfDocuments/this.perPage);
	}
	
	onUpdateDidYouMean(data){
		this.queryResults = [];
		this.numberOfDocuments = 0;
		
		for(var i = 0; i < (data.length-1); i+=2){
			var wdym = {};
			wdym['term'] = data[i];
			if(data[i+1]){
				wdym['suggestions'] = data[i+1].suggestion;
			}
			else wdym['suggestions'] = [];
			this.wymResults.push(wdym);
		}
	}
}

export default alt.createStore(SearchResultsStore);