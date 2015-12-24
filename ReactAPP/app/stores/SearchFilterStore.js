import alt from '../alt';
import SearchFilterActions from '../actions/SearchFilterActions';
import SearchActions from '../actions/SearchActions';

class SearchFilterStore{
	constructor(){
		this.bindActions(SearchFilterActions);
		
		this.speakerQuery = [];
		this.langQuery = [];
		this.yearQuery = [];				
		this.filter = '';
	}
	
	onUpdateFilterResults(data){
		this.speakerQuery = [];
		this.langQuery = [];
		this.yearQuery = [];	
		for (var i = 0; i < (data.speaker.length-1); i+=2){
			var speaker = {};
			speaker['item'] = data.speaker[i];
			speaker['freq'] = data.speaker[i+1];
			this.speakerQuery.push(speaker);
		}
		for(var i = 0; i < (data.language.length-1); i+=2){
			var lang = {};
			lang['item'] = data.language[i];
			lang['freq'] = data.language[i+1];
			this.langQuery.push(lang);
		}
		for (var i = 0; i < (data.year.length-1); i+=2){
			var year = {};
			year['item'] = data.year[i];
			year['freq'] = data.year[i+1];
			this.yearQuery.push(year);
		}
	}
}

export default alt.createStore(SearchFilterStore);