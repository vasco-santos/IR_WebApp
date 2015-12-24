import alt from '../alt';
import {assign} from 'underscore';

class SearchMLTActions{
	constructor(){
		this.generateActions(
			'updateQueryResults',
			'handlePageClick'
		);
	}
}

export default alt.createActions(SearchMLTActions)