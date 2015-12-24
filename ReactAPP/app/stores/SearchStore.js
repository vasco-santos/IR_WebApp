import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SearchStore{
	constructor(){
		this.bindActions(SearchActions);
		this.filterQuery = '';
		this.content = "";
		this.query = "";
		this.docId = "";
		this.id = "";
		
		this.selectedSpeakers = [];
		this.selectedYears = [];
		this.selectedLanguages = [];
	}
	
	onUpdateMLTContent(data){
		this.content = data.data;
		this.docId = data.docId;
	}
	
	onUpdateContent(data){
		this.query = data.query;
		this.content = data.data;
		this.docId = data.docId;
		this.id = data.id;
	}
	
	onUpdateFilterQuery(data){
		this.content = "";
		this.docId = "";
		this.id = "";
		if('speaker' in data){
			this.selectedSpeakers = data['speaker'];
		}
		else if('language' in data){
			this.selectedLanguages = data['language'];
		}
		else{
			this.selectedYears = data['year'];
		}
		this.updateQuery();
	}
		
	updateQuery(){
		// Build new query
		// Query AND (speaker: Flemming OR speaker: President) AND language: EN
		var res = '';
		if(this.selectedSpeakers.length > 0){
			res += ' AND (';
			this.selectedSpeakers.map((speaker) =>{
				res += 'speaker: "' + speaker + '" OR ';
			});
			res = res.slice(0, -4);
			res += ')';
		}	
		if(this.selectedYears.length > 0){
			res += ' AND (';
			this.selectedYears.map((year) =>{
				res += 'year: ' + year + ' OR ';
			});
			res = res.slice(0, -4);
			res += ')';
		}	
		if(this.selectedLanguages.length > 0){
			res += ' AND (';
			this.selectedLanguages.map((language) =>{
				res += 'language: ' + language + ' OR ';
			});
			res = res.slice(0, -4);
			res += ') ';
		}
		this.filterQuery = res;
	}
}

export default alt.createStore(SearchStore);