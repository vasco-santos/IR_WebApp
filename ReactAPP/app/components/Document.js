import React from 'react';
import Highlight from 'react-highlighter';

//import DocumentStore from '../stores/DocumentStore';
//import DocumentActions from '../actions/DocumentActions';

class Document extends React.Component{
	
	constructor(props) {
		super(props);
		//this.state = SearchResultsStore.getState();
		//this.onChange = this.onChange.bind(this);
	}
		
	onChange(state) {
		this.setState(state);
	}
	
	render(){
		let patt = /<h>\w+<\/h>/;
		return (
			<div>
				<span className='position pull-left'>
					<h3>{this.props.docID}</h3>
				</span>
				<div className='media-body'>
					<h4 className='media-heading'>
						{this.props.speaker}
					</h4>
					<small><Highlight search={patt} >{this.props.highlight}</Highlight></small>
					<br />
					<small>On {this.props.date}</small>
				</div>
			</div>
		);
	}
}

export default Document;