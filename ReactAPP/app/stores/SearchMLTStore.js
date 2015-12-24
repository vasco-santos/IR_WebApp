import alt from '../alt';
import SearchMLTActions from '../actions/SearchMLTActions';

class SearchMLTStore{
	constructor(){
		this.bindActions(SearchMLTActions);
		this.queryResults = [];
	}
	
	onUpdateQueryResults(data){
		console.log(data);
		this.queryResults = data.docs;
	}
}

export default alt.createStore(SearchMLTStore);