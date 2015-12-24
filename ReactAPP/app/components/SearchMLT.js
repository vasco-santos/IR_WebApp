import React from 'react';
import ReactPaginate from 'react-paginate';
import Document from './Document';
import SearchMLTStore from '../stores/SearchMLTStore';
import SearchMLTActions from '../actions/SearchMLTActions';

class SearchMLT extends React.Component{
	
	constructor(props){
		super(props);
		this.socket = null;
		this.state = SearchMLTStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		SearchMLTStore.listen(this.onChange);
		this.socket = io.connect();
		var query = "id:" + this.props.id;
		let buildQuery = {query: query, stemmer:this.props.stemmer, stopwords:this.props.stopwords};
		this.socket.emit('search:mlt', buildQuery);
		this.socket.on('search:mlt', (data) => {
			SearchMLTActions.updateQueryResults(data[this.props.id]);
		});
		
		//updateQueryResults(data);
	}
	
	componentWillUnmount() {
		this.socket.removeListener('search:mlt');
		SearchMLTStore.unlisten(this.onChange);
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	previewMLTDocument(item, item2, e){
		this.props.contentMLT({
			content:item,
			docId:item2
		});
	}
	
	render(){
		var divStyle = {"maxWidth": "100%"};
		var containerStyle = {float: "left", width: "40%"};
		
		var docs = this.state.queryResults.map((doc) =>{
			return (
				<div onClick={this.previewMLTDocument.bind(this, doc.content, doc.docIdentifier)} style={divStyle} className='list-group-item animated fadeIn'>
					<Document className='media' docID={doc.docIdentifier} speaker={doc.speaker} date={doc.date} />
				</div>
			);
		});
		
		return(
			<div style={containerStyle}>
				<h4>More results like this:</h4>
				<br/>
				<div style={divStyle} className='container'>
					<div className='list-group'>
						{docs}
					</div>
				</div>
			</div>
		)
	}
}

export default SearchMLT;