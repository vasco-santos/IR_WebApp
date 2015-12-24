import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.showAdvanced = false;
    this.showAutocomplete = false;
    this.speakerParam = '';
    this.stopwordFlag = true;
    this.stemmerFlag = true;
    this.showTime = false;
    this.rangeFrom = '';
    this.rangeTo = '';
    this.range = ''; 
    this.yearFlag = false;
  }
  
  onFindQuerySuccess(payload){
    payload.history.pushState(payload.searchQuery, '/search/' + payload.searchQuery+'?stemmer='+payload.stemmer+'&stopwords='+payload.stopwords);
  }
  
  onFindQueryFail(payload){
    payload.searchForm.classList.add('shake');
    setTimeout(() => {
      payload.searchForm.classList.remove('shake');
    }, 1000);
  }

  onUpdateOnlineUsers(data) {
    this.onlineUsers = data.onlineUsers;
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
    
    if(this.searchQuery){
      io.connect().emit("search:ac", {query: this.searchQuery});
      this.showAutocomplete = true;
    }else{
      this.showAutocomplete = false;
    }
  }
  
  onUpdateSpeakerParam(event) {
    let patt = / speaker:\w*/i;
    this.speakerParam = event.target.value;
    
    if(patt.test(this.searchQuery) == false){
      this.searchQuery += " speaker:";
    }else{
      let newQuery = ' speaker:'+this.speakerParam;
      this.searchQuery = this.searchQuery.replace(patt,newQuery);
    }
    
    if(!event.target.value){
      this.searchQuery = this.searchQuery.replace(patt,'');
    }
  }
  
  onShowAdvancedSearch(event) {
    this.showAdvanced = !this.showAdvanced;
  }
  
  onToggleStemmer(event){
    this.stemmerFlag = !this.stemmerFlag;
    console.log(this.stemmerFlag);
  }
  
  onToggleStopwords(event) {
    this.stopwordFlag = !this.stopwordFlag;
    console.log(this.stemmerFlag);
  }
  
  onShowTimeChange(event){
    this.showTime = event.target.checked;
  }
  
  onUpdateRange(event){
    let patt = / date:\[.+\]/i;
    
    if(event.id == 'From'){
      this.rangeFrom = event.date;
    }else{ 
      if(event.id == 'To'){
        this.rangeTo = event.date;
      }
    }
    
    if(this.rangeFrom != '' && this.rangeTo != ''){ 
      let range = function(data){
        let prefix = ' date:["';
        let separator = '" TO "';
        let suffix = '"]';
        let dateFrom = data.year ? data.from.substring(0,4) : data.from.replace(' ','T') + 'Z';
        let dateTo = data.year   ? data.to.substring(0,4) : data.to.replace(' ','T') + 'Z';
        
        return prefix+dateFrom+separator+dateTo+suffix;
      }
      let data = {year:this.yearFlag,from:this.rangeFrom,to:this.rangeTo};        
      if(patt.test(this.searchQuery) == false){
        this.searchQuery += range(data);
      }else{
        this.searchQuery = this.searchQuery.replace(patt,range(data)); 
      }
    }
  }
  
  onToggleYearFlag(event){
    this.yearFlag = !this.yearFlag;
    this.onUpdateRange({event:''});
  }
}

export default alt.createStore(NavbarStore);