import React from 'react';
import CheckBoxList from 'react-checkbox-list';
import SearchFilterStore from '../stores/SearchFilterStore';
import SearchFilterActions from '../actions/SearchFilterActions';

class SearchFilter extends React.Component{
	
	constructor(props) {
		super(props);
		this.socket = null;
		this.state = SearchFilterStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		SearchFilterStore.listen(this.onChange);
		this.socket = io.connect();	
		this.socket.emit('search:filter', this.props.query);
		this.socket.on('search:filter', (data) => {
			SearchFilterActions.updateFilterResults(data);
		});
	}
	
	componentWillUnmount() {
		this.socket.removeListener('search:filter');
		SearchFilterStore.unlisten(this.onChange);
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	handleCheckboxSpeakerChange (values) {
		this.props.filter({speaker: values});
	}
	
	handleCheckboxLanguageChange (values) {
		this.props.filter({language: values});
	}
	
	handleCheckboxYearChange (values) {
		this.props.filter({year: values});
	}
	
	render() {
		var containerStyle = {float: "left", width: "20%"};
		
		var speakers = [];	
		this.state.speakerQuery.map((speaker) =>{
			if(speaker.freq != 0 && speakers.length < 10){
				var identifier = speaker.item + ' (' + speaker.freq + ')';
				var res = {value: speaker.item, label: identifier};
				speakers.push(res);	
			}
		});

		var years = [];
		this.state.yearQuery.map((year) =>{
			if(year.freq != 0 && years.length < 10){
				var identifier = year.item + ' (' + year.freq + ')';
				var res = {value: year.item, label: identifier};
				years.push(res);	
			}
		});
		
		var languages = [];		
		this.state.langQuery.map((lang) =>{
			if(lang.freq != 0 && languages.length < 10){
				var identifier = lang.item + ' (' + lang.freq + ')';
				var res = {value: lang.item, label: identifier};
				languages.push(res);	
			}
		});
		
		var speaker = (speakers.length > 0) ? "Speakers:" : " ";
		var year = (years.length > 0) ? "Years: " : " ";
		var language = (languages.length > 0) ? "Languages: " : " ";
		
		return (
			<div key={this.state.speakerQuery} style={containerStyle}>
				<h3>Search Filters</h3>
				{speaker}
				<CheckBoxList ref="chkboxList" defaultData={speakers} onChange={this.handleCheckboxSpeakerChange.bind(this)} />

				{language}
				<CheckBoxList ref="chkboxList" defaultData={languages} onChange={this.handleCheckboxLanguageChange.bind(this)} />

				{year}
				<CheckBoxList ref="chkboxList" defaultData={years} onChange={this.handleCheckboxYearChange.bind(this)} />			
			</div>
		);
	}
}

export default SearchFilter;