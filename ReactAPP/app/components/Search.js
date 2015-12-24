import React from 'react';
import SearchFilter from './SearchFilter';
import SearchResults from './SearchResults';
import SearchPreview from './SearchPreview';
import SearchMLT from './SearchMLT';
import {Link} from 'react-router';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class Search extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = SearchStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	componentDidMount() {
		SearchStore.listen(this.onChange);
	}
	
	componentWillUnmount() {
		SearchStore.unlisten(this.onChange);
	}
	
	componentDidUpdate(){
		console.log("update");
		//io.connect().emit('search:filterSpeaker', this.props.params.query);
		//SearchActions.updateQuery(this.props.params.query);
	}
	
	handlePreview(data){
		SearchActions.updateContent({
			data:data.content,
			docId:data.docId,
			id: data.id,
			query:this.props.params.query
		});
	}
	
	handlePreviewMLT(data){
		SearchActions.updateMLTContent({
			data: data.content,
			docId: data.docID
		})
	}
	
	handleFilters(data){
		SearchActions.updateFilterQuery(data);
	}
	
	render() {
		var classicalStyle = {display: "inline", width: "100%"};
		return (
		<div style={classicalStyle} key={this.props.params.query}>
			<SearchFilter query={this.props.params.query} stemmer={this.props.location.query.stemmer} stopwords={this.props.location.query.stopwords} filter={this.handleFilters} />
			<SearchResults key={this.state.filterQuery} history={this.props.history} query={this.props.params.query} stemmer={this.props.location.query.stemmer} stopwords={this.props.location.query.stopwords} filter={this.state.filterQuery} content={this.handlePreview.bind(this)}/>
			<div>
				<SearchPreview key={this.state.content} content={this.state.content} query={this.state.query} docId={this.state.docId}/>
				<SearchMLT key={this.state.id} id={this.state.id} stemmer={this.props.location.query.stemmer} stopwords={this.props.location.query.stopwords} contentMLT={this.handlePreviewMLT.bind(this)}/>
			</div>
		</div>
		);
	}
}

export default Search;