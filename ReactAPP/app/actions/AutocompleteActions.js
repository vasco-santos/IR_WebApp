import alt from '../alt';

class AutocompleteActions{
	constructor(){
		this.generateActions(
			'updateQuerySugestions'
		);
	}
}

export default alt.createActions(AutocompleteActions)