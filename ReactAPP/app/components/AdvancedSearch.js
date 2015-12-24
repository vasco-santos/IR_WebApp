import React from 'react';
import {Link} from 'react-router';
import AdvancedSearchStore from '../stores/AvancedSearchStore';
import AdvancedSearchActions from '../stores/AdvancedSearchActions';

class AdvancedSearch extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = AdvancedSearchStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		AdvancedSearchStore.listen(this.onChange);
	}
	
    componentWillUnmount() {
    	AdvancedSearchStore.unlisten(this.onChange);
 	}
	 
	 onChange(state) {
		 this.setState(state);
	 }
	 
	 render() {
		 return(
			 <div>
			 	ADVANCED SEARCH
			 </div>
		 )
	 }
	
}