import React from 'react';
import {Link} from 'react-router';
import AutocompleteStore from '../stores/AutocompleteStore';
import AutocompleteActions from '../actions/AutocompleteActions';

class Autocomplete extends React.Component {
	constructor(props) {
    	super(props);
		this.state = AutocompleteStore.getState();
		this.onChange = this.onChange.bind(this);
    }
	
	componentDidMount() {
    	AutocompleteStore.listen(this.onChange);
		io.connect().on('search:ac', function(data){
			AutocompleteActions.updateQuerySugestions(data);
		});
  	}
	  
	componentWillUnmount() {
		AutocompleteStore.unlisten(this.onChange);
	}
	  
	onChange(state){
		this.setState(state);
	}
			
	render(){
		let autocompleteList = this.state.autocomplete.map((option,key) => {
			return(
				<option key={key} value={option}/>
			);	
		});
		return (
			<datalist id="autocomplete_list">
				{autocompleteList}
			</datalist>	
		);
	}
}

export default Autocomplete;