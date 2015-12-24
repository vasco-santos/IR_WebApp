import alt from '../alt';
import AutocompleteActions from '../actions/AutocompleteActions';

class AutocompleteStore {
  constructor() {
    this.bindActions(AutocompleteActions);
    this.autocomplete = [];
  }
  
  onUpdateQuerySugestions(data) {
    this.autocomplete = data;
  }
}

export default alt.createStore(AutocompleteStore);