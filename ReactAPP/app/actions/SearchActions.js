import alt from '../alt';
import {assign} from 'underscore';

class SearchActions{
	constructor(){
		this.generateActions(
			'updateContent',
			'updateMLTContent',
			'updateFilterQuery'
		);
	}
}

export default alt.createActions(SearchActions)