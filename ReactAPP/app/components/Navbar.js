import React from 'react';
import {Link} from 'react-router';

import MyCalendar from './Calendar';
import Collapse from 'react-collapse';
import Autocomplete from './Autocomplete';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    NavbarStore.listen(this.onChange);

    this.socket = io.connect();

    this.socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }
  
  componentWillUnmount() {
    this.socket.removeListener('onlineUsers');
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  
  onClick(state){
    this.setState(state);
  }
  
  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findQuery({
        stemmer: this.state.stemmerFlag,
        stopwords: this.state.stopwordFlag,
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }
  
  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            IR 2015
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated searchForm' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group searchBar'>
              <input id="bada" type='text' className='form-control' placeholder='query' value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} list="autocomplete_list"/>
              <Autocomplete />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
             </div>
          </form>
          <ul className='nav navbar-nav'>
            <li><a href='#' className='dropdown-toggle' data-toggle='dropdown' onClick={NavbarActions.showAdvancedSearch}>Advanced<span className='caret'></span></a> </li>
          </ul>
          <span className='badge badge-up'>{this.state.onlineUsers} on</span>  
        </div>
        <div id='advanced-search' className="col-md-3 col-md-offset-1">
          <Collapse isOpened={this.state.showAdvanced} fixedHeight={270}>
          <div id='optionsContainer'>
            Available parameters
            <div id="speaker" className='input-group searchBar'>
              <input type='text' className='form-control' placeholder='Speaker' value={this.state.speakerParam} onChange={NavbarActions.updateSpeakerParam} />
            </div>
            <div id="range" className="row">
                <div className="col-md-1">
                  <MyCalendar id="From"/>
                  <MyCalendar id="To"/>
                </div>
                <div className="input-group">
                  <input type="checkbox" value={this.state.yearFlag} onClick={NavbarActions.toggleYearFlag}/>
                  <strong>Use year only</strong>
                </div>
            </div>     
            <div id="stemmer" className="input-group">
                <input type="checkbox" checked={this.state.stemmerFlag} value={this.state.stemmerFlag} onClick={NavbarActions.toggleStemmer}/>
                <strong> Use Stemmer</strong>
            </div>
            <div id="stop-words" className="input-group">
                <input type="checkbox" checked={this.state.stopwordFlag} value={this.state.stopwordFlag} onClick={NavbarActions.toggleStopwords}/>
                <strong> Use Stopword filter</strong>
            </div>
          </div>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default Navbar;