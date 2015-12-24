import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'updateSearchQuery',
      'updateSpeakerParam',
      'findQuerySuccess',
      'findQueryFail',
      'showAdvancedSearch',
      'toggleStemmer',
      'toggleStopwords',
      'showTimeChange',
      'updateRange',
      'toggleYearFlag'
    );
  }
 
  findQuery(payload){
    $.ajax({
      url: '/api/searchQuery',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        //assign(payload, data);
        this.actions.findQuerySuccess(payload);
      })
      .fail(() => {
        this.actions.findQueryFail(payload);
      });
  };
}

export default alt.createActions(NavbarActions);