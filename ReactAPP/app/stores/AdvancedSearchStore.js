import alt from '../alt';
import AdvancedSearchActions from '../actions/AdvancedSearchActions';

class AdvancedSearchStore{
	constructor(){
		this.bindActions(AdvancedSearchActions);
	}
}

export default alt.createStore(AdvancedSearchStore);