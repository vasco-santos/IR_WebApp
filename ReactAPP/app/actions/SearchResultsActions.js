import alt from '../alt';
import {assign} from 'underscore';

class SearchResultsActions{
	constructor(){
		this.generateActions(
			'updateQueryResults',
			'updateDidYouMean',
			'handlePageClick'
		);
	}
}

export default alt.createActions(SearchResultsActions)