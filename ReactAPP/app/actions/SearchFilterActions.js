import alt from '../alt';
import {assign} from 'underscore';

class SearchFilterActions{
	constructor(){
		this.generateActions(
			'updateFilterResults'
		);
	}
}

export default alt.createActions(SearchFilterActions)