import React from 'react';
import Highlight from 'react-highlighter';

class SearchPreview extends React.Component{
	
	constructor(props) {
		super(props);
		//this.state = SearchResultsStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	render() {
		var containerStyle = {float: "left", width: "40%", minHeight:"80%"};
		return (
		<div style={containerStyle} className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">{this.props.docId}</h3>
			</div>
			<div >
	 			<Highlight search={this.props.query}>
				 {this.props.content}
				</Highlight>
			</div>
		</div>
		);
	}
}

export default SearchPreview;
