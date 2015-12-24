import React from 'react';
import ReactPaginate from 'react-paginate';
import Document from './Document';
import SearchResultsStore from '../stores/SearchResultsStore';
import SearchResultsActions from '../actions/SearchResultsActions';

class SearchResults extends React.Component{
	
	constructor(props) {
		super(props);
		this.socket = null;
		this.state = SearchResultsStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		SearchResultsStore.listen(this.onChange);
		
		console.log(this.props.history);
		
		this.socket = io.connect();
		var query = '' +  this.props.query +  this.props.filter;
		let buildQuery = {query:query, start:this.state.selected, rows:this.state.perPage, stemmer:this.props.stemmer, stopwords:this.props.stopwords};
		this.socket.emit('search:query', buildQuery);
		this.socket.on('search:query', (data) => {
			if(data.results.numFound == 0){
				this.socket.emit('search:wym', buildQuery);
				this.socket.on('search:wym', (data) =>{
					SearchResultsActions.updateDidYouMean(data);	
				});
			}
			else{		
				SearchResultsActions.updateQueryResults(data);
			}
		});
	}
	
	componentWillUnmount() {
		this.socket.removeListener('search:query');
		this.socket.removeListener('search:wym');
		SearchResultsStore.unlisten(this.onChange);
	}
	
	componentDidUpdate(){
		//console.log('update');
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	previewDocument(item, item2, item3, e){
		this.props.content({
			content:item,
			docId:item2,
			id: item3
		});
	}
	
	selectedSuggestion(item, e){
		this.props.history.pushState(item, '/search/' + item + '?stemmer='+this.props.stemmer+'&stopwords='+this.props.stopwords);
	}
	
	handlePageClick(data){
		var query = '' +  this.props.query +  this.props.filter;
		let buildQuery = {query:query, start:data.selected, rows:this.state.perPage,stemmer:this.props.stemmer,stopwords:this.props.stopwords};
		io.connect().emit('search:query', buildQuery);
	}
		
	render() {
		
		var divStyle = {"maxWidth": "100%"};
		var containerStyle = {float: "left", width: "40%"};
		let i = 0;
		
		var docs = this.state.queryResults.map((doc) =>{
			let queryHighlight = this.state.queryHighlights[doc.id];
			let highlight = Object.keys(queryHighlight).length === 0  ? "" : queryHighlight.content[0];
			//let highlight = this.state.queryHighlights[doc.id].content[0];
			return (
				<div onClick={this.previewDocument.bind(this, doc.content, doc.docIdentifier, doc.id)} style={divStyle} className='list-group-item animated fadeIn'>
					<Document className='media' docID={doc.docIdentifier} speaker={doc.speaker} date={doc.date} highlight={highlight} />
				</div>
			);
		});
		
		var wdym = this.state.wymResults.map((result) =>{
			var suggestions = result.suggestions.map((suggest) =>{
				return(
					<div onClick={this.selectedSuggestion.bind(this, suggest.word)}>
						<a>{suggest.word}</a>
					</div>
				);
			});
			return(
				<div>
					<p>No results for <b> {result.term}</b>. Did you mean?</p>
					{suggestions}
				</div>
			);
		});
		
		return (
		<div style={containerStyle}>
			{this.state.numberOfDocuments} results
			<br/>
			<div style={divStyle} className='container'>
				<div className='list-group'>
					{wdym}
					{docs}
					<ReactPaginate previousLabel={"previous"}
								nextLabel={"next"}
								breakLabel={<li className="break"><a href="">...</a></li>}
								pageNum={this.state.pageNum}
								marginPagesDisplayed={2}
								pageRangeDisplayed={5}
								clickCallback={this.handlePageClick.bind(this)}
								containerClassName={"pagination"}
								subContainerClassName={"pages pagination"}
								activeClassName={"active"} />
				</div>
			</div>
		</div>
		);
	}
}

export default SearchResults;