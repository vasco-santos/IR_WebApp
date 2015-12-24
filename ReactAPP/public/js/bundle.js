(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutocompleteActions = function AutocompleteActions() {
	_classCallCheck(this, AutocompleteActions);

	this.generateActions('updateQuerySugestions');
};

exports.default = _alt2.default.createActions(AutocompleteActions);

},{"../alt":8}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = (function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    // Send actions to dispatch
    this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      /*$.ajax({ url: '/api/characters/top' })
        .done((data) => {
          this.actions.getTopCharactersSuccess(data)
        })
        .fail((jqXhr) => {
          this.actions.getTopCharactersFail(jqXhr)
        });*/
      // Get Last Five querys
    }
  }]);

  return FooterActions;
})();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":8}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = (function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'updateSpeakerParam', 'findQuerySuccess', 'findQueryFail', 'showAdvancedSearch', 'toggleStemmer', 'toggleStopwords', 'showTimeChange', 'updateRange', 'toggleYearFlag');
  }

  _createClass(NavbarActions, [{
    key: 'findQuery',
    value: function findQuery(payload) {
      var _this = this;

      $.ajax({
        url: '/api/searchQuery',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        //assign(payload, data);
        _this.actions.findQuerySuccess(payload);
      }).fail(function () {
        _this.actions.findQueryFail(payload);
      });
    }
  }]);

  return NavbarActions;
})();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":8,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchActions = function SearchActions() {
	_classCallCheck(this, SearchActions);

	this.generateActions('updateContent', 'updateMLTContent', 'updateFilterQuery');
};

exports.default = _alt2.default.createActions(SearchActions);

},{"../alt":8,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchFilterActions = function SearchFilterActions() {
	_classCallCheck(this, SearchFilterActions);

	this.generateActions('updateFilterResults');
};

exports.default = _alt2.default.createActions(SearchFilterActions);

},{"../alt":8,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchMLTActions = function SearchMLTActions() {
	_classCallCheck(this, SearchMLTActions);

	this.generateActions('updateQueryResults', 'handlePageClick');
};

exports.default = _alt2.default.createActions(SearchMLTActions);

},{"../alt":8,"underscore":"underscore"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchResultsActions = function SearchResultsActions() {
	_classCallCheck(this, SearchResultsActions);

	this.generateActions('updateQueryResults', 'updateDidYouMean', 'handlePageClick');
};

exports.default = _alt2.default.createActions(SearchResultsActions);

},{"../alt":8,"underscore":"underscore"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      //var classicalStyle = {height: "100%"};
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
})(_react2.default.Component);

exports.default = App;

},{"./Footer":13,"./Navbar":15,"react":"react"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AutocompleteStore = require('../stores/AutocompleteStore');

var _AutocompleteStore2 = _interopRequireDefault(_AutocompleteStore);

var _AutocompleteActions = require('../actions/AutocompleteActions');

var _AutocompleteActions2 = _interopRequireDefault(_AutocompleteActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = (function (_React$Component) {
	_inherits(Autocomplete, _React$Component);

	function Autocomplete(props) {
		_classCallCheck(this, Autocomplete);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Autocomplete).call(this, props));

		_this.state = _AutocompleteStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Autocomplete, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_AutocompleteStore2.default.listen(this.onChange);
			io.connect().on('search:ac', function (data) {
				_AutocompleteActions2.default.updateQuerySugestions(data);
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_AutocompleteStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var autocompleteList = this.state.autocomplete.map(function (option, key) {
				return _react2.default.createElement('option', { key: key, value: option });
			});
			return _react2.default.createElement(
				'datalist',
				{ id: 'autocomplete_list' },
				autocompleteList
			);
		}
	}]);

	return Autocomplete;
})(_react2.default.Component);

exports.default = Autocomplete;

},{"../actions/AutocompleteActions":1,"../stores/AutocompleteStore":23,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _zh_CN = require('gregorian-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _zh_CN3 = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatter = new _gregorianCalendarFormat2.default('yyyy-MM-dd HH:mm:ss'); // spm error

var MyCalendar = _react2.default.createClass({
  displayName: 'MyCalendar',
  onChange: function onChange(value) {
    var date = { id: this.props.id, date: value && formatter.format(value) };
    _NavbarActions2.default.updateRange(date);
    this.setState({ value: value });
  },
  getInitialState: function getInitialState() {
    var value = new _gregorianCalendar2.default(_zh_CN2.default);
    value.setTime(Date.now());
    return {
      open: false,
      showTime: true,
      value: value
    };
  },
  onShowTimeChange: function onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked
    });
  },
  render: function render() {
    var _this = this;

    var state = this.state;
    // var calendar = <Calendar locale={CalendarLocale}
    //                          showTime={this.state.showTime}
    //                          />;
    var calendar = _react2.default.createElement(_rcCalendar2.default, { showWeekNumber: true,
      showOk: true,
      showToday: true,
      showTime: false });
    return _react2.default.createElement(
      'div',
      { className: 'form-group', style: { width: 400, margin: 20 } },
      _react2.default.createElement(
        'div',
        { className: 'input-group' },
        _react2.default.createElement(
          'span',
          null,
          this.props.id
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-group', style: { width: 250 } },
        _react2.default.createElement(
          _Picker2.default,
          { ref: 'picker',
            calendar: calendar,
            value: state.value,
            onChange: this.onChange
          },
          function (_ref) {
            var value = _ref.value;

            return _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('input', { type: 'text',
                className: 'form-control',
                readOnly: true,
                value: value && formatter.format(value),
                id: _this.props.id,
                style: {
                  background: "white",
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  cursor: "pointer"

                } }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-addon', style: {
                    width: 39,
                    height: 34,
                    borderRight: 0,
                    borderLeft: '1px solid #ccc',
                    position: 'absolute',
                    zIndex: 99,
                    right: 1, top: 0 } },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-calendar' })
              )
            );
          }
        )
      )
    );
  }
});

exports.default = MyCalendar;

},{"../actions/NavbarActions":3,"../stores/NavbarStore":25,"gregorian-calendar":35,"gregorian-calendar-format":31,"gregorian-calendar/lib/locale/zh_CN":37,"rc-calendar":67,"rc-calendar/lib/Picker":58,"rc-calendar/lib/locale/zh_CN":69,"react":"react","react-dom":"react-dom"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlighter = require('react-highlighter');

var _reactHighlighter2 = _interopRequireDefault(_reactHighlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import DocumentStore from '../stores/DocumentStore';
//import DocumentActions from '../actions/DocumentActions';

var Document = (function (_React$Component) {
	_inherits(Document, _React$Component);

	function Document(props) {
		_classCallCheck(this, Document);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Document).call(this, props));
		//this.state = SearchResultsStore.getState();
		//this.onChange = this.onChange.bind(this);
	}

	_createClass(Document, [{
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var patt = /<h>\w+<\/h>/;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'span',
					{ className: 'position pull-left' },
					_react2.default.createElement(
						'h3',
						null,
						this.props.docID
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'media-body' },
					_react2.default.createElement(
						'h4',
						{ className: 'media-heading' },
						this.props.speaker
					),
					_react2.default.createElement(
						'small',
						null,
						_react2.default.createElement(
							_reactHighlighter2.default,
							{ search: patt },
							this.props.highlight
						)
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement(
						'small',
						null,
						'On ',
						this.props.date
					)
				)
			);
		}
	}]);

	return Document;
})(_react2.default.Component);

exports.default = Document;

},{"react":"react","react-highlighter":140}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = (function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

		_this.state = _FooterStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Footer, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_FooterStore2.default.listen(this.onChange);
			_FooterActions2.default.getTopCharacters();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_FooterStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var style = { 'textAlign': 'center' };
			return _react2.default.createElement(
				'footer',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(
						'div',
						{ style: style, className: 'row' },
						_react2.default.createElement(
							'h4',
							null,
							'Powered by ',
							_react2.default.createElement(
								'strong',
								null,
								'Node.js'
							),
							', ',
							_react2.default.createElement(
								'strong',
								null,
								'Solr'
							),
							' and ',
							_react2.default.createElement(
								'strong',
								null,
								'React'
							),
							' with Flux architecture and server-side rendering.'
						),
						_react2.default.createElement(
							'p',
							null,
							'Based on this ',
							_react2.default.createElement(
								'a',
								{ href: 'https://github.com/sahat/newedenfaces-react' },
								'Repository'
							),
							' on GitHub.'
						),
						_react2.default.createElement(
							'p',
							null,
							'© IR 2015 ',
							_react2.default.createElement(
								'strong',
								null,
								'Miguel Vicente'
							),
							' & ',
							_react2.default.createElement(
								'strong',
								null,
								'Vasco Santos'
							)
						)
					)
				)
			);
		}
	}]);

	return Footer;
})(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":2,"../stores/FooterStore":24,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var style = { 'textAlign': 'center' };
      return _react2.default.createElement(
        'div',
        { className: 'container', style: style },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-lg-12 text-center' },
            _react2.default.createElement(
              'h2',
              { className: 'section-heading' },
              'Information Retrieval Assignment 3'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container row' },
          _react2.default.createElement('img', { className: 'text-center', src: '/img/RI3_Diagram3.png' })
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;

},{"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _Autocomplete = require('./Autocomplete');

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.socket = null;
    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);

      this.socket = io.connect();

      this.socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.removeListener('onlineUsers');
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'onClick',
    value: function onClick(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findQuery({
          stemmer: this.state.stemmerFlag,
          stopwords: this.state.stopwordFlag,
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            'IR 2015'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated searchForm', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group searchBar' },
              _react2.default.createElement('input', { id: 'bada', type: 'text', className: 'form-control', placeholder: 'query', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery, list: 'autocomplete_list' }),
              _react2.default.createElement(_Autocomplete2.default, null),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', onClick: _NavbarActions2.default.showAdvancedSearch },
                'Advanced',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              ' '
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'badge badge-up' },
            this.state.onlineUsers,
            ' on'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'advanced-search', className: 'col-md-3 col-md-offset-1' },
          _react2.default.createElement(
            _reactCollapse2.default,
            { isOpened: this.state.showAdvanced, fixedHeight: 270 },
            _react2.default.createElement(
              'div',
              { id: 'optionsContainer' },
              'Available parameters',
              _react2.default.createElement(
                'div',
                { id: 'speaker', className: 'input-group searchBar' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Speaker', value: this.state.speakerParam, onChange: _NavbarActions2.default.updateSpeakerParam })
              ),
              _react2.default.createElement(
                'div',
                { id: 'range', className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-1' },
                  _react2.default.createElement(_Calendar2.default, { id: 'From' }),
                  _react2.default.createElement(_Calendar2.default, { id: 'To' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-group' },
                  _react2.default.createElement('input', { type: 'checkbox', value: this.state.yearFlag, onClick: _NavbarActions2.default.toggleYearFlag }),
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Use year only'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { id: 'stemmer', className: 'input-group' },
                _react2.default.createElement('input', { type: 'checkbox', checked: this.state.stemmerFlag, value: this.state.stemmerFlag, onClick: _NavbarActions2.default.toggleStemmer }),
                _react2.default.createElement(
                  'strong',
                  null,
                  ' Use Stemmer'
                )
              ),
              _react2.default.createElement(
                'div',
                { id: 'stop-words', className: 'input-group' },
                _react2.default.createElement('input', { type: 'checkbox', checked: this.state.stopwordFlag, value: this.state.stopwordFlag, onClick: _NavbarActions2.default.toggleStopwords }),
                _react2.default.createElement(
                  'strong',
                  null,
                  ' Use Stopword filter'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":3,"../stores/NavbarStore":25,"./Autocomplete":10,"./Calendar":11,"react":"react","react-collapse":136,"react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchFilter = require('./SearchFilter');

var _SearchFilter2 = _interopRequireDefault(_SearchFilter);

var _SearchResults = require('./SearchResults');

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _SearchPreview = require('./SearchPreview');

var _SearchPreview2 = _interopRequireDefault(_SearchPreview);

var _SearchMLT = require('./SearchMLT');

var _SearchMLT2 = _interopRequireDefault(_SearchMLT);

var _reactRouter = require('react-router');

var _SearchStore = require('../stores/SearchStore');

var _SearchStore2 = _interopRequireDefault(_SearchStore);

var _SearchActions = require('../actions/SearchActions');

var _SearchActions2 = _interopRequireDefault(_SearchActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

		_this.state = _SearchStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			_SearchStore2.default.listen(this.onChange);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_SearchStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			console.log("update");
			//io.connect().emit('search:filterSpeaker', this.props.params.query);
			//SearchActions.updateQuery(this.props.params.query);
		}
	}, {
		key: 'handlePreview',
		value: function handlePreview(data) {
			_SearchActions2.default.updateContent({
				data: data.content,
				docId: data.docId,
				id: data.id,
				query: this.props.params.query
			});
		}
	}, {
		key: 'handlePreviewMLT',
		value: function handlePreviewMLT(data) {
			_SearchActions2.default.updateMLTContent({
				data: data.content,
				docId: data.docID
			});
		}
	}, {
		key: 'handleFilters',
		value: function handleFilters(data) {
			_SearchActions2.default.updateFilterQuery(data);
		}
	}, {
		key: 'render',
		value: function render() {
			var classicalStyle = { display: "inline", width: "100%" };
			return _react2.default.createElement(
				'div',
				{ style: classicalStyle, key: this.props.params.query },
				_react2.default.createElement(_SearchFilter2.default, { query: this.props.params.query, stemmer: this.props.location.query.stemmer, stopwords: this.props.location.query.stopwords, filter: this.handleFilters }),
				_react2.default.createElement(_SearchResults2.default, { key: this.state.filterQuery, history: this.props.history, query: this.props.params.query, stemmer: this.props.location.query.stemmer, stopwords: this.props.location.query.stopwords, filter: this.state.filterQuery, content: this.handlePreview.bind(this) }),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_SearchPreview2.default, { key: this.state.content, content: this.state.content, query: this.state.query, docId: this.state.docId }),
					_react2.default.createElement(_SearchMLT2.default, { key: this.state.id, id: this.state.id, stemmer: this.props.location.query.stemmer, stopwords: this.props.location.query.stopwords, contentMLT: this.handlePreviewMLT.bind(this) })
				)
			);
		}
	}]);

	return Search;
})(_react2.default.Component);

exports.default = Search;

},{"../actions/SearchActions":4,"../stores/SearchStore":29,"./SearchFilter":17,"./SearchMLT":18,"./SearchPreview":19,"./SearchResults":20,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCheckboxList = require('react-checkbox-list');

var _reactCheckboxList2 = _interopRequireDefault(_reactCheckboxList);

var _SearchFilterStore = require('../stores/SearchFilterStore');

var _SearchFilterStore2 = _interopRequireDefault(_SearchFilterStore);

var _SearchFilterActions = require('../actions/SearchFilterActions');

var _SearchFilterActions2 = _interopRequireDefault(_SearchFilterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchFilter = (function (_React$Component) {
	_inherits(SearchFilter, _React$Component);

	function SearchFilter(props) {
		_classCallCheck(this, SearchFilter);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchFilter).call(this, props));

		_this.socket = null;
		_this.state = _SearchFilterStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(SearchFilter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_SearchFilterStore2.default.listen(this.onChange);
			this.socket = io.connect();
			this.socket.emit('search:filter', this.props.query);
			this.socket.on('search:filter', function (data) {
				_SearchFilterActions2.default.updateFilterResults(data);
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.socket.removeListener('search:filter');
			_SearchFilterStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleCheckboxSpeakerChange',
		value: function handleCheckboxSpeakerChange(values) {
			this.props.filter({ speaker: values });
		}
	}, {
		key: 'handleCheckboxLanguageChange',
		value: function handleCheckboxLanguageChange(values) {
			this.props.filter({ language: values });
		}
	}, {
		key: 'handleCheckboxYearChange',
		value: function handleCheckboxYearChange(values) {
			this.props.filter({ year: values });
		}
	}, {
		key: 'render',
		value: function render() {
			var containerStyle = { float: "left", width: "20%" };

			var speakers = [];
			this.state.speakerQuery.map(function (speaker) {
				if (speaker.freq != 0 && speakers.length < 10) {
					var identifier = speaker.item + ' (' + speaker.freq + ')';
					var res = { value: speaker.item, label: identifier };
					speakers.push(res);
				}
			});

			var years = [];
			this.state.yearQuery.map(function (year) {
				if (year.freq != 0 && years.length < 10) {
					var identifier = year.item + ' (' + year.freq + ')';
					var res = { value: year.item, label: identifier };
					years.push(res);
				}
			});

			var languages = [];
			this.state.langQuery.map(function (lang) {
				if (lang.freq != 0 && languages.length < 10) {
					var identifier = lang.item + ' (' + lang.freq + ')';
					var res = { value: lang.item, label: identifier };
					languages.push(res);
				}
			});

			var speaker = speakers.length > 0 ? "Speakers:" : " ";
			var year = years.length > 0 ? "Years: " : " ";
			var language = languages.length > 0 ? "Languages: " : " ";

			return _react2.default.createElement(
				'div',
				{ key: this.state.speakerQuery, style: containerStyle },
				_react2.default.createElement(
					'h3',
					null,
					'Search Filters'
				),
				speaker,
				_react2.default.createElement(_reactCheckboxList2.default, { ref: 'chkboxList', defaultData: speakers, onChange: this.handleCheckboxSpeakerChange.bind(this) }),
				language,
				_react2.default.createElement(_reactCheckboxList2.default, { ref: 'chkboxList', defaultData: languages, onChange: this.handleCheckboxLanguageChange.bind(this) }),
				year,
				_react2.default.createElement(_reactCheckboxList2.default, { ref: 'chkboxList', defaultData: years, onChange: this.handleCheckboxYearChange.bind(this) })
			);
		}
	}]);

	return SearchFilter;
})(_react2.default.Component);

exports.default = SearchFilter;

},{"../actions/SearchFilterActions":5,"../stores/SearchFilterStore":26,"react":"react","react-checkbox-list":134}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _SearchMLTStore = require('../stores/SearchMLTStore');

var _SearchMLTStore2 = _interopRequireDefault(_SearchMLTStore);

var _SearchMLTActions = require('../actions/SearchMLTActions');

var _SearchMLTActions2 = _interopRequireDefault(_SearchMLTActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchMLT = (function (_React$Component) {
	_inherits(SearchMLT, _React$Component);

	function SearchMLT(props) {
		_classCallCheck(this, SearchMLT);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchMLT).call(this, props));

		_this.socket = null;
		_this.state = _SearchMLTStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(SearchMLT, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_SearchMLTStore2.default.listen(this.onChange);
			this.socket = io.connect();
			var query = "id:" + this.props.id;
			var buildQuery = { query: query, stemmer: this.props.stemmer, stopwords: this.props.stopwords };
			this.socket.emit('search:mlt', buildQuery);
			this.socket.on('search:mlt', function (data) {
				_SearchMLTActions2.default.updateQueryResults(data[_this2.props.id]);
			});

			//updateQueryResults(data);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.socket.removeListener('search:mlt');
			_SearchMLTStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'previewMLTDocument',
		value: function previewMLTDocument(item, item2, e) {
			this.props.contentMLT({
				content: item,
				docId: item2
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var divStyle = { "maxWidth": "100%" };
			var containerStyle = { float: "left", width: "40%" };

			var docs = this.state.queryResults.map(function (doc) {
				return _react2.default.createElement(
					'div',
					{ onClick: _this3.previewMLTDocument.bind(_this3, doc.content, doc.docIdentifier), style: divStyle, className: 'list-group-item animated fadeIn' },
					_react2.default.createElement(_Document2.default, { className: 'media', docID: doc.docIdentifier, speaker: doc.speaker, date: doc.date })
				);
			});

			return _react2.default.createElement(
				'div',
				{ style: containerStyle },
				_react2.default.createElement(
					'h4',
					null,
					'More results like this:'
				),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					{ style: divStyle, className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'list-group' },
						docs
					)
				)
			);
		}
	}]);

	return SearchMLT;
})(_react2.default.Component);

exports.default = SearchMLT;

},{"../actions/SearchMLTActions":6,"../stores/SearchMLTStore":27,"./Document":12,"react":"react","react-paginate":161}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlighter = require('react-highlighter');

var _reactHighlighter2 = _interopRequireDefault(_reactHighlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPreview = (function (_React$Component) {
	_inherits(SearchPreview, _React$Component);

	function SearchPreview(props) {
		_classCallCheck(this, SearchPreview);

		//this.state = SearchResultsStore.getState();

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchPreview).call(this, props));

		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(SearchPreview, [{
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var containerStyle = { float: "left", width: "40%", minHeight: "80%" };
			return _react2.default.createElement(
				'div',
				{ style: containerStyle, className: 'panel panel-default' },
				_react2.default.createElement(
					'div',
					{ className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						{ className: 'panel-title' },
						this.props.docId
					)
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactHighlighter2.default,
						{ search: this.props.query },
						this.props.content
					)
				)
			);
		}
	}]);

	return SearchPreview;
})(_react2.default.Component);

exports.default = SearchPreview;

},{"react":"react","react-highlighter":140}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _SearchResultsStore = require('../stores/SearchResultsStore');

var _SearchResultsStore2 = _interopRequireDefault(_SearchResultsStore);

var _SearchResultsActions = require('../actions/SearchResultsActions');

var _SearchResultsActions2 = _interopRequireDefault(_SearchResultsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResults = (function (_React$Component) {
	_inherits(SearchResults, _React$Component);

	function SearchResults(props) {
		_classCallCheck(this, SearchResults);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResults).call(this, props));

		_this.socket = null;
		_this.state = _SearchResultsStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(SearchResults, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_SearchResultsStore2.default.listen(this.onChange);

			console.log(this.props.history);

			this.socket = io.connect();
			var query = '' + this.props.query + this.props.filter;
			var buildQuery = { query: query, start: this.state.selected, rows: this.state.perPage, stemmer: this.props.stemmer, stopwords: this.props.stopwords };
			this.socket.emit('search:query', buildQuery);
			this.socket.on('search:query', function (data) {
				if (data.results.numFound == 0) {
					_this2.socket.emit('search:wym', buildQuery);
					_this2.socket.on('search:wym', function (data) {
						_SearchResultsActions2.default.updateDidYouMean(data);
					});
				} else {
					_SearchResultsActions2.default.updateQueryResults(data);
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.socket.removeListener('search:query');
			this.socket.removeListener('search:wym');
			_SearchResultsStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			//console.log('update');
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'previewDocument',
		value: function previewDocument(item, item2, item3, e) {
			this.props.content({
				content: item,
				docId: item2,
				id: item3
			});
		}
	}, {
		key: 'selectedSuggestion',
		value: function selectedSuggestion(item, e) {
			this.props.history.pushState(item, '/search/' + item + '?stemmer=' + this.props.stemmer + '&stopwords=' + this.props.stopwords);
		}
	}, {
		key: 'handlePageClick',
		value: function handlePageClick(data) {
			var query = '' + this.props.query + this.props.filter;
			var buildQuery = { query: query, start: data.selected, rows: this.state.perPage, stemmer: this.props.stemmer, stopwords: this.props.stopwords };
			io.connect().emit('search:query', buildQuery);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var divStyle = { "maxWidth": "100%" };
			var containerStyle = { float: "left", width: "40%" };
			var i = 0;

			var docs = this.state.queryResults.map(function (doc) {
				var queryHighlight = _this3.state.queryHighlights[doc.id];
				var highlight = Object.keys(queryHighlight).length === 0 ? "" : queryHighlight.content[0];
				//let highlight = this.state.queryHighlights[doc.id].content[0];
				return _react2.default.createElement(
					'div',
					{ onClick: _this3.previewDocument.bind(_this3, doc.content, doc.docIdentifier, doc.id), style: divStyle, className: 'list-group-item animated fadeIn' },
					_react2.default.createElement(_Document2.default, { className: 'media', docID: doc.docIdentifier, speaker: doc.speaker, date: doc.date, highlight: highlight })
				);
			});

			var wdym = this.state.wymResults.map(function (result) {
				var suggestions = result.suggestions.map(function (suggest) {
					return _react2.default.createElement(
						'div',
						{ onClick: _this3.selectedSuggestion.bind(_this3, suggest.word) },
						_react2.default.createElement(
							'a',
							null,
							suggest.word
						)
					);
				});
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						'No results for ',
						_react2.default.createElement(
							'b',
							null,
							' ',
							result.term
						),
						'. Did you mean?'
					),
					suggestions
				);
			});

			return _react2.default.createElement(
				'div',
				{ style: containerStyle },
				this.state.numberOfDocuments,
				' results',
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'div',
					{ style: divStyle, className: 'container' },
					_react2.default.createElement(
						'div',
						{ className: 'list-group' },
						wdym,
						docs,
						_react2.default.createElement(_reactPaginate2.default, { previousLabel: "previous",
							nextLabel: "next",
							breakLabel: _react2.default.createElement(
								'li',
								{ className: 'break' },
								_react2.default.createElement(
									'a',
									{ href: '' },
									'...'
								)
							),
							pageNum: this.state.pageNum,
							marginPagesDisplayed: 2,
							pageRangeDisplayed: 5,
							clickCallback: this.handlePageClick.bind(this),
							containerClassName: "pagination",
							subContainerClassName: "pages pagination",
							activeClassName: "active" })
					)
				)
			);
		}
	}]);

	return SearchResults;
})(_react2.default.Component);

exports.default = SearchResults;

},{"../actions/SearchResultsActions":7,"../stores/SearchResultsStore":28,"./Document":12,"react":"react","react-paginate":161}],21:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)(); // Application Entry Point

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":22,"history/lib/createBrowserHistory":44,"react":"react","react-dom":"react-dom","react-router":"react-router"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Search = require('./components/Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/search/:query', component: _Search2.default })
);

},{"./components/App":9,"./components/Home":14,"./components/Search":16,"react":"react","react-router":"react-router"}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AutocompleteActions = require('../actions/AutocompleteActions');

var _AutocompleteActions2 = _interopRequireDefault(_AutocompleteActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutocompleteStore = (function () {
  function AutocompleteStore() {
    _classCallCheck(this, AutocompleteStore);

    this.bindActions(_AutocompleteActions2.default);
    this.autocomplete = [];
  }

  _createClass(AutocompleteStore, [{
    key: 'onUpdateQuerySugestions',
    value: function onUpdateQuerySugestions(data) {
      this.autocomplete = data;
    }
  }]);

  return AutocompleteStore;
})();

exports.default = _alt2.default.createStore(AutocompleteStore);

},{"../actions/AutocompleteActions":1,"../alt":8}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = (function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
    this.characters = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
})();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":2,"../alt":8}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.showAdvanced = false;
    this.showAutocomplete = false;
    this.speakerParam = '';
    this.stopwordFlag = true;
    this.stemmerFlag = true;
    this.showTime = false;
    this.rangeFrom = '';
    this.rangeTo = '';
    this.range = '';
    this.yearFlag = false;
  }

  _createClass(NavbarStore, [{
    key: 'onFindQuerySuccess',
    value: function onFindQuerySuccess(payload) {
      payload.history.pushState(payload.searchQuery, '/search/' + payload.searchQuery + '?stemmer=' + payload.stemmer + '&stopwords=' + payload.stopwords);
    }
  }, {
    key: 'onFindQueryFail',
    value: function onFindQueryFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;

      if (this.searchQuery) {
        io.connect().emit("search:ac", { query: this.searchQuery });
        this.showAutocomplete = true;
      } else {
        this.showAutocomplete = false;
      }
    }
  }, {
    key: 'onUpdateSpeakerParam',
    value: function onUpdateSpeakerParam(event) {
      var patt = / speaker:\w*/i;
      this.speakerParam = event.target.value;

      if (patt.test(this.searchQuery) == false) {
        this.searchQuery += " speaker:";
      } else {
        var newQuery = ' speaker:' + this.speakerParam;
        this.searchQuery = this.searchQuery.replace(patt, newQuery);
      }

      if (!event.target.value) {
        this.searchQuery = this.searchQuery.replace(patt, '');
      }
    }
  }, {
    key: 'onShowAdvancedSearch',
    value: function onShowAdvancedSearch(event) {
      this.showAdvanced = !this.showAdvanced;
    }
  }, {
    key: 'onToggleStemmer',
    value: function onToggleStemmer(event) {
      this.stemmerFlag = !this.stemmerFlag;
      console.log(this.stemmerFlag);
    }
  }, {
    key: 'onToggleStopwords',
    value: function onToggleStopwords(event) {
      this.stopwordFlag = !this.stopwordFlag;
      console.log(this.stemmerFlag);
    }
  }, {
    key: 'onShowTimeChange',
    value: function onShowTimeChange(event) {
      this.showTime = event.target.checked;
    }
  }, {
    key: 'onUpdateRange',
    value: function onUpdateRange(event) {
      var patt = / date:\[.+\]/i;

      if (event.id == 'From') {
        this.rangeFrom = event.date;
      } else {
        if (event.id == 'To') {
          this.rangeTo = event.date;
        }
      }

      if (this.rangeFrom != '' && this.rangeTo != '') {
        var range = function range(data) {
          var prefix = ' date:["';
          var separator = '" TO "';
          var suffix = '"]';
          var dateFrom = data.year ? data.from.substring(0, 4) : data.from.replace(' ', 'T') + 'Z';
          var dateTo = data.year ? data.to.substring(0, 4) : data.to.replace(' ', 'T') + 'Z';

          return prefix + dateFrom + separator + dateTo + suffix;
        };
        var data = { year: this.yearFlag, from: this.rangeFrom, to: this.rangeTo };
        if (patt.test(this.searchQuery) == false) {
          this.searchQuery += range(data);
        } else {
          this.searchQuery = this.searchQuery.replace(patt, range(data));
        }
      }
    }
  }, {
    key: 'onToggleYearFlag',
    value: function onToggleYearFlag(event) {
      this.yearFlag = !this.yearFlag;
      this.onUpdateRange({ event: '' });
    }
  }]);

  return NavbarStore;
})();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":3,"../alt":8}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _SearchFilterActions = require('../actions/SearchFilterActions');

var _SearchFilterActions2 = _interopRequireDefault(_SearchFilterActions);

var _SearchActions = require('../actions/SearchActions');

var _SearchActions2 = _interopRequireDefault(_SearchActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchFilterStore = (function () {
	function SearchFilterStore() {
		_classCallCheck(this, SearchFilterStore);

		this.bindActions(_SearchFilterActions2.default);

		this.speakerQuery = [];
		this.langQuery = [];
		this.yearQuery = [];
		this.filter = '';
	}

	_createClass(SearchFilterStore, [{
		key: 'onUpdateFilterResults',
		value: function onUpdateFilterResults(data) {
			this.speakerQuery = [];
			this.langQuery = [];
			this.yearQuery = [];
			for (var i = 0; i < data.speaker.length - 1; i += 2) {
				var speaker = {};
				speaker['item'] = data.speaker[i];
				speaker['freq'] = data.speaker[i + 1];
				this.speakerQuery.push(speaker);
			}
			for (var i = 0; i < data.language.length - 1; i += 2) {
				var lang = {};
				lang['item'] = data.language[i];
				lang['freq'] = data.language[i + 1];
				this.langQuery.push(lang);
			}
			for (var i = 0; i < data.year.length - 1; i += 2) {
				var year = {};
				year['item'] = data.year[i];
				year['freq'] = data.year[i + 1];
				this.yearQuery.push(year);
			}
		}
	}]);

	return SearchFilterStore;
})();

exports.default = _alt2.default.createStore(SearchFilterStore);

},{"../actions/SearchActions":4,"../actions/SearchFilterActions":5,"../alt":8}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _SearchMLTActions = require('../actions/SearchMLTActions');

var _SearchMLTActions2 = _interopRequireDefault(_SearchMLTActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchMLTStore = (function () {
	function SearchMLTStore() {
		_classCallCheck(this, SearchMLTStore);

		this.bindActions(_SearchMLTActions2.default);
		this.queryResults = [];
	}

	_createClass(SearchMLTStore, [{
		key: 'onUpdateQueryResults',
		value: function onUpdateQueryResults(data) {
			console.log(data);
			this.queryResults = data.docs;
		}
	}]);

	return SearchMLTStore;
})();

exports.default = _alt2.default.createStore(SearchMLTStore);

},{"../actions/SearchMLTActions":6,"../alt":8}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _SearchResultsActions = require('../actions/SearchResultsActions');

var _SearchResultsActions2 = _interopRequireDefault(_SearchResultsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchResultsStore = (function () {
	function SearchResultsStore() {
		_classCallCheck(this, SearchResultsStore);

		this.bindActions(_SearchResultsActions2.default);
		this.queryResults = [];
		this.queryHighlights = [];
		this.wymResults = [];
		this.numberOfDocuments = 0;
		this.pageNum = 0;
		this.perPage = 10;
		this.selected = 0;
	}

	_createClass(SearchResultsStore, [{
		key: 'onUpdateQueryResults',
		value: function onUpdateQueryResults(data) {
			this.wymResults = [];
			this.queryResults = data.results.docs;
			this.numberOfDocuments = data.results.numFound;
			this.queryHighlights = data.highlights;
			this.pageNum = Math.ceil(this.numberOfDocuments / this.perPage);
		}
	}, {
		key: 'onUpdateDidYouMean',
		value: function onUpdateDidYouMean(data) {
			this.queryResults = [];
			this.numberOfDocuments = 0;

			for (var i = 0; i < data.length - 1; i += 2) {
				var wdym = {};
				wdym['term'] = data[i];
				if (data[i + 1]) {
					wdym['suggestions'] = data[i + 1].suggestion;
				} else wdym['suggestions'] = [];
				this.wymResults.push(wdym);
			}
		}
	}]);

	return SearchResultsStore;
})();

exports.default = _alt2.default.createStore(SearchResultsStore);

},{"../actions/SearchResultsActions":7,"../alt":8}],29:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _SearchActions = require('../actions/SearchActions');

var _SearchActions2 = _interopRequireDefault(_SearchActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchStore = (function () {
	function SearchStore() {
		_classCallCheck(this, SearchStore);

		this.bindActions(_SearchActions2.default);
		this.filterQuery = '';
		this.content = "";
		this.query = "";
		this.docId = "";
		this.id = "";

		this.selectedSpeakers = [];
		this.selectedYears = [];
		this.selectedLanguages = [];
	}

	_createClass(SearchStore, [{
		key: 'onUpdateMLTContent',
		value: function onUpdateMLTContent(data) {
			this.content = data.data;
			this.docId = data.docId;
		}
	}, {
		key: 'onUpdateContent',
		value: function onUpdateContent(data) {
			this.query = data.query;
			this.content = data.data;
			this.docId = data.docId;
			this.id = data.id;
		}
	}, {
		key: 'onUpdateFilterQuery',
		value: function onUpdateFilterQuery(data) {
			this.content = "";
			this.docId = "";
			this.id = "";
			if ('speaker' in data) {
				this.selectedSpeakers = data['speaker'];
			} else if ('language' in data) {
				this.selectedLanguages = data['language'];
			} else {
				this.selectedYears = data['year'];
			}
			this.updateQuery();
		}
	}, {
		key: 'updateQuery',
		value: function updateQuery() {
			// Build new query
			// Query AND (speaker: Flemming OR speaker: President) AND language: EN
			var res = '';
			if (this.selectedSpeakers.length > 0) {
				res += ' AND (';
				this.selectedSpeakers.map(function (speaker) {
					res += 'speaker: "' + speaker + '" OR ';
				});
				res = res.slice(0, -4);
				res += ')';
			}
			if (this.selectedYears.length > 0) {
				res += ' AND (';
				this.selectedYears.map(function (year) {
					res += 'year: ' + year + ' OR ';
				});
				res = res.slice(0, -4);
				res += ')';
			}
			if (this.selectedLanguages.length > 0) {
				res += ' AND (';
				this.selectedLanguages.map(function (language) {
					res += 'language: ' + language + ' OR ';
				});
				res = res.slice(0, -4);
				res += ') ';
			}
			this.filterQuery = res;
		}
	}]);

	return SearchStore;
})();

exports.default = _alt2.default.createStore(SearchStore);

},{"../actions/SearchActions":4,"../alt":8}],30:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],31:[function(require,module,exports){
/**
 * @ignore
 * DateTimeFormat for
 * Inspired by DateTimeFormat from JDK.
 * @author yiminghe@gmail.com
 */

'use strict';

var GregorianCalendar = require('gregorian-calendar');
var enUsLocale = require('./locale/en_US');
var MAX_VALUE = Number.MAX_VALUE;
var warning = require('warning');

/**
 * date or time style enum
 * @enum {Number} Date.Formatter.Style
 */
var DateTimeStyle = {
  /**
   * full style
   */
  FULL: 0,
  /**
   * long style
   */
  LONG: 1,
  /**
   * medium style
   */
  MEDIUM: 2,
  /**
   * short style
   */
  SHORT: 3
};

/*
 Letter    Date or Time Component    Presentation    Examples
 G    Era designator    Text    AD
 y    Year    Year    1996; 96
 M    Month in year    Month    July; Jul; 07
 w    Week in year    Number    27
 W    Week in month    Number    2
 D    Day in year    Number    189
 d    Day in month    Number    10
 F    Day of week in month    Number    2
 E    Day in week    Text    Tuesday; Tue
 a    Am/pm marker    Text    PM
 H    Hour in day (0-23)    Number    0
 k    Hour in day (1-24)    Number    24
 K    Hour in am/pm (0-11)    Number    0
 h    Hour in am/pm (1-12)    Number    12
 m    Minute in hour    Number    30
 s    Second in minute    Number    55
 S    Millisecond    Number    978
 x z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
 Z    Time zone    RFC 822 time zone    -0800
 */

var patternChars = new Array(GregorianCalendar.DAY_OF_WEEK_IN_MONTH + 2).join('1');
var ERA = 0;
var calendarIndexMap = {};

patternChars = patternChars.split('');
patternChars[ERA] = 'G';
patternChars[GregorianCalendar.YEAR] = 'y';
patternChars[GregorianCalendar.MONTH] = 'M';
patternChars[GregorianCalendar.DAY_OF_MONTH] = 'd';
patternChars[GregorianCalendar.HOUR_OF_DAY] = 'H';
patternChars[GregorianCalendar.MINUTES] = 'm';
patternChars[GregorianCalendar.SECONDS] = 's';
patternChars[GregorianCalendar.MILLISECONDS] = 'S';
patternChars[GregorianCalendar.WEEK_OF_YEAR] = 'w';
patternChars[GregorianCalendar.WEEK_OF_MONTH] = 'W';
patternChars[GregorianCalendar.DAY_OF_YEAR] = 'D';
patternChars[GregorianCalendar.DAY_OF_WEEK_IN_MONTH] = 'F';

(function init() {
  for (var index in patternChars) {
    if (patternChars.hasOwnProperty(index)) {
      calendarIndexMap[patternChars[index]] = index;
    }
  }
})();

function mix(t, s) {
  for (var p in s) {
    if (s.hasOwnProperty(p)) {
      t[p] = s[p];
    }
  }
}

var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
var EMPTY = '';

function substitute(str, o, regexp) {
  if (typeof str !== 'string' || !o) {
    return str;
  }

  return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }
    return o[name] === undefined ? EMPTY : o[name];
  });
}

patternChars = patternChars.join('') + 'ahkKZE';

function encode(lastField, count, compiledPattern) {
  compiledPattern.push({
    field: lastField,
    count: count
  });
}

function compile(pattern) {
  var length = pattern.length;
  var inQuote = false;
  var compiledPattern = [];
  var tmpBuffer = null;
  var count = 0;
  var lastField = -1;

  for (var i = 0; i < length; i++) {
    var c = pattern.charAt(i);

    if (c === '\'') {
      // '' is treated as a single quote regardless of being
      // in a quoted section.
      if (i + 1 < length) {
        c = pattern.charAt(i + 1);
        if (c === '\'') {
          i++;
          if (count !== 0) {
            encode(lastField, count, compiledPattern);
            lastField = -1;
            count = 0;
          }
          if (inQuote) {
            tmpBuffer += c;
          }
          continue;
        }
      }
      if (!inQuote) {
        if (count !== 0) {
          encode(lastField, count, compiledPattern);
          lastField = -1;
          count = 0;
        }
        tmpBuffer = '';
        inQuote = true;
      } else {
        compiledPattern.push({
          text: tmpBuffer
        });
        inQuote = false;
      }
      continue;
    }
    if (inQuote) {
      tmpBuffer += c;
      continue;
    }
    if (!(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')) {
      if (count !== 0) {
        encode(lastField, count, compiledPattern);
        lastField = -1;
        count = 0;
      }
      compiledPattern.push({
        text: c
      });
      continue;
    }

    if (patternChars.indexOf(c) === -1) {
      throw new Error('Illegal pattern character "' + c + '"');
    }

    if (lastField === -1 || lastField === c) {
      lastField = c;
      count++;
      continue;
    }
    encode(lastField, count, compiledPattern);
    lastField = c;
    count = 1;
  }

  if (inQuote) {
    throw new Error('Unterminated quote');
  }

  if (count !== 0) {
    encode(lastField, count, compiledPattern);
  }

  return compiledPattern;
}

var zeroDigit = '0';

// TODO zeroDigit localization??
function zeroPaddingNumber(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var value = _x,
        minDigits = _x2,
        maxDigits_ = _x3,
        b = _x4;
    _again = false;

    // Optimization for 1, 2 and 4 digit numbers. This should
    // cover most cases of formatting date/time related items.
    // Note: This optimization code assumes that maxDigits is
    // either 2 or Integer.MAX_VALUE (maxIntCount in format()).
    var buffer = b || [];
    var maxDigits = maxDigits_ || MAX_VALUE;
    if (value >= 0) {
      if (value < 100 && minDigits >= 1 && minDigits <= 2) {
        if (value < 10 && minDigits === 2) {
          buffer.push(zeroDigit);
        }
        buffer.push(value);
        return buffer.join('');
      } else if (value >= 1000 && value < 10000) {
        if (minDigits === 4) {
          buffer.push(value);
          return buffer.join('');
        }
        if (minDigits === 2 && maxDigits === 2) {
          _x = value % 100;
          _x2 = 2;
          _x3 = 2;
          _x4 = buffer;
          _again = true;
          buffer = maxDigits = undefined;
          continue _function;
        }
      }
    }
    buffer.push(value + '');
    return buffer.join('');
  }
}

/**
 *
 * date time formatter for GregorianCalendar
 *
 *      @example
 *
 *          const calendar = new GregorianCalendar(2013,9,24);
 *          // ' to escape
 *          const formatter = new GregorianCalendarFormat("'today is' ''yyyy/MM/dd a''");
 *          document.write(formatter.format(calendar));
 *
 * @class GregorianCalendarFormat
 * @param {String} pattern patter string of date formatter
 *
 * <table border="1">
 * <thead valign="bottom">
 * <tr><th class="head">Letter</th>
 * <th class="head">Date or Time Component</th>
 * <th class="head">Presentation</th>
 * <th class="head">Examples</th>
 * </tr>
 * </thead>
 * <tbody valign="top">
 * <tr><td>G</td>
 * <td>Era designator</td>
 * <td>Text</td>
 * <td>AD</td>
 * </tr>
 * <tr><td>y</td>
 * <td>Year</td>
 * <td>Year</td>
 * <td>1996; 96</td>
 * </tr>
 * <tr><td>M</td>
 * <td>Month in year</td>
 * <td>Month</td>
 * <td>July; Jul; 07</td>
 * </tr>
 * <tr><td>w</td>
 * <td>Week in year</td>
 * <td>Number</td>
 * <td>27</td>
 * </tr>
 * <tr><td>W</td>
 * <td>Week in month</td>
 * <td>Number</td>
 * <td>2</td>
 * </tr>
 * <tr><td>D</td>
 * <td>Day in year</td>
 * <td>Number</td>
 * <td>189</td>
 * </tr>
 * <tr><td>d</td>
 * <td>Day in month</td>
 * <td>Number</td>
 * <td>10</td>
 * </tr>
 * <tr><td>F</td>
 * <td>Day of week in month</td>
 * <td>Number</td>
 * <td>2</td>
 * </tr>
 * <tr><td>E</td>
 * <td>Day in week</td>
 * <td>Text</td>
 * <td>Tuesday; Tue</td>
 * </tr>
 * <tr><td>a</td>
 * <td>Am/pm marker</td>
 * <td>Text</td>
 * <td>PM</td>
 * </tr>
 * <tr><td>H</td>
 *       <td>Hour in day (0-23)</td>
 * <td>Number</td>
 * <td>0</td>
 * </tr>
 * <tr><td>k</td>
 *       <td>Hour in day (1-24)</td>
 * <td>Number</td>
 * <td>24</td>
 * </tr>
 * <tr><td>K</td>
 * <td>Hour in am/pm (0-11)</td>
 * <td>Number</td>
 * <td>0</td>
 * </tr>
 * <tr><td>h</td>
 * <td>Hour in am/pm (1-12)</td>
 * <td>Number</td>
 * <td>12</td>
 * </tr>
 * <tr><td>m</td>
 * <td>Minute in hour</td>
 * <td>Number</td>
 * <td>30</td>
 * </tr>
 * <tr><td>s</td>
 * <td>Second in minute</td>
 * <td>Number</td>
 * <td>55</td>
 * </tr>
 * <tr><td>S</td>
 * <td>Millisecond</td>
 * <td>Number</td>
 * <td>978</td>
 * </tr>
 * <tr><td>x/z</td>
 * <td>Time zone</td>
 * <td>General time zone</td>
 * <td>Pacific Standard Time; PST; GMT-08:00</td>
 * </tr>
 * <tr><td>Z</td>
 * <td>Time zone</td>
 * <td>RFC 822 time zone</td>
 * <td>-0800</td>
 * </tr>
 * </tbody>
 * </table>

 * @param {Object} locale format locale
 */
function DateTimeFormat(pattern, locale) {
  this.locale = locale || enUsLocale;
  this.originalPattern = pattern;
  this.pattern = compile(pattern);
}

function formatField(field, count, locale, calendar) {
  var current = undefined;
  var value = undefined;
  switch (field) {
    case 'G':
      value = calendar.getYear() > 0 ? 1 : 0;
      current = locale.eras[value];
      break;
    case 'y':
      value = calendar.getYear();
      if (value <= 0) {
        value = 1 - value;
      }
      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
      break;
    case 'M':
      value = calendar.getMonth();
      if (count >= 4) {
        current = locale.months[value];
      } else if (count === 3) {
        current = locale.shortMonths[value];
      } else {
        current = zeroPaddingNumber(value + 1, count);
      }
      break;
    case 'k':
      current = zeroPaddingNumber(calendar.getHourOfDay() || 24, count);
      break;
    case 'E':
      value = calendar.getDayOfWeek();
      current = count >= 4 ? locale.weekdays[value] : locale.shortWeekdays[value];
      break;
    case 'a':
      current = locale.ampms[calendar.getHourOfDay() >= 12 ? 1 : 0];
      break;
    case 'h':
      current = zeroPaddingNumber(calendar.getHourOfDay() % 12 || 12, count);
      break;
    case 'K':
      current = zeroPaddingNumber(calendar.getHourOfDay() % 12, count);
      break;
    case 'Z':
      var offset = calendar.getTimezoneOffset();
      var parts = [offset < 0 ? '-' : '+'];
      offset = Math.abs(offset);
      parts.push(zeroPaddingNumber(Math.floor(offset / 60) % 100, 2), zeroPaddingNumber(offset % 60, 2));
      current = parts.join('');
      break;
    default:
      // case 'd':
      // case 'H':
      // case 'm':
      // case 's':
      // case 'S':
      // case 'D':
      // case 'F':
      // case 'w':
      // case 'W':
      var index = calendarIndexMap[field];
      value = calendar.get(index);
      current = zeroPaddingNumber(value, count);
  }
  return current;
}

function matchPartString(dateStr, startIndex, match, mLen) {
  for (var i = 0; i < mLen; i++) {
    if (dateStr.charAt(startIndex + i) !== match.charAt(i)) {
      return false;
    }
  }
  return true;
}

function matchField(dateStr, startIndex, matches) {
  var matchedLen = -1;
  var index = -1;
  var i = undefined;
  var len = matches.length;
  for (i = 0; i < len; i++) {
    var m = matches[i];
    var mLen = m.length;
    if (mLen > matchedLen && matchPartString(dateStr, startIndex, m, mLen)) {
      matchedLen = mLen;
      index = i;
    }
  }
  return index >= 0 ? {
    value: index,
    startIndex: startIndex + matchedLen
  } : null;
}

function getLeadingNumberLen(str) {
  var i = undefined;
  var c = undefined;
  var len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charAt(i);
    if (c < '0' || c > '9') {
      break;
    }
  }
  return i;
}

function matchNumber(dateStr, startIndex, count, obeyCount) {
  var str = dateStr;
  var n = undefined;
  if (obeyCount) {
    if (dateStr.length < startIndex + count) {
      return null;
    }
    str = dateStr.slice(startIndex, startIndex + count);
    if (!str.match(/^\d+$/)) {
      throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
    }
  } else {
    str = str.slice(startIndex);
  }
  n = parseInt(str, 10);
  if (isNaN(n)) {
    throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
  }
  return {
    value: n,
    startIndex: startIndex + getLeadingNumberLen(str)
  };
}

function parseField(calendar, dateStr, startIndex_, field, count, obeyCount, tmp) {
  var match = undefined;
  var year = undefined;
  var hour = undefined;
  var startIndex = startIndex_;
  if (dateStr.length <= startIndex) {
    return startIndex;
  }
  var locale = this.locale;
  switch (field) {
    case 'G':
      match = matchField(dateStr, startIndex, locale.eras);
      if (match) {
        if (calendar.isSetYear()) {
          if (match.value === 0) {
            year = calendar.getYear();
            calendar.setYear(1 - year);
          }
        } else {
          tmp.era = match.value;
        }
      }
      break;
    case 'y':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        year = match.value;
        if ('era' in tmp) {
          if (tmp.era === 0) {
            year = 1 - year;
          }
        }
        calendar.setYear(year);
      }
      break;
    case 'M':
      var month = undefined;
      if (count >= 3) {
        match = matchField(dateStr, startIndex, locale[count === 3 ? 'shortMonths' : 'months']);
        if (match) {
          month = match.value;
        }
      } else {
        match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
        if (match) {
          month = match.value - 1;
        }
      }
      if (match) {
        calendar.setMonth(month);
      }
      break;
    case 'k':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        calendar.setHourOfDay(match.value % 24);
      }
      break;
    case 'E':
      match = matchField(dateStr, startIndex, locale[count > 3 ? 'weekdays' : 'shortWeekdays']);
      if (match) {
        calendar.setDayOfWeek(match.value);
      }
      break;
    case 'a':
      match = matchField(dateStr, startIndex, locale.ampms);
      if (match) {
        if (calendar.isSetHourOfDay()) {
          if (match.value) {
            hour = calendar.getHourOfDay();
            if (hour < 12) {
              calendar.setHourOfDay((hour + 12) % 24);
            }
          }
        } else {
          tmp.ampm = match.value;
        }
      }
      break;
    case 'h':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        hour = match.value %= 12;
        if (tmp.ampm) {
          hour += 12;
        }
        calendar.setHourOfDay(hour);
      }
      break;
    case 'K':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        hour = match.value;
        if (tmp.ampm) {
          hour += 12;
        }
        calendar.setHourOfDay(hour);
      }
      break;
    case 'Z':
      // let sign = 1;
      var zoneChar = dateStr.charAt(startIndex);
      if (zoneChar === '-') {
        // sign = -1;
        startIndex++;
      } else if (zoneChar === '+') {
        startIndex++;
      } else {
        break;
      }
      match = matchNumber.call(this, dateStr, startIndex, 2, true);
      if (match) {
        var zoneOffset = match.value * 60;
        startIndex = match.startIndex;
        match = matchNumber.call(this, dateStr, startIndex, 2, true);
        if (match) {
          zoneOffset += match.value;
        }
        calendar.setTimezoneOffset(zoneOffset);
      }
      break;
    default:
      // case 'd':
      // case 'H':
      // case 'm':
      // case 's':
      // case 'S':
      // case 'D':
      // case 'F':
      // case 'w':
      // case 'W'
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        var index = calendarIndexMap[field];
        calendar.set(index, match.value);
      }
  }
  if (match) {
    startIndex = match.startIndex;
  }
  return startIndex;
}

mix(DateTimeFormat.prototype, {
  /*
   * format a GregorianDate instance according to specified pattern
   * @param {GregorianCalendar} calendar GregorianDate instance
   * @returns {string} formatted string of GregorianDate instance
   */
  format: function format(calendar) {
    if (!calendar.isGregorianCalendar) {
      throw new Error('calendar must be type of GregorianCalendar');
    }
    var i = undefined;
    var ret = [];
    var pattern = this.pattern;
    var len = pattern.length;
    for (i = 0; i < len; i++) {
      var comp = pattern[i];
      if (comp.text) {
        ret.push(comp.text);
      } else if ('field' in comp) {
        ret.push(formatField(comp.field, comp.count, this.locale, calendar));
      }
    }
    return ret.join('');
  },

  /*
   * parse a formatted string of GregorianDate instance according to specified pattern
   * @param {String} dateStr formatted string of GregorianDate
   * @returns {GregorianCalendar}
   */
  parse: function parse(dateStr, option_) {
    var option = option_ || {};
    var calendarLocale = option.locale;
    var calendar = new GregorianCalendar(calendarLocale);
    var i = undefined;
    var j = undefined;
    var tmp = {};
    var obeyCount = option.obeyCount || false;
    var dateStrLen = dateStr.length;
    var errorIndex = -1;
    var startIndex = 0;
    var oldStartIndex = 0;
    var pattern = this.pattern;
    var len = pattern.length;
    /* eslint no-labels: 0 no-empty-label:0 */
    loopPattern: {
      for (i = 0; errorIndex < 0 && i < len; i++) {
        var comp = pattern[i];
        var text = undefined;
        var textLen = undefined;
        oldStartIndex = startIndex;
        text = comp.text;
        if (text) {
          textLen = text.length;
          if (textLen + startIndex > dateStrLen) {
            errorIndex = startIndex;
          } else {
            for (j = 0; j < textLen; j++) {
              if (text.charAt(j) !== dateStr.charAt(j + startIndex)) {
                errorIndex = startIndex;
                break loopPattern;
              }
            }
            startIndex += textLen;
          }
        } else if ('field' in comp) {
          if (!option.obeyCount) {
            var nextComp = pattern[i + 1];
            obeyCount = false;
            if (nextComp) {
              if ('field' in nextComp) {
                obeyCount = true;
              } else {
                var c = nextComp.text.charAt(0);
                if (c >= '0' && c <= '9') {
                  obeyCount = true;
                }
              }
            }
          }
          startIndex = parseField.call(this, calendar, dateStr, startIndex, comp.field, comp.count, obeyCount, tmp);
          if (startIndex === oldStartIndex) {
            errorIndex = startIndex;
          }
        }
      }
    }

    if (errorIndex >= 0) {
      warning(false, 'error when parsing date: ' + dateStr + ', position: ' + dateStr.slice(0, errorIndex) + '^');
      return undefined;
    }
    return calendar;
  }
});

mix(DateTimeFormat, {
  Style: DateTimeStyle,

  /*
   * get a formatter instance of short style pattern.
   * en-us: M/d/yy h:mm a
   * zh-cn: yy-M-d ah:mm
   * @param {Object} locale locale object
   * @returns {GregorianCalendar}
   * @static
   */
  getInstance: function getInstance(locale) {
    return this.getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale);
  },

  /*
   * get a formatter instance of specified date style.
   * @param {Date.Formatter.Style} dateStyle date format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getDateInstance: function getDateInstance(dateStyle, locale) {
    return this.getDateTimeInstance(dateStyle, undefined, locale);
  },

  /*
   * get a formatter instance of specified date style and time style.
   * @param {Date.Formatter.Style} dateStyle date format style
   * @param {Date.Formatter.Style} timeStyle time format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getDateTimeInstance: function getDateTimeInstance(dateStyle, timeStyle, locale_) {
    var locale = locale_ || enUsLocale;
    var datePattern = '';
    if (dateStyle !== undefined) {
      datePattern = locale.datePatterns[dateStyle];
    }
    var timePattern = '';
    if (timeStyle !== undefined) {
      timePattern = locale.timePatterns[timeStyle];
    }
    var pattern = datePattern;
    if (timePattern) {
      if (datePattern) {
        pattern = substitute(locale.dateTimePattern, {
          date: datePattern,
          time: timePattern
        });
      } else {
        pattern = timePattern;
      }
    }
    return new DateTimeFormat(pattern, locale);
  },

  /*
   * get a formatter instance of specified time style.
   * @param {Date.Formatter.Style} timeStyle time format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getTimeInstance: function getTimeInstance(timeStyle, locale) {
    return this.getDateTimeInstance(undefined, timeStyle, locale);
  }
});

module.exports = DateTimeFormat;

DateTimeFormat.version = '@VERSION@';

// gc_format@163.com
},{"./locale/en_US":32,"gregorian-calendar":35,"warning":33}],32:[function(require,module,exports){
'use strict';

module.exports = {
  eras: ['BC', 'AD'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  veryShortWeekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  ampms: ['AM', 'PM'],
  datePatterns: ['EEEE, MMMM d, yyyy', 'MMMM d, yyyy', 'MMM d, yyyy', 'M/d/yy'],
  timePatterns: ['h:mm:ss a \'GMT\'Z', 'h:mm:ss a', 'h:mm:ss a', 'h:mm a'],
  dateTimePattern: '{date} {time}'
};
},{}],33:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":30}],34:[function(require,module,exports){
/*
 * @ignore
 * const for gregorian date
 * @author yiminghe@gmail.com
 */

"use strict";

module.exports = {
  /*
   * Enum indicating sunday
   * @type Number
   * @member Date.Gregorian
   */
  SUNDAY: 0,
  /*
   * Enum indicating monday
   * @type Number
   * @member Date.Gregorian
   */
  MONDAY: 1,
  /*
   * Enum indicating tuesday
   * @type Number
   * @member Date.Gregorian
   */
  TUESDAY: 2,
  /*
   * Enum indicating wednesday
   * @type Number
   * @member Date.Gregorian
   */
  WEDNESDAY: 3,
  /*
   * Enum indicating thursday
   * @type Number
   * @member Date.Gregorian
   */
  THURSDAY: 4,
  /*
   * Enum indicating friday
   * @type Number
   * @member Date.Gregorian
   */
  FRIDAY: 5,
  /*
   * Enum indicating saturday
   * @type Number
   * @member Date.Gregorian
   */
  SATURDAY: 6,
  /*
   * Enum indicating january
   * @type Number
   * @member Date.Gregorian
   */
  JANUARY: 0,
  /*
   * Enum indicating february
   * @type Number
   * @member Date.Gregorian
   */
  FEBRUARY: 1,
  /*
   * Enum indicating march
   * @type Number
   * @member Date.Gregorian
   */
  MARCH: 2,
  /*
   * Enum indicating april
   * @type Number
   * @member Date.Gregorian
   */
  APRIL: 3,
  /*
   * Enum indicating may
   * @type Number
   * @member Date.Gregorian
   */
  MAY: 4,
  /*
   * Enum indicating june
   * @type Number
   * @member Date.Gregorian
   */
  JUNE: 5,
  /*
   * Enum indicating july
   * @type Number
   * @member Date.Gregorian
   */
  JULY: 6,
  /*
   * Enum indicating august
   * @type Number
   * @member Date.Gregorian
   */
  AUGUST: 7,
  /*
   * Enum indicating september
   * @type Number
   * @member Date.Gregorian
   */
  SEPTEMBER: 8,
  /*
   * Enum indicating october
   * @type Number
   * @member Date.Gregorian
   */
  OCTOBER: 9,
  /*
   * Enum indicating november
   * @type Number
   * @member Date.Gregorian
   */
  NOVEMBER: 10,
  /*
   * Enum indicating december
   * @type Number
   * @member Date.Gregorian
   */
  DECEMBER: 11
};
},{}],35:[function(require,module,exports){
/*
 * GregorianCalendar class
 * @ignore
 * @author yiminghe@gmail.com
 */
'use strict';

var toInt = parseInt;
var Utils = require('./utils');
var defaultLocale = require('./locale/en_US');
var Const = require('./const');

/*
 * GregorianCalendar class.
 *
 * - no arguments:
 *   Constructs a default GregorianCalendar using the current time
 *   in the default time zone with the default locale.
 * - one argument locale:
 *   Constructs a GregorianCalendar
 *   based on the current time in the default time zone with the given locale.
 *
 * @class Date.Gregorian
 */
function GregorianCalendar(loc) {
  var locale = loc || defaultLocale;

  this.locale = locale;

  this.fields = [];

  /*
   * The currently set time for this date.
   * @protected
   * @type Number|undefined
   */
  this.time = undefined;
  /*
   * The timezoneOffset in minutes used by this date.
   * @type Number
   * @protected
   */

  this.timezoneOffset = locale.timezoneOffset;

  /*
   * The first day of the week
   * @type Number
   * @protected
   */
  this.firstDayOfWeek = locale.firstDayOfWeek;

  /*
   * The number of days required for the first week in a month or year,
   * with possible values from 1 to 7.
   * @@protected
   * @type Number
   */
  this.minimalDaysInFirstWeek = locale.minimalDaysInFirstWeek;

  this.fieldsComputed = false;
}

Utils.mix(GregorianCalendar, Const);

Utils.mix(GregorianCalendar, {
  Utils: Utils,

  defaultLocale: defaultLocale,

  /*
   * Determines if the given year is a leap year.
   * Returns true if the given year is a leap year. To specify BC year numbers,
   * 1 - year number must be given. For example, year BC 4 is specified as -3.
   * @param {Number} year the given year.
   * @returns {Boolean} true if the given year is a leap year; false otherwise.
   * @static
   * @method
   */
  isLeapYear: Utils.isLeapYear,

  /*
   * Enum indicating year field of date
   * @type Number
   */
  YEAR: 1,
  /*
   * Enum indicating month field of date
   * @type Number
   */
  MONTH: 2,
  /*
   * Enum indicating the day of the month
   * @type Number
   */
  DAY_OF_MONTH: 3,
  /*
   * Enum indicating the hour (24).
   * @type Number
   */
  HOUR_OF_DAY: 4,
  /*
   * Enum indicating the minute of the day
   * @type Number
   */
  MINUTES: 5,
  /*
   * Enum indicating the second of the day
   * @type Number
   */
  SECONDS: 6,
  /*
   * Enum indicating the millisecond of the day
   * @type Number
   */
  MILLISECONDS: 7,
  /*
   * Enum indicating the week number within the current year
   * @type Number
   */
  WEEK_OF_YEAR: 8,
  /*
   * Enum indicating the week number within the current month
   * @type Number
   */
  WEEK_OF_MONTH: 9,

  /*
   * Enum indicating the day of the day number within the current year
   * @type Number
   */
  DAY_OF_YEAR: 10,
  /*
   * Enum indicating the day of the week
   * @type Number
   */
  DAY_OF_WEEK: 11,
  /*
   * Enum indicating the day of the ordinal number of the day of the week
   * @type Number
   */
  DAY_OF_WEEK_IN_MONTH: 12,

  /*
   * Enum indicating am
   * @type Number
   */
  AM: 0,
  /*
   * Enum indicating pm
   * @type Number
   */
  PM: 1
});

var FIELDS = ['', 'Year', 'Month', 'DayOfMonth', 'HourOfDay', 'Minutes', 'Seconds', 'Milliseconds', 'WeekOfYear', 'WeekOfMonth', 'DayOfYear', 'DayOfWeek', 'DayOfWeekInMonth'];

var YEAR = GregorianCalendar.YEAR;
var MONTH = GregorianCalendar.MONTH;
var DAY_OF_MONTH = GregorianCalendar.DAY_OF_MONTH;
var HOUR_OF_DAY = GregorianCalendar.HOUR_OF_DAY;
var MINUTE = GregorianCalendar.MINUTES;
var SECONDS = GregorianCalendar.SECONDS;

var MILLISECONDS = GregorianCalendar.MILLISECONDS;
var DAY_OF_WEEK_IN_MONTH = GregorianCalendar.DAY_OF_WEEK_IN_MONTH;
var DAY_OF_YEAR = GregorianCalendar.DAY_OF_YEAR;
var DAY_OF_WEEK = GregorianCalendar.DAY_OF_WEEK;

var WEEK_OF_MONTH = GregorianCalendar.WEEK_OF_MONTH;
var WEEK_OF_YEAR = GregorianCalendar.WEEK_OF_YEAR;

var MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
var LEAP_MONTH_LENGTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based

var ONE_SECOND = 1000;
var ONE_MINUTE = 60 * ONE_SECOND;
var ONE_HOUR = 60 * ONE_MINUTE;
var ONE_DAY = 24 * ONE_HOUR;
var ONE_WEEK = ONE_DAY * 7;

var EPOCH_OFFSET = 719163; // Fixed date of January 1, 1970 (Gregorian)

var mod = Utils.mod;
var _isLeapYear = Utils.isLeapYear;
var floorDivide = Math.floor;

var MIN_VALUES = [undefined, 1, // YEAR
GregorianCalendar.JANUARY, // MONTH
1, // DAY_OF_MONTH
0, // HOUR_OF_DAY
0, // MINUTE
0, // SECONDS
0, // MILLISECONDS

1, // WEEK_OF_YEAR
undefined, // WEEK_OF_MONTH

1, // DAY_OF_YEAR
GregorianCalendar.SUNDAY, // DAY_OF_WEEK
1];

// DAY_OF_WEEK_IN_MONTH
var MAX_VALUES = [undefined, 292278994, // YEAR
GregorianCalendar.DECEMBER, // MONTH
undefined, // DAY_OF_MONTH
23, // HOUR_OF_DAY
59, // MINUTE
59, // SECONDS
999, // MILLISECONDS
undefined, // WEEK_OF_YEAR
undefined, // WEEK_OF_MONTH
undefined, // DAY_OF_YEAR
GregorianCalendar.SATURDAY, // DAY_OF_WEEK
undefined];

// ------------------- private start

// DAY_OF_WEEK_IN_MONTH
function getMonthLength(year, month) {
  return _isLeapYear(year) ? LEAP_MONTH_LENGTH[month] : MONTH_LENGTH[month];
}

function getYearLength(year) {
  return _isLeapYear(year) ? 366 : 365;
}

function adjustDayOfMonth(self) {
  var fields = self.fields;
  var year = fields[YEAR];
  var month = fields[MONTH];
  var monthLen = getMonthLength(year, month);
  var dayOfMonth = fields[DAY_OF_MONTH];
  if (dayOfMonth > monthLen) {
    self.set(DAY_OF_MONTH, monthLen);
  }
}

function getDayOfWeekDateOnOrBefore(fixedDate, dayOfWeek) {
  // 1.1.1 is monday
  // one week has 7 days
  return fixedDate - mod(fixedDate - dayOfWeek, 7);
}

function getWeekNumber(self, fixedDay1, fixedDate) {
  var fixedDay1st = getDayOfWeekDateOnOrBefore(fixedDay1 + 6, self.firstDayOfWeek);
  var nDays = fixedDay1st - fixedDay1;
  if (nDays >= self.minimalDaysInFirstWeek) {
    fixedDay1st -= 7;
  }
  var normalizedDayOfPeriod = fixedDate - fixedDay1st;
  return floorDivide(normalizedDayOfPeriod / 7) + 1;
}

// ------------------- private end

GregorianCalendar.prototype = {
  constructor: GregorianCalendar,

  isGregorianCalendar: 1,

  /*
   * Determines if current year is a leap year.
   * Returns true if the given year is a leap year. To specify BC year numbers,
   * 1 - year number must be given. For example, year BC 4 is specified as -3.
   * @returns {Boolean} true if the given year is a leap year; false otherwise.
   * @method
   * @member Date.Gregorian
   */
  isLeapYear: function isLeapYear() {
    return _isLeapYear(this.getYear());
  },

  /*
   * Return local info for current date instance
   * @returns {Object}
   */
  getLocale: function getLocale() {
    return this.locale;
  },

  /*
   * Returns the minimum value for
   * the given calendar field of this GregorianCalendar instance.
   * The minimum value is defined as the smallest value
   * returned by the get method for any possible time value,
   * taking into consideration the current values of the getFirstDayOfWeek,
   * getMinimalDaysInFirstWeek.
   * @param field the calendar field.
   * @returns {Number} the minimum value for the given calendar field.
   */
  getActualMinimum: function getActualMinimum(field) {
    if (MIN_VALUES[field] !== undefined) {
      return MIN_VALUES[field];
    }
    if (field === WEEK_OF_MONTH) {
      var cal = this.clone();
      cal.clear();
      cal.set(this.fields[YEAR], this.fields[MONTH], 1);
      return cal.get(WEEK_OF_MONTH);
    }

    throw new Error('minimum value not defined!');
  },

  /*
   * Returns the maximum value for the given calendar field
   * of this GregorianCalendar instance.
   * The maximum value is defined as the largest value returned
   * by the get method for any possible time value, taking into consideration
   * the current values of the getFirstDayOfWeek, getMinimalDaysInFirstWeek methods.
   * @param field the calendar field.
   * @returns {Number} the maximum value for the given calendar field.
   */
  getActualMaximum: function getActualMaximum(field) {
    if (MAX_VALUES[field] !== undefined) {
      return MAX_VALUES[field];
    }
    var value = undefined;
    var fields = this.fields;
    switch (field) {
      case DAY_OF_MONTH:
        value = getMonthLength(fields[YEAR], fields[MONTH]);
        break;

      case WEEK_OF_YEAR:
        var endOfYear = this.clone();
        endOfYear.clear();
        endOfYear.set(fields[YEAR], GregorianCalendar.DECEMBER, 31);
        value = endOfYear.get(WEEK_OF_YEAR);
        if (value === 1) {
          value = 52;
        }
        break;

      case WEEK_OF_MONTH:
        var endOfMonth = this.clone();
        endOfMonth.clear();
        endOfMonth.set(fields[YEAR], fields[MONTH], getMonthLength(fields[YEAR], fields[MONTH]));
        value = endOfMonth.get(WEEK_OF_MONTH);
        break;

      case DAY_OF_YEAR:
        value = getYearLength(fields[YEAR]);
        break;

      case DAY_OF_WEEK_IN_MONTH:
        value = toInt((getMonthLength(fields[YEAR], fields[MONTH]) - 1) / 7) + 1;
        break;
      default:
        break;
    }
    if (value === undefined) {
      throw new Error('maximum value not defined!');
    }
    return value;
  },

  /*
   * Determines if the given calendar field has a value set,
   * including cases that the value has been set by internal fields calculations
   * triggered by a get method call.
   * @param field the calendar field to be cleared.
   * @returns {boolean} true if the given calendar field has a value set; false otherwise.
   */
  isSet: function isSet(field) {
    return this.fields[field] !== undefined;
  },

  /*
   * Converts the time value (millisecond offset from the Epoch)
   * to calendar field values.
   * @protected
   */
  computeFields: function computeFields() {
    var time = this.time;
    var timezoneOffset = this.timezoneOffset * ONE_MINUTE;
    var fixedDate = toInt(timezoneOffset / ONE_DAY);
    var timeOfDay = timezoneOffset % ONE_DAY;
    fixedDate += toInt(time / ONE_DAY);
    timeOfDay += time % ONE_DAY;
    if (timeOfDay >= ONE_DAY) {
      timeOfDay -= ONE_DAY;
      fixedDate++;
    } else {
      while (timeOfDay < 0) {
        timeOfDay += ONE_DAY;
        fixedDate--;
      }
    }

    fixedDate += EPOCH_OFFSET;

    var date = Utils.getGregorianDateFromFixedDate(fixedDate);

    var year = date.year;

    var fields = this.fields;
    fields[YEAR] = year;
    fields[MONTH] = date.month;
    fields[DAY_OF_MONTH] = date.dayOfMonth;
    fields[DAY_OF_WEEK] = date.dayOfWeek;

    if (timeOfDay !== 0) {
      fields[HOUR_OF_DAY] = toInt(timeOfDay / ONE_HOUR);
      var r = timeOfDay % ONE_HOUR;
      fields[MINUTE] = toInt(r / ONE_MINUTE);
      r %= ONE_MINUTE;
      fields[SECONDS] = toInt(r / ONE_SECOND);
      fields[MILLISECONDS] = r % ONE_SECOND;
    } else {
      fields[HOUR_OF_DAY] = fields[MINUTE] = fields[SECONDS] = fields[MILLISECONDS] = 0;
    }

    var fixedDateJan1 = Utils.getFixedDate(year, GregorianCalendar.JANUARY, 1);
    var dayOfYear = fixedDate - fixedDateJan1 + 1;
    var fixDateMonth1 = fixedDate - date.dayOfMonth + 1;

    fields[DAY_OF_YEAR] = dayOfYear;
    fields[DAY_OF_WEEK_IN_MONTH] = toInt((date.dayOfMonth - 1) / 7) + 1;

    var weekOfYear = getWeekNumber(this, fixedDateJan1, fixedDate);

    // 本周没有足够的时间在当前年
    if (weekOfYear === 0) {
      // If the date belongs to the last week of the
      // previous year, use the week number of "12/31" of
      // the "previous" year.
      var fixedDec31 = fixedDateJan1 - 1;
      var prevJan1 = fixedDateJan1 - getYearLength(year - 1);
      weekOfYear = getWeekNumber(this, prevJan1, fixedDec31);
    } else
      // 本周是年末最后一周，可能有足够的时间在新的一年
      if (weekOfYear >= 52) {
        var nextJan1 = fixedDateJan1 + getYearLength(year);
        var nextJan1st = getDayOfWeekDateOnOrBefore(nextJan1 + 6, this.firstDayOfWeek);
        var nDays = nextJan1st - nextJan1;
        // 本周有足够天数在新的一年
        if (nDays >= this.minimalDaysInFirstWeek &&
        // 当天确实在本周，weekOfYear === 53 时是不需要这个判断
        fixedDate >= nextJan1st - 7) {
          weekOfYear = 1;
        }
      }

    fields[WEEK_OF_YEAR] = weekOfYear;
    fields[WEEK_OF_MONTH] = getWeekNumber(this, fixDateMonth1, fixedDate);

    this.fieldsComputed = true;
  },

  /*
   * Converts calendar field values to the time value
   * (millisecond offset from the Epoch).
   * @protected
   */
  computeTime: function computeTime() {
    var year = undefined;
    var fields = this.fields;
    if (this.isSet(YEAR)) {
      year = fields[YEAR];
    } else {
      year = new Date().getFullYear();
    }
    var timeOfDay = 0;
    if (this.isSet(HOUR_OF_DAY)) {
      timeOfDay += fields[HOUR_OF_DAY];
    }
    timeOfDay *= 60;
    timeOfDay += fields[MINUTE] || 0;
    timeOfDay *= 60;
    timeOfDay += fields[SECONDS] || 0;
    timeOfDay *= 1000;
    timeOfDay += fields[MILLISECONDS] || 0;
    var fixedDate = 0;
    fields[YEAR] = year;
    fixedDate = fixedDate + this.getFixedDate();
    // millis represents local wall-clock time in milliseconds.
    var millis = (fixedDate - EPOCH_OFFSET) * ONE_DAY + timeOfDay;
    millis -= this.timezoneOffset * ONE_MINUTE;
    this.time = millis;
    this.computeFields();
  },

  /*
   * Fills in any unset fields in the calendar fields. First,
   * the computeTime() method is called if the time value (millisecond offset from the Epoch)
   * has not been calculated from calendar field values.
   * Then, the computeFields() method is called to calculate all calendar field values.
   * @protected
   */
  complete: function complete() {
    if (this.time === undefined) {
      this.computeTime();
    }
    if (!this.fieldsComputed) {
      this.computeFields();
    }
  },

  getFixedDate: function getFixedDate() {
    var self = this;

    var fields = self.fields;

    var firstDayOfWeekCfg = self.firstDayOfWeek;

    var year = fields[YEAR];

    var month = GregorianCalendar.JANUARY;

    if (self.isSet(MONTH)) {
      month = fields[MONTH];
      if (month > GregorianCalendar.DECEMBER) {
        year += toInt(month / 12);
        month %= 12;
      } else if (month < GregorianCalendar.JANUARY) {
        year += floorDivide(month / 12);
        month = mod(month, 12);
      }
    }

    // Get the fixed date since Jan 1, 1 (Gregorian). We are on
    // the first day of either `month' or January in 'year'.
    var fixedDate = Utils.getFixedDate(year, month, 1);
    var firstDayOfWeek = undefined;
    var dayOfWeek = self.firstDayOfWeek;

    if (self.isSet(DAY_OF_WEEK)) {
      dayOfWeek = fields[DAY_OF_WEEK];
    }

    if (self.isSet(MONTH)) {
      if (self.isSet(DAY_OF_MONTH)) {
        fixedDate += fields[DAY_OF_MONTH] - 1;
      } else {
        if (self.isSet(WEEK_OF_MONTH)) {
          firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);

          // If we have enough days in the first week, then
          // move to the previous week.
          if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
            firstDayOfWeek -= 7;
          }

          if (dayOfWeek !== firstDayOfWeekCfg) {
            firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
          }

          fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_MONTH] - 1);
        } else {
          var dowim = undefined;
          if (self.isSet(DAY_OF_WEEK_IN_MONTH)) {
            dowim = fields[DAY_OF_WEEK_IN_MONTH];
          } else {
            dowim = 1;
          }
          var lastDate = 7 * dowim;
          if (dowim < 0) {
            lastDate = getMonthLength(year, month) + 7 * (dowim + 1);
          }
          fixedDate = getDayOfWeekDateOnOrBefore(fixedDate + lastDate - 1, dayOfWeek);
        }
      }
    } else {
      // We are on the first day of the year.
      if (self.isSet(DAY_OF_YEAR)) {
        fixedDate += fields[DAY_OF_YEAR] - 1;
      } else if (self.isSet(WEEK_OF_YEAR)) {
        firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
        // If we have enough days in the first week, then move
        // to the previous week.
        if (firstDayOfWeek - fixedDate >= self.minimalDaysInFirstWeek) {
          firstDayOfWeek -= 7;
        }
        if (dayOfWeek !== firstDayOfWeekCfg) {
          firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
        }
        fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_YEAR] - 1);
      }
    }

    return fixedDate;
  },

  /*
   * Returns this Calendar's time value in milliseconds
   * @member Date.Gregorian
   * @returns {Number} the current time as UTC milliseconds from the epoch.
   */
  getTime: function getTime() {
    if (this.time === undefined) {
      this.computeTime();
    }
    return this.time;
  },

  /*
   * Sets this Calendar's current time from the given long value.
   * @param time the new time in UTC milliseconds from the epoch.
   */
  setTime: function setTime(time) {
    this.time = time;
    this.fieldsComputed = false;
    this.complete();
  },

  /*
   * Returns the value of the given calendar field.
   * @param field the given calendar field.
   * @returns {Number} the value for the given calendar field.
   */
  get: function get(field) {
    this.complete();
    return this.fields[field];
  },

  /*
   * Returns the year of the given calendar field.
   * @method getYear
   * @returns {Number} the year for the given calendar field.
   */

  /*
   * Returns the month of the given calendar field.
   * @method getMonth
   * @returns {Number} the month for the given calendar field.
   */

  /*
   * Returns the day of month of the given calendar field.
   * @method getDayOfMonth
   * @returns {Number} the day of month for the given calendar field.
   */

  /*
   * Returns the hour of day of the given calendar field.
   * @method getHourOfDay
   * @returns {Number} the hour of day for the given calendar field.
   */

  /*
   * Returns the minute of the given calendar field.
   * @method getMinute
   * @returns {Number} the minute for the given calendar field.
   */

  /*
   * Returns the second of the given calendar field.
   * @method getSecond
   * @returns {Number} the second for the given calendar field.
   */

  /*
   * Returns the millisecond of the given calendar field.
   * @method getMilliSecond
   * @returns {Number} the millisecond for the given calendar field.
   */

  /*
   * Returns the week of year of the given calendar field.
   * @method getWeekOfYear
   * @returns {Number} the week of year for the given calendar field.
   */

  /*
   * Returns the week of month of the given calendar field.
   * @method getWeekOfMonth
   * @returns {Number} the week of month for the given calendar field.
   */

  /*
   * Returns the day of year of the given calendar field.
   * @method getDayOfYear
   * @returns {Number} the day of year for the given calendar field.
   */

  /*
   * Returns the day of week of the given calendar field.
   * @method getDayOfWeek
   * @returns {Number} the day of week for the given calendar field.
   */

  /*
   * Returns the day of week in month of the given calendar field.
   * @method getDayOfWeekInMonth
   * @returns {Number} the day of week in month for the given calendar field.
   */

  /*
   * Sets the given calendar field to the given value.
   * @param field the given calendar field.
   * @param v the value to be set for the given calendar field.
   */
  set: function set(field, v) {
    var len = arguments.length;
    if (len === 2) {
      this.fields[field] = v;
    } else if (len < MILLISECONDS + 1) {
      for (var i = 0; i < len; i++) {
        this.fields[YEAR + i] = arguments[i];
      }
    } else {
      throw new Error('illegal arguments for GregorianCalendar set');
    }
    this.time = undefined;
  },

  /*
   * Set the year of the given calendar field.
   * @method setYear
   */

  /*
   * Set the month of the given calendar field.
   * @method setMonth
   */

  /*
   * Set the day of month of the given calendar field.
   * @method setDayOfMonth
   */

  /*
   * Set the hour of day of the given calendar field.
   * @method setHourOfDay
   */

  /*
   * Set the minute of the given calendar field.
   * @method setMinute
   */

  /*
   * Set the second of the given calendar field.
   * @method setSecond
   */

  /*
   * Set the millisecond of the given calendar field.
   * @method setMilliSecond
   */

  /*
   * Set the week of year of the given calendar field.
   * @method setWeekOfYear
   */

  /*
   * Set the week of month of the given calendar field.
   * @method setWeekOfMonth
   */

  /*
   * Set the day of year of the given calendar field.
   * @method setDayOfYear
   */

  /*
   * Set the day of week of the given calendar field.
   * @method setDayOfWeek
   */

  /*
   * Set the day of week in month of the given calendar field.
   * @method setDayOfWeekInMonth
   */

  /*
   * add for specified field based on two rules:
   *
   *  - Add rule 1. The value of field after the call minus the value of field before the
   *  call is amount, modulo any overflow that has occurred in field
   *  Overflow occurs when a field value exceeds its range and,
   *  as a result, the next larger field is incremented or
   *  decremented and the field value is adjusted back into its range.
   *
   *  - Add rule 2. If a smaller field is expected to be invariant,
   *  but it is impossible for it to be equal to its
   *  prior value because of changes in its minimum or maximum after
   *  field is changed, then its value is adjusted to be as close
   *  as possible to its expected value. A smaller field represents a
   *  smaller unit of time. HOUR_OF_DAY is a smaller field than
   *  DAY_OF_MONTH. No adjustment is made to smaller fields
   *  that are not expected to be invariant. The calendar system
   *  determines what fields are expected to be invariant.
   *
   *
   *      @example
   *      use('date/gregorian',function(S, GregorianCalendar){
   *          const d = new GregorianCalendar();
   *          d.set(2012, GregorianCalendar.JANUARY, 31);
   *          d.add(Gregorian.MONTH,1);
   *          // 2012-2-29
   *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
   *          d.add(Gregorian.MONTH,12);
   *          // 2013-2-28
   *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
   *      });
   *
   * @param field the calendar field.
   * @param {Number} amount he amount of date or time to be added to the field.
   */
  add: function add(field, a) {
    if (!a) {
      return;
    }
    var amount = a;
    var self = this;
    var fields = self.fields;
    // computer and retrieve original value
    var value = self.get(field);
    if (field === YEAR) {
      value += amount;
      self.set(YEAR, value);
      adjustDayOfMonth(self);
    } else if (field === MONTH) {
      value += amount;
      var yearAmount = floorDivide(value / 12);
      value = mod(value, 12);
      if (yearAmount) {
        self.set(YEAR, fields[YEAR] + yearAmount);
      }
      self.set(MONTH, value);
      adjustDayOfMonth(self);
    } else {
      switch (field) {
        case HOUR_OF_DAY:
          amount *= ONE_HOUR;
          break;
        case MINUTE:
          amount *= ONE_MINUTE;
          break;
        case SECONDS:
          amount *= ONE_SECOND;
          break;
        case MILLISECONDS:
          break;
        case WEEK_OF_MONTH:
        case WEEK_OF_YEAR:
        case DAY_OF_WEEK_IN_MONTH:
          amount *= ONE_WEEK;
          break;
        case DAY_OF_WEEK:
        case DAY_OF_YEAR:
        case DAY_OF_MONTH:
          amount *= ONE_DAY;
          break;
        default:
          throw new Error('illegal field for add');
      }
      self.setTime(self.time + amount);
    }
  },

  /*
   * add the year of the given calendar field.
   * @method addYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the month of the given calendar field.
   * @method addMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the day of month of the given calendar field.
   * @method addDayOfMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the hour of day of the given calendar field.
   * @method addHourOfDay
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the minute of the given calendar field.
   * @method addMinute
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the second of the given calendar field.
   * @method addSecond
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the millisecond of the given calendar field.
   * @method addMilliSecond
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the week of year of the given calendar field.
   * @method addWeekOfYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the week of month of the given calendar field.
   * @method addWeekOfMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the day of year of the given calendar field.
   * @method addDayOfYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the day of week of the given calendar field.
   * @method addDayOfWeek
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * add the day of week in month of the given calendar field.
   * @method addDayOfWeekInMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * Get rolled value for the field
   * @protected
   */
  getRolledValue: function getRolledValue(value, a, min, max) {
    var amount = a;
    var diff = value - min;
    var range = max - min + 1;
    amount %= range;
    return min + (diff + amount + range) % range;
  },

  /*
   * Adds a signed amount to the specified calendar field without changing larger fields.
   * A negative roll amount means to subtract from field without changing
   * larger fields. If the specified amount is 0, this method performs nothing.
   *
   *
   *
   *      @example
   *      const d = new GregorianCalendar();
   *      d.set(1999, GregorianCalendar.AUGUST, 31);
   *      // 1999-4-30
   *      // Tuesday June 1, 1999
   *      d.set(1999, GregorianCalendar.JUNE, 1);
   *      d.add(Gregorian.WEEK_OF_MONTH,-1); // === d.add(Gregorian.WEEK_OF_MONTH,
   *      d.get(Gregorian.WEEK_OF_MONTH));
   *      // 1999-06-29
   *
   *
   * @param field the calendar field.
   * @param {Number} amount the signed amount to add to field.
   */
  roll: function roll(field, amount) {
    if (!amount) {
      return;
    }
    var self = this;
    // computer and retrieve original value
    var value = self.get(field);
    var min = self.getActualMinimum(field);
    var max = self.getActualMaximum(field);
    value = self.getRolledValue(value, amount, min, max);

    self.set(field, value);

    // consider compute time priority
    switch (field) {
      case MONTH:
        adjustDayOfMonth(self);
        break;
      default:
        // other fields are set already when get
        self.updateFieldsBySet(field);
        break;
    }
  },

  /*
   * keep field stable.
   *
   * 2015-09-29 setMonth 2 vs rollSetMonth 2
   *
   */
  rollSet: function rollSet(field, v) {
    this.set(field, v);
    switch (field) {
      case MONTH:
        adjustDayOfMonth(this);
        break;
      default:
        // other fields are set already when get
        this.updateFieldsBySet(field);
        break;
    }
  },

  /*
   * roll the year of the given calendar field.
   * @method rollYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the month of the given calendar field.
   * @param {Number} amount the signed amount to add to field.
   * @method rollMonth
   */

  /*
   * roll the day of month of the given calendar field.
   * @method rollDayOfMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the hour of day of the given calendar field.
   * @method rollHourOfDay
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the minute of the given calendar field.
   * @method rollMinute
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the second of the given calendar field.
   * @method rollSecond
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the millisecond of the given calendar field.
   * @method rollMilliSecond
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the week of year of the given calendar field.
   * @method rollWeekOfYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the week of month of the given calendar field.
   * @method rollWeekOfMonth
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the day of year of the given calendar field.
   * @method rollDayOfYear
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * roll the day of week of the given calendar field.
   * @method rollDayOfWeek
   * @param {Number} amount the signed amount to add to field.
   */

  /*
   * remove other priority fields when call getFixedDate
   * precondition: other fields are all set or computed
   * @protected
   */
  updateFieldsBySet: function updateFieldsBySet(field) {
    var fields = this.fields;
    switch (field) {
      case WEEK_OF_MONTH:
        fields[DAY_OF_MONTH] = undefined;
        break;
      case DAY_OF_YEAR:
        fields[MONTH] = undefined;
        break;
      case DAY_OF_WEEK:
        fields[DAY_OF_MONTH] = undefined;
        break;
      case WEEK_OF_YEAR:
        fields[DAY_OF_YEAR] = undefined;
        fields[MONTH] = undefined;
        break;
      default:
        break;
    }
  },

  /*
   * get current date instance's timezone offset
   * @returns {Number}
   */
  getTimezoneOffset: function getTimezoneOffset() {
    return this.timezoneOffset;
  },

  /*
   * set current date instance's timezone offset
   */
  setTimezoneOffset: function setTimezoneOffset(timezoneOffset) {
    if (this.timezoneOffset !== timezoneOffset) {
      this.fieldsComputed = undefined;
      this.timezoneOffset = timezoneOffset;
    }
  },

  /*
   * set first day of week for current date instance
   */
  setFirstDayOfWeek: function setFirstDayOfWeek(firstDayOfWeek) {
    if (this.firstDayOfWeek !== firstDayOfWeek) {
      this.firstDayOfWeek = firstDayOfWeek;
      this.fieldsComputed = false;
    }
  },

  /*
   * Gets what the first day of the week is; e.g., SUNDAY in the U.S., MONDAY in France.
   * @returns {Number} the first day of the week.
   */
  getFirstDayOfWeek: function getFirstDayOfWeek() {
    return this.firstDayOfWeek;
  },

  /*
   * Sets what the minimal days required in the first week of the year are; For example,
   * if the first week is defined as one that contains the first day of the first month of a year,
   * call this method with value 1.
   * If it must be a full week, use value 7.
   * @param minimalDaysInFirstWeek the given minimal days required in the first week of the year.
   */
  setMinimalDaysInFirstWeek: function setMinimalDaysInFirstWeek(minimalDaysInFirstWeek) {
    if (this.minimalDaysInFirstWeek !== minimalDaysInFirstWeek) {
      this.minimalDaysInFirstWeek = minimalDaysInFirstWeek;
      this.fieldsComputed = false;
    }
  },

  /*
   * Gets what the minimal days required in the first week of the year are; e.g.,
   * if the first week is defined as one that contains the first day of the first month of a year,
   * this method returns 1.
   * If the minimal days required must be a full week, this method returns 7.
   * @returns {Number} the minimal days required in the first week of the year.
   */
  getMinimalDaysInFirstWeek: function getMinimalDaysInFirstWeek() {
    return this.minimalDaysInFirstWeek;
  },

  /*
   * Returns the number of weeks in the week year
   * represented by this GregorianCalendar.
   *
   * For example, if this GregorianCalendar's date is
   * December 31, 2008 with the ISO
   * 8601 compatible setting, this method will return 53 for the
   * period: December 29, 2008 to January 3, 2010
   * while getActualMaximum(WEEK_OF_YEAR) will return
   * 52 for the period: December 31, 2007 to December 28, 2008.
   *
   * @return {Number} the number of weeks in the week year.
   */
  getWeeksInWeekYear: function getWeeksInWeekYear() {
    var weekYear = this.getWeekYear();
    if (weekYear === this.get(YEAR)) {
      return this.getActualMaximum(WEEK_OF_YEAR);
    }
    // Use the 2nd week for calculating the max of WEEK_OF_YEAR
    var gc = this.clone();
    gc.clear();
    gc.setWeekDate(weekYear, 2, this.get(DAY_OF_WEEK));
    return gc.getActualMaximum(WEEK_OF_YEAR);
  },

  /*
   * Returns the week year represented by this GregorianCalendar.
   * The dates in the weeks between 1 and the
   * maximum week number of the week year have the same week year value
   * that may be one year before or after the calendar year value.
   *
   * @return {Number} the week year represented by this GregorianCalendar.
   */
  getWeekYear: function getWeekYear() {
    var year = this.get(YEAR); // implicitly  complete
    var weekOfYear = this.get(WEEK_OF_YEAR);
    var month = this.get(MONTH);
    if (month === GregorianCalendar.JANUARY) {
      if (weekOfYear >= 52) {
        --year;
      }
    } else if (month === GregorianCalendar.DECEMBER) {
      if (weekOfYear === 1) {
        ++year;
      }
    }
    return year;
  },
  /*
   * Sets this GregorianCalendar to the date given by the date specifiers - weekYear,
   * weekOfYear, and dayOfWeek. weekOfYear follows the WEEK_OF_YEAR numbering.
   * The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.
   *
   * @param weekYear    the week year
   * @param weekOfYear  the week number based on weekYear
   * @param dayOfWeek   the day of week value
   */
  setWeekDate: function setWeekDate(weekYear, weekOfYear, dayOfWeek) {
    if (dayOfWeek < GregorianCalendar.SUNDAY || dayOfWeek > GregorianCalendar.SATURDAY) {
      throw new Error('invalid dayOfWeek: ' + dayOfWeek);
    }
    var fields = this.fields;
    // To avoid changing the time of day fields by date
    // calculations, use a clone with the GMT time zone.
    var gc = this.clone();
    gc.clear();
    gc.setTimezoneOffset(0);
    gc.set(YEAR, weekYear);
    gc.set(WEEK_OF_YEAR, 1);
    gc.set(DAY_OF_WEEK, this.getFirstDayOfWeek());
    var days = dayOfWeek - this.getFirstDayOfWeek();
    if (days < 0) {
      days += 7;
    }
    days += 7 * (weekOfYear - 1);
    if (days !== 0) {
      gc.add(DAY_OF_YEAR, days);
    } else {
      gc.complete();
    }
    fields[YEAR] = gc.get(YEAR);
    fields[MONTH] = gc.get(MONTH);
    fields[DAY_OF_MONTH] = gc.get(DAY_OF_MONTH);
    this.complete();
  },
  /*
   * Creates and returns a copy of this object.
   * @returns {Date.Gregorian}
   */
  clone: function clone() {
    if (this.time === undefined) {
      this.computeTime();
    }
    var cal = new GregorianCalendar(this.locale);
    cal.setTimezoneOffset(cal.getTimezoneOffset());
    cal.setFirstDayOfWeek(cal.getFirstDayOfWeek());
    cal.setMinimalDaysInFirstWeek(cal.getMinimalDaysInFirstWeek());
    cal.setTime(this.time);
    return cal;
  },

  /*
   * Compares this GregorianCalendar to the specified Object.
   * The result is true if and only if the argument is a GregorianCalendar object
   * that represents the same time value (millisecond offset from the Epoch)
   * under the same Calendar parameters and Gregorian change date as this object.
   * @param {Date.Gregorian} obj the object to compare with.
   * @returns {boolean} true if this object is equal to obj; false otherwise.
   */
  equals: function equals(obj) {
    return this.getTime() === obj.getTime() && this.firstDayOfWeek === obj.firstDayOfWeek && this.timezoneOffset === obj.timezoneOffset && this.minimalDaysInFirstWeek === obj.minimalDaysInFirstWeek;
  },

  /*
   * Sets all the calendar field values or specified field and the time value
   * (millisecond offset from the Epoch) of this Calendar undefined.
   * This means that isSet() will return false for all the calendar fields,
   * and the date and time calculations will treat the fields as if they had never been set.
   * @param [field] the calendar field to be cleared.
   */
  clear: function clear(field) {
    if (field === undefined) {
      this.field = [];
    } else {
      this.fields[field] = undefined;
    }
    this.time = undefined;
    this.fieldsComputed = false;
  }
};

var GregorianCalendarProto = GregorianCalendar.prototype;

Utils.each(FIELDS, function (f, index) {
  if (f) {
    GregorianCalendarProto['get' + f] = function get() {
      return this.get(index);
    };

    GregorianCalendarProto['isSet' + f] = function isSet() {
      return this.isSet(index);
    };

    GregorianCalendarProto['set' + f] = function set(v) {
      return this.set(index, v);
    };

    GregorianCalendarProto['add' + f] = function add(v) {
      return this.add(index, v);
    };

    GregorianCalendarProto['roll' + f] = function roll(v) {
      return this.roll(index, v);
    };

    GregorianCalendarProto['rollSet' + f] = function rollSet(v) {
      return this.rollSet(index, v);
    };
  }
});

module.exports = GregorianCalendar;
/*
 http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html

 TODO
 - day saving time
 - i18n
 - julian calendar
 */
},{"./const":34,"./locale/en_US":36,"./utils":38}],36:[function(require,module,exports){
/*
 * en-us locale
 * @ignore
 * @author yiminghe@gmail.com
 */
"use strict";

module.exports = {
  // in minutes
  timezoneOffset: -8 * 60,
  firstDayOfWeek: 0,
  minimalDaysInFirstWeek: 1
};
},{}],37:[function(require,module,exports){
/*
 * zh-cn locale
 * @ignore
 * @author yiminghe@gmail.com
 */
"use strict";

module.exports = {
  // in minutes
  timezoneOffset: 8 * 60,
  firstDayOfWeek: 1,
  minimalDaysInFirstWeek: 1
};
},{}],38:[function(require,module,exports){
/*
 * utils for gregorian date
 * @ignore
 * @author yiminghe@gmail.com
 */

'use strict';

var Const = require('./const');
var floor = Math.floor;
var ACCUMULATED_DAYS_IN_MONTH
//   1/1 2/1 3/1 4/1 5/1 6/1 7/1 8/1 9/1 10/1 11/1 12/1
= [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

var ACCUMULATED_DAYS_IN_MONTH_LEAP
//   1/1 2/1   3/1   4/1   5/1   6/1   7/1   8/1   9/1
// 10/1   11/1   12/1
= [0, 31, 59 + 1, 90 + 1, 120 + 1, 151 + 1, 181 + 1, 212 + 1, 243 + 1, 273 + 1, 304 + 1, 334 + 1];

var DAYS_OF_YEAR = 365;
var DAYS_OF_4YEAR = 365 * 4 + 1;
var DAYS_OF_100YEAR = DAYS_OF_4YEAR * 25 - 1;
var DAYS_OF_400YEAR = DAYS_OF_100YEAR * 4 + 1;
var _exports = {};

function getDayOfYear(year, month, dayOfMonth) {
  return dayOfMonth + (_exports.isLeapYear(year) ? ACCUMULATED_DAYS_IN_MONTH_LEAP[month] : ACCUMULATED_DAYS_IN_MONTH[month]);
}

function getDayOfWeekFromFixedDate(fixedDate) {
  // The fixed day 1 (January 1, 1 Gregorian) is Monday.
  if (fixedDate >= 0) {
    return fixedDate % 7;
  }
  return _exports.mod(fixedDate, 7);
}

function getGregorianYearFromFixedDate(fixedDate) {
  var d0 = undefined;
  var d1 = undefined;
  var d2 = undefined;
  var d3 = undefined;
  var n400 = undefined;
  var n100 = undefined;
  var n4 = undefined;
  var n1 = undefined;
  var year = undefined;
  d0 = fixedDate - 1;

  n400 = floor(d0 / DAYS_OF_400YEAR);
  d1 = _exports.mod(d0, DAYS_OF_400YEAR);
  n100 = floor(d1 / DAYS_OF_100YEAR);
  d2 = _exports.mod(d1, DAYS_OF_100YEAR);
  n4 = floor(d2 / DAYS_OF_4YEAR);
  d3 = _exports.mod(d2, DAYS_OF_4YEAR);
  n1 = floor(d3 / DAYS_OF_YEAR);

  year = 400 * n400 + 100 * n100 + 4 * n4 + n1;

  // ?
  if (!(n100 === 4 || n1 === 4)) {
    ++year;
  }

  return year;
}

_exports = module.exports = {
  each: function each(arr, fn) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (fn(arr[i], i, arr) === false) {
        break;
      }
    }
  },

  mix: function mix(t, s) {
    for (var p in s) {
      if (s.hasOwnProperty(p)) {
        t[p] = s[p];
      }
    }
  },

  isLeapYear: function isLeapYear(year) {
    if ((year & 3) !== 0) {
      return false;
    }
    return year % 100 !== 0 || year % 400 === 0;
  },

  mod: function mod(x, y) {
    // 负数时不是镜像关系
    return x - y * floor(x / y);
  },

  // month: 0 based
  getFixedDate: function getFixedDate(year, month, dayOfMonth) {
    var prevYear = year - 1;
    // 考虑公元前
    return DAYS_OF_YEAR * prevYear + floor(prevYear / 4) - floor(prevYear / 100) + floor(prevYear / 400) + getDayOfYear(year, month, dayOfMonth);
  },

  getGregorianDateFromFixedDate: function getGregorianDateFromFixedDate(fixedDate) {
    var year = getGregorianYearFromFixedDate(fixedDate);
    var jan1 = _exports.getFixedDate(year, Const.JANUARY, 1);
    var isLeap = _exports.isLeapYear(year);
    var ACCUMULATED_DAYS = isLeap ? ACCUMULATED_DAYS_IN_MONTH_LEAP : ACCUMULATED_DAYS_IN_MONTH;
    var daysDiff = fixedDate - jan1;
    var month = undefined;

    for (var i = 0; i < ACCUMULATED_DAYS.length; i++) {
      if (ACCUMULATED_DAYS[i] <= daysDiff) {
        month = i;
      } else {
        break;
      }
    }

    var dayOfMonth = fixedDate - jan1 - ACCUMULATED_DAYS[month] + 1;
    var dayOfWeek = getDayOfWeekFromFixedDate(fixedDate);

    return {
      year: year,
      month: month,
      dayOfMonth: dayOfMonth,
      dayOfWeek: dayOfWeek,
      isLeap: isLeap
    };
  }
};
},{"./const":34}],39:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],40:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],41:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))
},{"_process":30,"warning":56}],42:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],44:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./Actions":39,"./DOMStateStorage":41,"./DOMUtils":42,"./ExecutionEnvironment":43,"./createDOMHistory":45,"_process":30,"invariant":55}],45:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./DOMUtils":42,"./ExecutionEnvironment":43,"./createHistory":46,"_process":30,"invariant":55}],46:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":39,"./AsyncUtils":40,"./createLocation":47,"./deprecate":48,"./runTransitionHook":51,"deep-equal":52}],47:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":39,"./parsePath":50}],48:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":30,"warning":56}],49:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],50:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"./extractPath":49,"_process":30,"warning":56}],51:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":30,"warning":56}],52:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":53,"./lib/keys.js":54}],53:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],54:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],55:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":30}],56:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"_process":30,"dup":33}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _rcUtil = require('rc-util');

var _dateDateTable = require('./date/DateTable');

var _dateDateTable2 = _interopRequireDefault(_dateDateTable);

var _calendarCalendarHeader = require('./calendar/CalendarHeader');

var _calendarCalendarHeader2 = _interopRequireDefault(_calendarCalendarHeader);

var _calendarCalendarFooter = require('./calendar/CalendarFooter');

var _calendarCalendarFooter2 = _interopRequireDefault(_calendarCalendarFooter);

var _mixinCalendarMixin = require('./mixin/CalendarMixin');

var _mixinCalendarMixin2 = _interopRequireDefault(_mixinCalendarMixin);

var _mixinCommonMixin = require('./mixin/CommonMixin');

var _mixinCommonMixin2 = _interopRequireDefault(_mixinCommonMixin);

var _dateDateInput = require('./date/DateInput');

var _dateDateInput2 = _interopRequireDefault(_dateDateInput);

function noop() {}

function goStartMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(1);
  this.setValue(next);
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(next.getActualMaximum(_gregorianCalendar2['default'].MONTH));
  this.setValue(next);
}

function goMonth(direction) {
  var next = this.state.value.clone();
  next.addMonth(direction);
  this.setValue(next);
}

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setValue(next);
}

function goWeek(direction) {
  var next = this.state.value.clone();
  next.addWeekOfYear(direction);
  this.setValue(next);
}

function goDay(direction) {
  var next = this.state.value.clone();
  next.addDayOfMonth(direction);
  this.setValue(next);
}

var Calendar = _react2['default'].createClass({
  displayName: 'Calendar',

  propTypes: {
    value: _react.PropTypes.object,
    selectedValue: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    showWeekNumber: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    showToday: _react.PropTypes.bool,
    showDateInput: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    showTime: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    onOk: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    onKeyDown: _react.PropTypes.func,
    dateInputPlaceholder: _react.PropTypes.string,
    onClear: _react.PropTypes.func,
    onChange: _react.PropTypes.func
  },

  mixins: [_mixinCommonMixin2['default'], _mixinCalendarMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      showToday: true,
      showDateInput: true,
      onClear: noop,
      onOk: noop
    };
  },

  getInitialState: function getInitialState() {
    // bind methods
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {};
  },

  onKeyDown: function onKeyDown(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    switch (keyCode) {
      case _rcUtil.KeyCode.DOWN:
        goWeek.call(this, 1);
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.UP:
        goWeek.call(this, -1);
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.LEFT:
        if (ctrlKey) {
          this.previousYear();
        } else {
          goDay.call(this, -1);
        }
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.RIGHT:
        if (ctrlKey) {
          this.nextYear();
        } else {
          goDay.call(this, 1);
        }
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.HOME:
        goStartMonth.call(this);
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.END:
        goEndMonth.call(this);
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.PAGE_DOWN:
        this.nextMonth();
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.PAGE_UP:
        this.previousMonth();
        event.preventDefault();
        return 1;
      case _rcUtil.KeyCode.ENTER:
        this.onSelect(this.state.value);
        event.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(event);
        return 1;
    }
  },

  onClear: function onClear() {
    this.onSelect(null);
    this.props.onClear();
  },

  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDate(selectedValue)) {
      this.props.onOk(selectedValue);
    }
  },

  onDateInputChange: function onDateInputChange(value) {
    this.onSelect(value, {
      source: 'dateInput'
    });
  },

  onDateTableSelect: function onDateTableSelect(value) {
    this.onSelect(value);
  },

  chooseToday: function chooseToday() {
    var today = this.state.value.clone();
    today.setTime(Date.now());
    this.onSelect(today);
  },

  render: function render() {
    var props = this.props;
    var locale = props.locale;
    var prefixCls = props.prefixCls;
    var disabledDate = props.disabledDate;
    var dateInputPlaceholder = props.dateInputPlaceholder;

    var state = this.state;
    var value = state.value;
    var selectedValue = state.selectedValue;

    var dateInputElement = props.showDateInput ? _react2['default'].createElement(_dateDateInput2['default'], { formatter: this.getFormatter(),
      key: 'date-input',
      gregorianCalendarLocale: value.locale,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      onClear: this.onClear,
      prefixCls: prefixCls,
      value: selectedValue,
      onChange: this.onDateInputChange }) : null;
    var children = [dateInputElement, _react2['default'].createElement(
      'div',
      { key: 'date-panel',
        className: prefixCls + '-date-panel' },
      _react2['default'].createElement(_calendarCalendarHeader2['default'], {
        locale: locale,
        onValueChange: this.setValue,
        value: value,
        prefixCls: prefixCls }),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-calendar-body' },
        _react2['default'].createElement(_dateDateTable2['default'], {
          locale: locale,
          value: value,
          prefixCls: prefixCls,
          dateRender: props.dateRender,
          onSelect: this.onDateTableSelect,
          disabledDate: disabledDate,
          showWeekNumber: props.showWeekNumber })
      ),
      _react2['default'].createElement(_calendarCalendarFooter2['default'], {
        locale: locale,
        showOk: props.showOk,
        prefixCls: prefixCls,
        showToday: props.showToday,
        showTime: props.showTime,
        value: value,
        disabledDate: disabledDate,
        onOk: this.onOk,
        onSelect: this.onSelect,
        onToday: this.chooseToday
      })
    )];

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  }
});

exports['default'] = Calendar;
module.exports = exports['default'];
},{"./calendar/CalendarFooter":59,"./calendar/CalendarHeader":60,"./date/DateInput":62,"./date/DateTable":65,"./mixin/CalendarMixin":70,"./mixin/CommonMixin":71,"gregorian-calendar":85,"rc-util":122,"react":"react"}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcUtil = require('rc-util');

var _pickerPlacements = require('./picker/placements');

var _pickerPlacements2 = _interopRequireDefault(_pickerPlacements);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = _react2['default'].createClass({
  displayName: 'Picker',

  propTypes: {
    onChange: _react.PropTypes.func,
    onOpen: _react.PropTypes.func,
    onClose: _react.PropTypes.func,
    children: _react.PropTypes.func,
    getCalendarContainer: _react.PropTypes.func,
    calendar: _react.PropTypes.element,
    style: _react.PropTypes.object,
    open: _react.PropTypes.bool,
    defaultOpen: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    placement: _react.PropTypes.any,
    align: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-calendar-picker',
      style: {},
      align: {},
      placement: 'bottomLeft',
      defaultOpen: false,
      onChange: noop,
      onOpen: noop,
      onClose: noop
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    var open = undefined;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    return { open: open, value: value };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var open = nextProps.open;

    if (value !== undefined) {
      this.setState({ value: value });
    }
    if (open !== undefined) {
      this.setState({ open: open });
    }
  },

  onCalendarKeyDown: function onCalendarKeyDown(event) {
    if (event.keyCode === _rcUtil.KeyCode.ESC) {
      event.stopPropagation();
      this.close(this.focus);
    }
  },

  onCalendarSelect: function onCalendarSelect(value, cause) {
    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    if (!props.calendar.props.showTime && cause.source !== 'dateInput') {
      this.close(this.focus);
    }
    props.onChange(value);
  },

  onCalendarOk: function onCalendarOk() {
    this.close(this.focus);
  },

  onCalendarClear: function onCalendarClear() {
    this.close(this.focus);
  },

  onVisibleChange: function onVisibleChange(open) {
    var _this = this;

    this.setOpen(open, function () {
      if (open) {
        _reactDom2['default'].findDOMNode(_this.calendarInstance).focus();
      }
    });
  },

  getCalendarElement: function getCalendarElement() {
    var props = this.props;
    var state = this.state;
    var calendarProp = props.calendar;
    var extraProps = {
      ref: this.saveCalendarRef,
      defaultValue: state.value || calendarProp.props.defaultValue,
      defaultSelectedValue: state.value,
      onKeyDown: this.onCalendarKeyDown,
      onOk: (0, _rcUtil.createChainedFunction)(calendarProp.props.onOk, this.onCalendarOk),
      onSelect: (0, _rcUtil.createChainedFunction)(calendarProp.props.onSelect, this.onCalendarSelect),
      onClear: (0, _rcUtil.createChainedFunction)(calendarProp.props.onClear, this.onCalendarClear)
    };

    return _react2['default'].cloneElement(calendarProp, extraProps);
  },

  setOpen: function setOpen(open, callback) {
    var _props = this.props;
    var onOpen = _props.onOpen;
    var onClose = _props.onClose;

    if (this.state.open !== open) {
      this.setState({
        open: open
      }, callback);
      var _event = {
        open: open
      };
      if (open) {
        onOpen(_event);
      } else {
        onClose(_event);
      }
    }
  },

  open: function open(callback) {
    this.setOpen(true, callback);
  },

  close: function close(callback) {
    this.setOpen(false, callback);
  },

  focus: function focus() {
    if (!this.state.open) {
      _reactDom2['default'].findDOMNode(this).focus();
    }
  },

  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var placement = props.placement;
    var style = props.style;
    var getCalendarContainer = props.getCalendarContainer;
    var align = props.align;
    var animation = props.animation;
    var disabled = props.disabled;
    var transitionName = props.transitionName;
    var children = props.children;

    var state = this.state;
    return _react2['default'].createElement(
      _rcTrigger2['default'],
      { popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: _pickerPlacements2['default'],
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls },
      children(state, props)
    );
  }
});

exports['default'] = Picker;
module.exports = exports['default'];
},{"./picker/placements":74,"rc-trigger":92,"rc-util":122,"react":"react","react-dom":"react-dom"}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeTime = require('../time/Time');

var _timeTime2 = _interopRequireDefault(_timeTime);

var _rcUtil = require('rc-util');

var _rcUtil2 = _interopRequireDefault(_rcUtil);

var _util = require('../util/');

var toFragment = _rcUtil2['default'].Children.mapSelf;

var CalendarFooter = _react2['default'].createClass({
  displayName: 'CalendarFooter',

  propTypes: {
    onSelect: _react.PropTypes.func,
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },

  render: function render() {
    var props = this.props;
    var value = props.value;
    var locale = props.locale;
    var prefixCls = props.prefixCls;

    var footerEl = null;
    if (props.showToday || props.showTime) {
      var nowEl = undefined;
      if (props.showToday) {
        nowEl = (0, _util.getTodayElement)(props);
      }
      var okBtn = undefined;
      if (props.showOk) {
        okBtn = (0, _util.getOkElement)(props);
      }
      var footerBtn = undefined;
      if (nowEl || okBtn) {
        footerBtn = _react2['default'].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          toFragment([nowEl, okBtn])
        );
      }
      var timeEl = undefined;
      if (props.showTime) {
        timeEl = _react2['default'].createElement(_timeTime2['default'], { value: value, prefixCls: prefixCls,
          disabled: props.timeDisabled,
          locale: locale, onChange: this.onSelect });
      }
      footerEl = _react2['default'].createElement(
        'div',
        { className: prefixCls + '-footer' },
        timeEl,
        footerBtn
      );
    }

    return footerEl;
  }
});

exports['default'] = CalendarFooter;
module.exports = exports['default'];
},{"../time/Time":75,"../util/":77,"rc-util":122,"react":"react"}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _monthMonthPanel = require('../month/MonthPanel');

var _monthMonthPanel2 = _interopRequireDefault(_monthMonthPanel);

var _utilIndex = require('../util/index');

var _yearYearPanel = require('../year/YearPanel');

var _yearYearPanel2 = _interopRequireDefault(_yearYearPanel);

var _rcUtil = require('rc-util');

var _rcUtil2 = _interopRequireDefault(_rcUtil);

var toFragment = _rcUtil2['default'].Children.mapSelf;

function goMonth(direction) {
  var next = this.props.value.clone();
  next.addMonth(direction);
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.addYear(direction);
  this.props.onValueChange(next);
}

var CalendarHeader = _react2['default'].createClass({
  displayName: 'CalendarHeader',

  propTypes: {
    locale: _react.PropTypes.object,
    value: _react.PropTypes.object,
    onValueChange: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    this.yearFormatter = (0, _utilIndex.getFormatter)(props.locale.yearFormat, props.locale);
    this.monthFormatter = (0, _utilIndex.getFormatter)(props.locale.monthFormat, props.locale);
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {};
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var locale = this.props.locale;
    var nextLocale = nextProps.locale;

    if (nextLocale !== locale) {
      this.yearFormatter = (0, _utilIndex.getFormatter)(nextLocale.yearFormat, nextLocale);
      this.monthFormatter = (0, _utilIndex.getFormatter)(nextLocale.monthFormat, nextLocale);
    }
  },

  onSelect: function onSelect(value) {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 0
    });
    this.props.onValueChange(value);
  },

  getMonthYearElement: function getMonthYearElement() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = this.props.value;
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var year = _react2['default'].createElement(
      'a',
      { className: prefixCls + '-year-select',
        role: 'button',
        onClick: this.showYearPanel,
        title: locale.monthSelect },
      this.yearFormatter.format(value)
    );
    var month = _react2['default'].createElement(
      'a',
      { className: prefixCls + '-month-select',
        role: 'button',
        onClick: this.showMonthPanel,
        title: locale.monthSelect },
      this.monthFormatter.format(value)
    );
    var my = [];
    if (monthBeforeYear) {
      my = [month, year];
    } else {
      my = [year, month];
    }
    return _react2['default'].createElement(
      'span',
      { className: selectClassName },
      toFragment(my)
    );
  },

  showIf: function showIf(condition, el) {
    return condition ? el : null;
  },

  showMonthPanel: function showMonthPanel() {
    this.setState({
      showMonthPanel: 1,
      showYearPanel: 0
    });
  },

  showYearPanel: function showYearPanel() {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 1
    });
  },

  render: function render() {
    var props = this.props;
    var enableNext = props.enableNext;
    var enablePrev = props.enablePrev;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;

    var state = this.state;
    var PanelClass = null;
    if (state.showMonthPanel) {
      PanelClass = _monthMonthPanel2['default'];
    } else if (state.showYearPanel) {
      PanelClass = _yearYearPanel2['default'];
    }
    var panel = undefined;
    if (PanelClass) {
      panel = _react2['default'].createElement(PanelClass, { locale: locale, defaultValue: value, rootPrefixCls: prefixCls, onSelect: this.onSelect });
    }
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-header' },
      _react2['default'].createElement(
        'div',
        { style: { position: 'relative' } },
        this.showIf(enablePrev, _react2['default'].createElement(
          'a',
          { className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear },
          '«'
        )),
        this.showIf(enablePrev, _react2['default'].createElement(
          'a',
          { className: prefixCls + '-prev-month-btn',
            role: 'button',
            onClick: this.previousMonth,
            title: locale.previousMonth },
          '‹'
        )),
        this.getMonthYearElement(),
        this.showIf(enableNext, _react2['default'].createElement(
          'a',
          { className: prefixCls + '-next-month-btn',
            onClick: this.nextMonth,
            title: locale.nextMonth },
          '›'
        )),
        this.showIf(enableNext, _react2['default'].createElement(
          'a',
          { className: prefixCls + '-next-year-btn',
            onClick: this.nextYear,
            title: locale.nextYear },
          '»'
        ))
      ),
      panel
    );
  }
});

exports['default'] = CalendarHeader;
module.exports = exports['default'];
},{"../month/MonthPanel":72,"../util/index":77,"../year/YearPanel":78,"rc-util":122,"react":"react"}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  DATE_ROW_COUNT: 6,
  DATE_COL_COUNT: 7
};
module.exports = exports["default"];
},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DateInput = _react2['default'].createClass({
  displayName: 'DateInput',

  propTypes: {
    formatter: _react.PropTypes.object,
    locale: _react.PropTypes.object,
    gregorianCalendarLocale: _react.PropTypes.object,
    disabledDate: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    value: _react.PropTypes.object
  },

  getInitialState: function getInitialState() {
    var value = this.props.value;
    return {
      str: value && this.props.formatter.format(value) || '',
      invalid: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    // when popup show, click body will call this, bug!
    var value = nextProps.value;
    this.setState({
      str: value && nextProps.formatter.format(value) || '',
      invalid: false
    });
  },

  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = undefined;
    var _props = this.props;
    var disabledDate = _props.disabledDate;
    var formatter = _props.formatter;
    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
    var onChange = _props.onChange;

    if (str) {
      try {
        value = formatter.parse(str, {
          locale: gregorianCalendarLocale,
          obeyCount: true
        });
      } catch (ex) {
        this.setState({
          invalid: true
        });
        return;
      }
      if (value && (!disabledDate || !disabledDate(value))) {
        var originalValue = this.props.value;
        if (originalValue && value) {
          if (originalValue.getTime() !== value.getTime()) {
            onChange(value);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        this.setState({
          invalid: true
        });
        return;
      }
    } else {
      onChange(null);
    }
    this.setState({
      invalid: false
    });
  },

  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear(null);
  },

  render: function render() {
    var props = this.props;
    var _state = this.state;
    var invalid = _state.invalid;
    var str = _state.str;
    var locale = props.locale;
    var prefixCls = props.prefixCls;
    var placeholder = props.placeholder;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      _react2['default'].createElement('input', { className: prefixCls + '-input  ' + invalidClass,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange }),
      props.showClear ? _react2['default'].createElement('a', { className: prefixCls + '-clear-btn',
        role: 'button',
        title: locale.clear,
        onClick: this.onClear }) : null
    );
  }
});

exports['default'] = DateInput;
module.exports = exports['default'];
},{"react":"react"}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateConstants = require('./DateConstants');

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _util = require('../util/');

function isSameDay(one, two) {
  return one.getYear() === two.getYear() && one.getMonth() === two.getMonth() && one.getDayOfMonth() === two.getDayOfMonth();
}

function beforeCurrentMonthYear(current, today) {
  if (current.getYear() < today.getYear()) {
    return 1;
  }
  return current.getYear() === today.getYear() && current.getMonth() < today.getMonth();
}

function afterCurrentMonthYear(current, today) {
  if (current.getYear() > today.getYear()) {
    return 1;
  }
  return current.getYear() === today.getYear() && current.getMonth() > today.getMonth();
}

function getIdFromDate(date) {
  return 'rc-calendar-' + date.getYear() + '-' + date.getMonth() + '-' + date.getDayOfMonth();
}

function noop() {}

function handleDayClick(current) {
  this.props.onSelect(current);
}

function handleCellMouseEnter(current) {
  this.props.onDayHover(current);
}

var DateTBody = _react2['default'].createClass({
  displayName: 'DateTBody',

  getDefaultProps: function getDefaultProps() {
    return {
      onDayHover: noop
    };
  },

  render: function render() {
    var props = this.props;
    var iIndex = undefined;
    var jIndex = undefined;
    var current = undefined;
    var dateTable = [];
    var showWeekNumber = props.showWeekNumber;
    var value = props.value;
    var selectedValue = props.selectedValue;
    var today = value.clone();
    var prefixCls = props.prefixCls;
    var cellClass = prefixCls + '-cell';
    var weekNumberCellClass = prefixCls + '-week-number-cell';
    var dateClass = prefixCls + '-date';
    var dateRender = props.dateRender;
    var disabledDate = props.disabledDate;
    var todayClass = prefixCls + '-today';
    var selectedClass = prefixCls + '-selected-day';
    var inRangeClass = prefixCls + '-in-range-cell';
    var lastMonthDayClass = prefixCls + '-last-month-cell';
    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
    var disabledClass = prefixCls + '-disabled-cell';
    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
    today.setTime(Date.now());
    var month1 = value.clone();
    month1.set(value.getYear(), value.getMonth(), 1);
    var day = month1.getDayOfWeek();
    var lastMonthDiffDay = (day + 7 - value.getFirstDayOfWeek()) % 7;
    // calculate last month
    var lastMonth1 = month1.clone();
    lastMonth1.addDayOfMonth(0 - lastMonthDiffDay);
    var passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;
        if (passed) {
          current = current.clone();
          current.addDayOfMonth(passed);
        }
        dateTable.push(current);
        passed++;
      }
    }
    var tableHtml = [];
    passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
      var weekNumberCell = undefined;
      var dateCells = [];
      if (showWeekNumber) {
        weekNumberCell = _react2['default'].createElement(
          'td',
          { key: dateTable[passed].getWeekOfYear(), role: 'gridcell',
            className: weekNumberCellClass },
          dateTable[passed].getWeekOfYear()
        );
      }
      for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];
        if (jIndex < _DateConstants2['default'].DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }
        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }
        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += ' ' + todayClass;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = selectedValue[0];
            var endValue = selectedValue[1];
            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
              }
            }
            if (startValue && endValue) {
              if (isSameDay(current, endValue) && !selectedValue.hovering) {
                selected = true;
              } else if ((0, _util.compareByDay)(current, startValue) > 0 && (0, _util.compareByDay)(current, endValue) < 0) {
                cls += ' ' + inRangeClass;
              }
            }
          }
        } else if (isSameDay(current, value)) {
          selected = true;
        }
        if (isBeforeCurrentMonthYear) {
          cls += ' ' + lastMonthDayClass;
        }
        if (isAfterCurrentMonthYear) {
          cls += ' ' + nextMonthDayClass;
        }
        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += ' ' + firstDisableClass;
            }

            if (!next || !disabledDate(next, value)) {
              cls += ' ' + lastDisableClass;
            }
          }
        }

        if (selected) {
          cls += ' ' + selectedClass;
        }

        if (disabled) {
          cls += ' ' + disabledClass;
        }

        var dateHtml = undefined;
        if (dateRender) {
          dateHtml = dateRender(current, value);
        } else {
          dateHtml = _react2['default'].createElement(
            'span',
            {
              key: getIdFromDate(current),
              className: dateClass,
              'aria-selected': selected,
              'aria-disabled': disabled },
            current.getDayOfMonth()
          );
        }

        dateCells.push(_react2['default'].createElement(
          'td',
          { key: passed,
            onClick: disabled ? noop : handleDayClick.bind(this, current),
            onMouseEnter: disabled ? noop : handleCellMouseEnter.bind(this, current),
            role: 'gridcell',
            title: (0, _util.getTitleString)(current), className: cls },
          dateHtml
        ));

        passed++;
      }
      tableHtml.push(_react2['default'].createElement(
        'tr',
        {
          key: iIndex,
          role: 'row' },
        weekNumberCell,
        dateCells
      ));
    }
    return _react2['default'].createElement(
      'tbody',
      { className: prefixCls + 'tbody' },
      tableHtml
    );
  }
});

exports['default'] = DateTBody;
module.exports = exports['default'];
},{"../util/":77,"./DateConstants":61,"react":"react"}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateConstants = require('./DateConstants');

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var DateTHead = (function (_React$Component) {
  _inherits(DateTHead, _React$Component);

  function DateTHead() {
    _classCallCheck(this, DateTHead);

    _get(Object.getPrototypeOf(DateTHead.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DateTHead, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var value = props.value;
      var locale = props.locale;
      var prefixCls = props.prefixCls;
      var veryShortWeekdays = [];
      var weekDays = [];
      var firstDayOfWeek = value.getFirstDayOfWeek();
      var showWeekNumberEl = undefined;

      for (var dateColIndex = 0; dateColIndex < _DateConstants2['default'].DATE_COL_COUNT; dateColIndex++) {
        var index = (firstDayOfWeek + dateColIndex) % _DateConstants2['default'].DATE_COL_COUNT;
        veryShortWeekdays[dateColIndex] = locale.format.veryShortWeekdays[index];
        weekDays[dateColIndex] = locale.format.weekdays[index];
      }

      if (props.showWeekNumber) {
        showWeekNumberEl = _react2['default'].createElement(
          'th',
          { role: 'columnheader', className: prefixCls + '-column-header ' + prefixCls + '-week-number-header' },
          _react2['default'].createElement(
            'span',
            { className: prefixCls + '-column-header-inner' },
            'x'
          )
        );
      }
      var weekDaysEls = weekDays.map(function (day, xindex) {
        return _react2['default'].createElement(
          'th',
          { key: xindex, role: 'columnheader', title: day, className: prefixCls + '-column-header' },
          _react2['default'].createElement(
            'span',
            { className: prefixCls + '-column-header-inner' },
            veryShortWeekdays[xindex]
          )
        );
      });
      return _react2['default'].createElement(
        'thead',
        null,
        _react2['default'].createElement(
          'tr',
          { role: 'row' },
          showWeekNumberEl,
          weekDaysEls
        )
      );
    }
  }]);

  return DateTHead;
})(_react2['default'].Component);

exports['default'] = DateTHead;
module.exports = exports['default'];
},{"./DateConstants":61,"react":"react"}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateTHead = require('./DateTHead');

var _DateTHead2 = _interopRequireDefault(_DateTHead);

var _DateTBody = require('./DateTBody');

var _DateTBody2 = _interopRequireDefault(_DateTBody);

var DateTable = (function (_React$Component) {
  _inherits(DateTable, _React$Component);

  function DateTable() {
    _classCallCheck(this, DateTable);

    _get(Object.getPrototypeOf(DateTable.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DateTable, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var prefixCls = props.prefixCls;
      return _react2['default'].createElement(
        'table',
        { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
        _react2['default'].createElement(_DateTHead2['default'], props),
        _react2['default'].createElement(_DateTBody2['default'], props)
      );
    }
  }]);

  return DateTable;
})(_react2['default'].Component);

exports['default'] = DateTable;
module.exports = exports['default'];
},{"./DateTBody":63,"./DateTHead":64,"react":"react"}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ROW = 4;
var COL = 3;

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({
    value: next
  });
}

function chooseDecade(year, event) {
  var next = this.state.value.clone();
  next.setYear(year);
  next.rollSetMonth(this.state.value.getMonth());
  this.props.onSelect(next);
  event.preventDefault();
}

var DecadePanel = (function (_React$Component) {
  _inherits(DecadePanel, _React$Component);

  function DecadePanel(props) {
    _classCallCheck(this, DecadePanel);

    _get(Object.getPrototypeOf(DecadePanel.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: props.value || props.defaultValue
    };

    // bind methods
    this.prefixCls = props.rootPrefixCls + '-decade-panel';
    this.nextCentury = goYear.bind(this, 100);
    this.previousCentury = goYear.bind(this, -100);
  }

  _createClass(DecadePanel, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var value = this.state.value;
      var locale = this.props.locale;
      var currentYear = value.getYear();
      var startYear = parseInt(currentYear / 100, 10) * 100;
      var preYear = startYear - 10;
      var endYear = startYear + 99;
      var decades = [];
      var index = 0;
      var prefixCls = this.prefixCls;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        decades[rowIndex] = [];
        for (var colIndex = 0; colIndex < COL; colIndex++) {
          var startDecade = preYear + index * 10;
          var endDecade = preYear + index * 10 + 9;
          decades[rowIndex][colIndex] = {
            startDecade: startDecade,
            endDecade: endDecade
          };
          index++;
        }
      }

      var decadesEls = decades.map(function (row, decadeIndex) {
        var tds = row.map(function (decadeData) {
          var _classNameMap;

          var dStartDecade = decadeData.startDecade;
          var dEndDecade = decadeData.endDecade;
          var isLast = dStartDecade < startYear;
          var isNext = dEndDecade > endYear;
          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, prefixCls + '-last-century-cell', isLast), _defineProperty(_classNameMap, prefixCls + '-next-century-cell', isNext), _classNameMap);
          var content = undefined;
          var clickHandler = undefined;
          if (isLast) {
            clickHandler = _this.previousCentury;
          } else if (isNext) {
            clickHandler = _this.nextCentury;
          } else {
            content = dStartDecade + '-' + dEndDecade;
            clickHandler = chooseDecade.bind(_this, dStartDecade);
          }
          return _react2['default'].createElement(
            'td',
            {
              key: dStartDecade,
              onClick: clickHandler,
              role: 'gridcell',
              className: (0, _classnames2['default'])(classNameMap)
            },
            _react2['default'].createElement(
              'a',
              {
                className: prefixCls + '-decade' },
              content
            )
          );
        });
        return _react2['default'].createElement(
          'tr',
          { key: decadeIndex, role: 'row' },
          tds
        );
      });

      return _react2['default'].createElement(
        'div',
        { className: this.prefixCls },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement(
            'a',
            { className: prefixCls + '-prev-century-btn',
              role: 'button',
              onClick: this.previousCentury,
              title: locale.previousCentury },
            '«'
          ),
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-century' },
            startYear,
            '-',
            endYear
          ),
          _react2['default'].createElement(
            'a',
            { className: prefixCls + '-next-century-btn',
              role: 'button',
              onClick: this.nextCentury,
              title: locale.nextCentury },
            '»'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            _react2['default'].createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              decadesEls
            )
          )
        )
      );
    }
  }]);

  return DecadePanel;
})(_react2['default'].Component);

exports['default'] = DecadePanel;

DecadePanel.propTypes = {
  locale: _react.PropTypes.object,
  value: _react.PropTypes.object,
  defaultValue: _react.PropTypes.object,
  rootPrefixCls: _react.PropTypes.string
};

DecadePanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];
},{"classnames":79,"react":"react"}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

exports['default'] = _Calendar2['default'];
module.exports = exports['default'];
},{"./Calendar":57}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gregorianCalendarFormatLibLocaleEn_US = require('gregorian-calendar-format/lib/locale/en_US');

var _gregorianCalendarFormatLibLocaleEn_US2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleEn_US);

exports['default'] = {
  today: 'Today',
  now: 'Now',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  hourPanelTitle: 'Select hour',
  minutePanelTitle: 'Select minute',
  secondPanelTitle: 'Select second',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'yyyy',
  dateFormat: 'M/d/yyyy',
  monthFormat: 'MMMM',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  hourInput: 'Last hour(Up), Next hour(Down)',
  minuteInput: 'Last minute(Up), Next minute(Down)',
  secondInput: 'Last second(Up), Next second(Down)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century',
  format: _gregorianCalendarFormatLibLocaleEn_US2['default']
};
module.exports = exports['default'];
},{"gregorian-calendar-format/lib/locale/en_US":81}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gregorianCalendarFormatLibLocaleZh_CN = require('gregorian-calendar-format/lib/locale/zh_CN');

var _gregorianCalendarFormatLibLocaleZh_CN2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZh_CN);

exports['default'] = {
  today: '今天',
  now: '此刻',
  ok: '确定',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上个月 (翻页上键)',
  nextMonth: '下个月 (翻页下键)',
  monthSelect: '选择月份',
  yearSelect: '选择年份',
  decadeSelect: '选择年代',
  hourInput: '上一小时(上方向键), 下一小时(下方向键)',
  minuteInput: '上一分钟(上方向键), 下一分钟(下方向键)',
  secondInput: '上一秒(上方向键), 下一小时(下方向键)',
  hourPanelTitle: '选择小时',
  minutePanelTitle: '选择分钟',
  secondPanelTitle: '选择秒',
  yearFormat: 'yyyy\'年\'',
  monthFormat: 'M\'月\'',
  dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
  previousYear: '上一年 (Control键加左方向键)',
  nextYear: '下一年 (Control键加右方向键)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世纪',
  nextCentury: '下一世纪',
  format: _gregorianCalendarFormatLibLocaleZh_CN2['default']
};
module.exports = exports['default'];
},{"gregorian-calendar-format/lib/locale/zh_CN":82}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

function noop() {}

function getNow() {
  var value = new _gregorianCalendar2['default']();
  value.setTime(Date.now());
  return value;
}

function getNowByCurrentStateValue(value) {
  var ret = undefined;
  if (value) {
    ret = value.clone();
    ret.setTime(Date.now());
  } else {
    ret = getNow();
  }
  return ret;
}

var CalendarMixin = {
  propTypes: {
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    onKeyDown: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onKeyDown: noop
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    var value = props.value || props.defaultValue || getNow();
    return {
      value: value,
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var selectedValue = nextProps.selectedValue;

    if (value !== undefined) {
      value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
      this.setState({
        value: value
      });
    }
    if (selectedValue !== undefined) {
      this.setState({
        selectedValue: selectedValue
      });
    }
  },

  onSelect: function onSelect(value, cause) {
    if (value) {
      this.setValue(value);
    }
    this.setSelectedValue(value, cause);
  },

  renderRoot: function renderRoot(newProps) {
    var _className;

    var props = this.props;
    var prefixCls = props.prefixCls;

    var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, prefixCls + '-hidden', !props.visible), _defineProperty(_className, props.className, !!props.className), _className);

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])(className) + ' ' + newProps.className,
        style: this.props.style,
        tabIndex: '0', onKeyDown: this.onKeyDown },
      newProps.children
    );
  },

  setSelectedValue: function setSelectedValue(selectedValue, cause) {
    if (this.isAllowedDate(selectedValue)) {
      if (!('selectedValue' in this.props)) {
        this.setState({
          selectedValue: selectedValue
        });
      }
      this.props.onSelect(selectedValue, cause || {});
    }
  },

  setValue: function setValue(value) {
    var originalValue = this.state.value;
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    if (originalValue && value && originalValue.getTime() !== value.getTime() || !originalValue && value || originalValue && !value) {
      this.props.onChange(value);
    }
  },

  isAllowedDate: function isAllowedDate(value) {
    var disabledDate = this.props.disabledDate;
    return !disabledDate || !disabledDate(value);
  }
};

exports['default'] = CalendarMixin;
module.exports = exports['default'];
},{"classnames":79,"gregorian-calendar":85,"react":"react"}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _localeEn_US = require('../locale/en_US');

var _localeEn_US2 = _interopRequireDefault(_localeEn_US);

var _utilIndex = require('../util/index');

function noop() {}

exports['default'] = {
  propTypes: {
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    style: _react.PropTypes.object,
    visible: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onOk: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      locale: _localeEn_US2['default'],
      style: {},
      visible: true,
      prefixCls: 'rc-calendar',
      className: '',
      onSelect: noop,
      onChange: noop
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },

  getFormatter: function getFormatter() {
    var formatter = this.props.formatter;
    var locale = this.props.locale;
    if (formatter) {
      if (formatter === this.lastFormatter) {
        return this.normalFormatter;
      }
      this.normalFormatter = (0, _utilIndex.getFormatter)(formatter, locale);
      this.lastFormatter = formatter;
      return this.normalFormatter;
    }
    if (this.props.showTime) {
      if (!this.showTimeFormatter) {
        this.showTimeFormatter = (0, _utilIndex.getFormatter)('yyyy-MM-dd HH:mm:ss', locale);
      }
      return this.showTimeFormatter;
    }
    if (!this.showDateFormatter) {
      this.showDateFormatter = (0, _utilIndex.getFormatter)('yyyy-MM-dd', locale);
    }
    return this.showDateFormatter;
  }
};
module.exports = exports['default'];
},{"../locale/en_US":68,"../util/index":77,"react":"react"}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _yearYearPanel = require('../year/YearPanel');

var _yearYearPanel2 = _interopRequireDefault(_yearYearPanel);

var _MonthTable = require('./MonthTable');

var _MonthTable2 = _interopRequireDefault(_MonthTable);

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setAndChangeValue(next);
}

function noop() {}

var MonthPanel = _react2['default'].createClass({
  displayName: 'MonthPanel',

  propTypes: {
    onChange: _react.PropTypes.func,
    onSelect: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: noop,
      onSelect: noop
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    // bind methods
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    this.prefixCls = props.rootPrefixCls + '-month-panel';
    return {
      value: props.value || props.defaultValue
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },

  onYearPanelSelect: function onYearPanelSelect(current) {
    this.setState({
      showYearPanel: 0
    });
    this.setAndChangeValue(current);
  },

  setAndChangeValue: function setAndChangeValue(value) {
    this.setValue(value);
    this.props.onChange(value);
  },

  setAndSelectValue: function setAndSelectValue(value) {
    this.setValue(value);
    this.props.onSelect(value);
  },

  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
  },

  showYearPanel: function showYearPanel() {
    this.setState({
      showYearPanel: 1
    });
  },

  render: function render() {
    var props = this.props;
    var value = this.state.value;
    var locale = props.locale;
    var year = value.getYear();
    var prefixCls = this.prefixCls;
    var yearPanel = undefined;
    if (this.state.showYearPanel) {
      yearPanel = _react2['default'].createElement(_yearYearPanel2['default'], { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls,
        onSelect: this.onYearPanelSelect });
    }
    return _react2['default'].createElement(
      'div',
      { className: prefixCls, style: props.style },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement(
            'a',
            { className: prefixCls + '-prev-year-btn',
              role: 'button',
              onClick: this.previousYear,
              title: locale.previousYear },
            '«'
          ),
          _react2['default'].createElement(
            'a',
            { className: prefixCls + '-year-select',
              role: 'button',
              onClick: this.showYearPanel,
              title: locale.yearSelect },
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          _react2['default'].createElement(
            'a',
            { className: prefixCls + '-next-year-btn',
              role: 'button',
              onClick: this.nextYear,
              title: locale.nextYear },
            '»'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(_MonthTable2['default'], {
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            prefixCls: prefixCls })
        )
      ),
      yearPanel
    );
  }
});

exports['default'] = MonthPanel;
module.exports = exports['default'];
},{"../year/YearPanel":78,"./MonthTable":73,"react":"react"}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ROW = 4;
var COL = 3;

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.rollSetMonth(month);
  this.setAndSelectValue(next);
}

function noop() {}

var MonthTable = (function (_Component) {
  _inherits(MonthTable, _Component);

  function MonthTable(props) {
    _classCallCheck(this, MonthTable);

    _get(Object.getPrototypeOf(MonthTable.prototype), 'constructor', this).call(this, props);

    this.state = {
      value: props.value
    };
  }

  _createClass(MonthTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'getMonths',
    value: function getMonths() {
      var props = this.props;
      var value = this.state.value;
      var current = value.clone();
      var locale = props.locale;
      var months = [];
      var shortMonths = locale.format.shortMonths;
      var index = 0;
      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        months[rowIndex] = [];
        for (var colIndex = 0; colIndex < COL; colIndex++) {
          current.rollSetMonth(index);
          months[rowIndex][colIndex] = {
            value: index,
            content: shortMonths[index],
            title: shortMonths[index]
          };
          index++;
        }
      }
      return months;
    }
  }, {
    key: 'setAndSelectValue',
    value: function setAndSelectValue(value) {
      this.setState({
        value: value
      });
      this.props.onSelect(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var props = this.props;
      var value = this.state.value;
      var today = value.clone();
      today.setTime(Date.now());
      var months = this.getMonths();
      var currentMonth = value.getMonth();
      var prefixCls = props.prefixCls;
      var locale = props.locale;

      var monthsEls = months.map(function (month, index) {
        var tds = month.map(function (monthData) {
          var _classNameMap;

          var disabled = false;
          if (props.disabledDate) {
            var testValue = value.clone();
            testValue.rollSetMonth(monthData.value);
            disabled = props.disabledDate(testValue);
          }
          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-cell-disabled', disabled), _defineProperty(_classNameMap, prefixCls + '-selected-cell', monthData.value === currentMonth), _defineProperty(_classNameMap, prefixCls + '-current-cell', today.getYear() === value.getYear() && monthData.value === today.getMonth()), _classNameMap);
          var cellEl = undefined;
          if (props.cellRender) {
            var currentValue = value.clone();
            currentValue.rollSetMonth(monthData.value);
            cellEl = props.cellRender(currentValue, locale);
          } else {
            cellEl = _react2['default'].createElement(
              'a',
              { className: prefixCls + '-month' },
              monthData.content
            );
          }
          return _react2['default'].createElement(
            'td',
            { role: 'gridcell',
              key: monthData.value,
              onClick: disabled ? null : chooseMonth.bind(_this, monthData.value),
              title: monthData.title,
              className: (0, _classnames2['default'])(classNameMap) },
            cellEl
          );
        });
        return _react2['default'].createElement(
          'tr',
          { key: index, role: 'row' },
          tds
        );
      });

      return _react2['default'].createElement(
        'table',
        { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
        _react2['default'].createElement(
          'tbody',
          { className: prefixCls + '-tbody' },
          monthsEls
        )
      );
    }
  }]);

  return MonthTable;
})(_react.Component);

MonthTable.defaultProps = {
  onSelect: noop
};
MonthTable.propTypes = {
  onSelect: _react.PropTypes.func,
  cellRender: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  value: _react.PropTypes.object
};
exports['default'] = MonthTable;
module.exports = exports['default'];
},{"classnames":79,"react":"react"}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;
module.exports = exports['default'];
},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _rcUtil2 = _interopRequireDefault(_rcUtil);

var _TimePanel = require('./TimePanel');

var _TimePanel2 = _interopRequireDefault(_TimePanel);

var setHourOfDay = 'setHourOfDay';
var setMinutes = 'setMinutes';
var setSeconds = 'setSeconds';

function padding(number) {
  var ret = number;
  if (ret < 10) {
    ret = '0' + ret;
  }
  return ret;
}

function loop(value, min, max) {
  var ret = value;
  if (ret === min - 1) {
    ret = max;
  } else if (ret === max + 1) {
    ret = min;
  }
  return ret;
}

function keyDownWrap(method, min, max) {
  return function onKeyDown(event) {
    if (this.props.disabled) {
      return;
    }
    var value = event.target.value;
    var number = parseInt(value, 10);
    var keyCode = event.keyCode;
    var handled = undefined;
    if (keyCode === _rcUtil.KeyCode.DOWN) {
      number++;
      event.stopPropagation();
      event.preventDefault();
      handled = 1;
    } else if (keyCode === _rcUtil.KeyCode.UP) {
      number--;
      event.stopPropagation();
      event.preventDefault();
      handled = 1;
    }
    if (handled) {
      number = loop(number, min, max);
      var time = this.props.value.clone();
      time[method](number);
      this.props.onChange(time, event);
    }
  };
}

var Time = (function (_React$Component) {
  _inherits(Time, _React$Component);

  function Time(props) {
    var _this = this;

    _classCallCheck(this, Time);

    _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).call(this, props);
    this.state = {
      showHourPanel: 0,
      showMinutePanel: 0,
      showSecondPanel: 0
    };
    var events = ['onHourKeyDown', 'onMinuteKeyDown', 'onSecondKeyDown', 'onHourClick', 'onMinuteClick', 'onSecondClick', 'onSelectPanel'];
    events.forEach(function (method) {
      _this[method] = _this[method].bind(_this);
    });
  }

  _createClass(Time, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return _rcUtil2['default'].PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
  }, {
    key: 'onSelectPanel',
    value: function onSelectPanel(value, setter) {
      var _this2 = this;

      this.setState({
        showHourPanel: 0,
        showMinutePanel: 0,
        showSecondPanel: 0
      }, function () {
        // ie9 has broken focus
        _this2.refs[setter].focus();
      });
      this.props.onChange(value);
    }
  }, {
    key: 'onHourClick',
    value: function onHourClick() {
      if (this.props.disabled) {
        return;
      }
      this.setState({
        showHourPanel: 1,
        showMinutePanel: 0,
        showSecondPanel: 0
      });
    }
  }, {
    key: 'onMinuteClick',
    value: function onMinuteClick() {
      if (this.props.disabled) {
        return;
      }
      this.setState({
        showHourPanel: 0,
        showMinutePanel: 1,
        showSecondPanel: 0
      });
    }
  }, {
    key: 'onSecondClick',
    value: function onSecondClick() {
      if (this.props.disabled) {
        return;
      }
      this.setState({
        showHourPanel: 0,
        showMinutePanel: 0,
        showSecondPanel: 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var state = this.state;
      var props = this.props;
      var disabled = props.disabled;
      var prefixCls = props.prefixCls;
      var value = props.value;
      var locale = props.locale;
      var hour = value.getHourOfDay();
      var minute = value.getMinutes();
      var second = value.getSeconds();
      var panel = undefined;
      var commonProps = {
        value: value,
        onSelect: this.onSelectPanel,
        rootPrefixCls: prefixCls
      };
      if (state.showHourPanel) {
        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 4, getter: 'getHourOfDay', setter: setHourOfDay,
          title: locale.hourPanelTitle
        }, commonProps));
      } else if (state.showMinutePanel) {
        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 10, getter: 'getMinutes', setter: setMinutes,
          title: locale.minutePanelTitle
        }, commonProps));
      } else if (state.showSecondPanel) {
        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 10, getter: 'getSeconds', setter: setSeconds,
          title: locale.secondPanelTitle
        }, commonProps));
      }
      return _react2['default'].createElement(
        'span',
        { className: prefixCls + '-time' },
        _react2['default'].createElement('input', { className: prefixCls + '-time-input',
          title: locale.hourInput,
          ref: setHourOfDay,
          readOnly: true,
          disabled: disabled,
          value: padding(hour),
          onClick: this.onHourClick,
          onKeyDown: this.onHourKeyDown }),
        _react2['default'].createElement(
          'span',
          { className: prefixCls + '-time-minute' },
          _react2['default'].createElement(
            'span',
            null,
            ' : '
          ),
          _react2['default'].createElement('input', { className: prefixCls + '-time-input',
            title: locale.minuteInput,
            ref: setMinutes,
            readOnly: true,
            disabled: disabled,
            value: padding(minute),
            onClick: this.onMinuteClick,
            onKeyDown: this.onMinuteKeyDown })
        ),
        _react2['default'].createElement(
          'span',
          { className: prefixCls + '-time-second' },
          _react2['default'].createElement(
            'span',
            null,
            ' : '
          ),
          _react2['default'].createElement('input', { className: prefixCls + '-time-input',
            title: locale.secondInput,
            ref: setSeconds,
            readOnly: true,
            disabled: disabled,
            value: padding(second),
            onClick: this.onSecondClick,
            onKeyDown: this.onSecondKeyDown })
        ),
        panel
      );
    }
  }]);

  return Time;
})(_react2['default'].Component);

exports['default'] = Time;

Time.prototype.onHourKeyDown = keyDownWrap('setHourOfDay', 0, 23);
Time.prototype.onMinuteKeyDown = keyDownWrap('setMinutes', 0, 59);
Time.prototype.onSecondKeyDown = keyDownWrap('setSeconds', 0, 59);

Time.propTypes = {
  onChange: _react.PropTypes.func,
  disabled: _react.PropTypes.bool
};

Time.defaultProps = {
  onChange: function onChange() {}
};
module.exports = exports['default'];
},{"./TimePanel":76,"rc-util":122,"react":"react"}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function choose(hour, event) {
  var next = this.state.value.clone();
  var method = this.props.setter;
  next[method](hour);
  this.props.onSelect(next, method);
  event.preventDefault();
}

var TimePanel = (function (_React$Component) {
  _inherits(TimePanel, _React$Component);

  function TimePanel(props) {
    _classCallCheck(this, TimePanel);

    _get(Object.getPrototypeOf(TimePanel.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: props.value
    };
    this.prefixCls = props.rootPrefixCls + '-time-panel';
  }

  _createClass(TimePanel, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var value = this.state.value;
      var props = this.props;
      var method = props.getter;
      var currentHour = value[method]();
      var data = [];
      var prefixCls = this.prefixCls;
      var ROW = props.rowCount;
      var COL = props.colCount;

      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        data[rowIndex] = [];
        for (var colIndex = 0; colIndex < COL; colIndex++) {
          data[rowIndex][colIndex] = rowIndex * COL + colIndex;
        }
      }

      var hoursEls = data.map(function (row, index) {
        var tds = row.map(function (hour) {
          var _classNameMap;

          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', hour === currentHour), _classNameMap);
          return _react2['default'].createElement(
            'td',
            {
              key: hour,
              onClick: choose.bind(_this, hour),
              role: 'gridcell',
              className: (0, _classnames2['default'])(classNameMap) },
            _react2['default'].createElement(
              'a',
              {
                className: prefixCls + '-time' },
              hour
            )
          );
        });
        return _react2['default'].createElement(
          'tr',
          { key: index, role: 'row' },
          tds
        );
      });

      return _react2['default'].createElement(
        'div',
        { className: prefixCls },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-title' },
            props.title
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            _react2['default'].createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              hoursEls
            )
          )
        )
      );
    }
  }]);

  return TimePanel;
})(_react2['default'].Component);

exports['default'] = TimePanel;

TimePanel.propTypes = {
  value: _react.PropTypes.object,
  rootPrefixCls: _react.PropTypes.string
};

TimePanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];
},{"classnames":79,"react":"react"}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getTodayTime = getTodayTime;
exports.getTitleString = getTitleString;
exports.compareByDay = compareByDay;
exports.getFormatter = getFormatter;
exports.getTodayElement = getTodayElement;
exports.getOkElement = getOkElement;
exports.syncTime = syncTime;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

function getTodayTime(value) {
  var today = value.clone();
  today.setTime(Date.now());
  return today;
}

function getTitleString(value) {
  return value.getYear() + '-' + (value.getMonth() + 1) + '-' + value.getDayOfMonth();
}

function getTodayTimeStr(value) {
  var today = getTodayTime(value);
  return getTitleString(today);
}

function compareByDay(v1, v2) {
  if (v1.getYear() > v2.getYear()) {
    return 1;
  }
  if (v1.getYear() < v2.getYear()) {
    return -1;
  }
  if (v1.getMonth() > v2.getMonth()) {
    return 1;
  }
  if (v1.getMonth() < v2.getMonth()) {
    return -1;
  }

  if (v1.getDayOfMonth() > v2.getDayOfMonth()) {
    return 1;
  }
  if (v1.getDayOfMonth() < v2.getDayOfMonth()) {
    return -1;
  }

  return 0;
}

function getFormatter(format, locale) {
  if (typeof format === 'string') {
    return new _gregorianCalendarFormat2['default'](format, locale.format);
  }
  return format;
}

function getTodayElement(componentProps) {
  var prefixCls = componentProps.prefixCls;
  var locale = componentProps.locale;
  var value = componentProps.value;

  var disabledToday = false;
  var localeNow = locale.today;
  if (componentProps.showTime) {
    localeNow = locale.now || locale.today;
  }
  var disabledTodayClass = '';
  if (componentProps.disabledDate) {
    disabledToday = componentProps.disabledDate(getTodayTime(value), value);
    if (disabledToday) {
      disabledTodayClass = prefixCls + '-today-btn-disabled';
    }
  }
  return _react2['default'].createElement(
    'a',
    { className: prefixCls + '-today-btn ' + disabledTodayClass,
      role: 'button',
      onClick: disabledToday ? null : componentProps.onToday,
      title: getTodayTimeStr(componentProps.value) },
    localeNow
  );
}

function getOkElement(componentProps) {
  var prefixCls = componentProps.prefixCls;
  var locale = componentProps.locale;

  var className = prefixCls + '-ok-btn';
  if (componentProps.okDisabled) {
    className += ' ' + prefixCls + '-ok-btn-disabled';
  }
  return _react2['default'].createElement(
    'a',
    { className: className,
      role: 'button',
      onClick: componentProps.okDisabled ? null : componentProps.onOk },
    locale.ok
  );
}

function syncTime(from, to) {
  to.setHourOfDay(from.getHourOfDay());
  to.setMinutes(from.getMinutes());
  to.setSeconds(from.getSeconds());
}
},{"gregorian-calendar-format":80,"react":"react"}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _decadeDecadePanel = require('../decade/DecadePanel');

var _decadeDecadePanel2 = _interopRequireDefault(_decadeDecadePanel);

var ROW = 4;
var COL = 3;

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({ value: next });
}

function chooseYear(year) {
  var next = this.state.value.clone();
  next.setYear(year);
  next.rollSetMonth(this.state.value.getMonth());
  this.props.onSelect(next);
}

var YearPanel = (function (_React$Component) {
  _inherits(YearPanel, _React$Component);

  function YearPanel(props) {
    var _this = this;

    _classCallCheck(this, YearPanel);

    _get(Object.getPrototypeOf(YearPanel.prototype), 'constructor', this).call(this, props);
    this.prefixCls = props.rootPrefixCls + '-year-panel';
    this.state = {
      value: props.value || props.defaultValue
    };
    this.nextDecade = goYear.bind(this, 10);
    this.previousDecade = goYear.bind(this, -10);
    ['showDecadePanel', 'onDecadePanelSelect'].forEach(function (method) {
      _this[method] = _this[method].bind(_this);
    });
  }

  _createClass(YearPanel, [{
    key: 'onDecadePanelSelect',
    value: function onDecadePanelSelect(current) {
      this.setState({
        value: current,
        showDecadePanel: 0
      });
    }
  }, {
    key: 'getYears',
    value: function getYears() {
      var value = this.state.value;
      var currentYear = value.getYear();
      var startYear = parseInt(currentYear / 10, 10) * 10;
      var previousYear = startYear - 1;
      var endYear = startYear + 9;
      var years = [];
      var index = 0;
      for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
        years[rowIndex] = [];
        for (var colIndex = 0; colIndex < COL; colIndex++) {
          var year = previousYear + index;
          var content = undefined;
          if (year < startYear) {
            content = '';
          } else if (year > endYear) {
            content = '';
          } else {
            content = year + '';
          }
          years[rowIndex][colIndex] = {
            content: content,
            year: year,
            title: content
          };
          index++;
        }
      }
      return years;
    }
  }, {
    key: 'showDecadePanel',
    value: function showDecadePanel() {
      this.setState({
        showDecadePanel: 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var value = this.state.value;
      var locale = props.locale;
      var years = this.getYears();
      var currentYear = value.getYear();
      var startYear = parseInt(currentYear / 10, 10) * 10;
      var endYear = startYear + 9;
      var prefixCls = this.prefixCls;

      var yeasEls = years.map(function (row, index) {
        var tds = row.map(function (yearData) {
          var _classNameMap;

          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', yearData.year === currentYear), _defineProperty(_classNameMap, prefixCls + '-last-decade-cell', yearData.year < startYear), _defineProperty(_classNameMap, prefixCls + '-next-decade-cell', yearData.year > endYear), _classNameMap);
          var clickHandler = undefined;
          if (yearData.year < startYear) {
            clickHandler = _this2.previousDecade;
          } else if (yearData.year > endYear) {
            clickHandler = _this2.nextDecade;
          } else {
            clickHandler = chooseYear.bind(_this2, yearData.year);
          }
          return _react2['default'].createElement(
            'td',
            { role: 'gridcell',
              title: yearData.title,
              key: yearData.content,
              onClick: clickHandler,
              className: (0, _classnames2['default'])(classNameMap)
            },
            _react2['default'].createElement(
              'a',
              {
                className: prefixCls + '-year' },
              yearData.content
            )
          );
        });
        return _react2['default'].createElement(
          'tr',
          { key: index, role: 'row' },
          tds
        );
      });

      var decadePanel = undefined;
      if (this.state.showDecadePanel) {
        decadePanel = _react2['default'].createElement(_decadeDecadePanel2['default'], { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls,
          onSelect: this.onDecadePanelSelect });
      }

      return _react2['default'].createElement(
        'div',
        { className: this.prefixCls },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-header' },
            _react2['default'].createElement(
              'a',
              { className: prefixCls + '-prev-decade-btn',
                role: 'button',
                onClick: this.previousDecade,
                title: locale.previousDecade },
              '«'
            ),
            _react2['default'].createElement(
              'a',
              { className: prefixCls + '-decade-select',
                role: 'button',
                onClick: this.showDecadePanel,
                title: locale.decadeSelect },
              _react2['default'].createElement(
                'span',
                { className: prefixCls + '-decade-select-content' },
                startYear,
                '-',
                endYear
              ),
              _react2['default'].createElement(
                'span',
                { className: prefixCls + '-decade-select-arrow' },
                'x'
              )
            ),
            _react2['default'].createElement(
              'a',
              { className: prefixCls + '-next-decade-btn',
                role: 'button',
                onClick: this.nextDecade,
                title: locale.nextDecade },
              '»'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-body' },
            _react2['default'].createElement(
              'table',
              { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
              _react2['default'].createElement(
                'tbody',
                { className: prefixCls + '-tbody' },
                yeasEls
              )
            )
          )
        ),
        decadePanel
      );
    }
  }]);

  return YearPanel;
})(_react2['default'].Component);

exports['default'] = YearPanel;

YearPanel.propTypes = {
  rootPrefixCls: _react.PropTypes.string,
  value: _react.PropTypes.object,
  defaultValue: _react.PropTypes.object
};

YearPanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];
},{"../decade/DecadePanel":66,"classnames":79,"react":"react"}],79:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],80:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"./locale/en_US":81,"dup":31,"gregorian-calendar":85,"warning":83}],81:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],82:[function(require,module,exports){
'use strict';

module.exports = {
  eras: ['公元前', '公元'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
  ampms: ['上午', '下午'],
  datePatterns: ['yyyy\'年\'M\'月\'d\'日\' EEEE', 'yyyy\'年\'M\'月\'d\'日\'', 'yyyy-M-d', 'yy-M-d'],
  timePatterns: ['ahh\'时\'mm\'分\'ss\'秒\' \'GMT\'Z', 'ahh\'时\'mm\'分\'ss\'秒\'', 'H:mm:ss', 'ah:mm'],
  dateTimePattern: '{date} {time}'
};
},{}],83:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"_process":30,"dup":33}],84:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],85:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"./const":84,"./locale/en_US":86,"./utils":87,"dup":35}],86:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"dup":36}],87:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"./const":84,"dup":38}],88:[function(require,module,exports){
/* eslint-disable no-unused-vars */
'use strict';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = require('rc-align');

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = require('./PopupInner');

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var Popup = _react2['default'].createClass({
  displayName: 'Popup',

  propTypes: {
    visible: _react.PropTypes.bool,
    wrap: _react.PropTypes.object,
    style: _react.PropTypes.object,
    getClassNameFromAlign: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func,
    className: _react.PropTypes.string,
    onMouseLeave: _react.PropTypes.func
  },

  componentDidMount: function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
  },

  onAlign: function onAlign(popupDomNode, align) {
    var props = this.props;
    var alignClassName = props.getClassNameFromAlign(props.align);
    var currentAlignClassName = props.getClassNameFromAlign(align);
    if (alignClassName !== currentAlignClassName) {
      this.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = this.getClassName(currentAlignClassName);
    }
  },

  getPopupDomNode: function getPopupDomNode() {
    return _reactDom2['default'].findDOMNode(this);
  },

  getTarget: function getTarget() {
    return _reactDom2['default'].findDOMNode(this.props.wrap);
  },

  getTransitionName: function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  },

  getClassName: function getClassName(currentAlignClassName) {
    var props = this.props;
    var prefixCls = props.prefixCls;

    var className = prefixCls + ' ' + props.className + ' ';
    className += currentAlignClassName;
    return className;
  },

  render: function render() {
    var props = this.props;
    var align = props.align;
    var style = props.style;
    var visible = props.visible;
    var prefixCls = props.prefixCls;
    var destroyPopupOnHide = props.destroyPopupOnHide;

    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';
    if (!visible) {
      this.currentAlignClassName = null;
    }
    if (destroyPopupOnHide) {
      return _react2['default'].createElement(
        _rcAnimate2['default'],
        { component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName() },
        visible ? _react2['default'].createElement(
          _rcAlign2['default'],
          { target: this.getTarget,
            key: 'popup',
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign },
          _react2['default'].createElement(
            _PopupInner2['default'],
            { className: className,
              visible: true,
              onMouseEnter: props.onMouseEnter,
              onMouseLeave: props.onMouseLeave,
              style: style },
            props.children
          )
        ) : null
      );
    }
    return _react2['default'].createElement(
      _rcAnimate2['default'],
      { component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible' },
      _react2['default'].createElement(
        _rcAlign2['default'],
        { target: this.getTarget,
          key: 'popup',
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: {
            visible: 'xVisible'
          },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign },
        _react2['default'].createElement(
          _PopupInner2['default'],
          { className: className,
            hiddenClassName: hiddenClassName,
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
            style: style },
          props.children
        )
      )
    );
  }
});

exports['default'] = Popup;
module.exports = exports['default'];
},{"./PopupInner":90,"rc-align":95,"rc-animate":108,"react":"react","react-dom":"react-dom"}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PopupInner = _react2['default'].createClass({
  displayName: 'PopupInner',

  propTypes: {
    hiddenClassName: _react.PropTypes.string,
    className: _react.PropTypes.string,
    onMouseEnter: _react.PropTypes.func,
    onMouseLeave: _react.PropTypes.func,
    children: _react.PropTypes.any
  },
  render: function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return _react2['default'].createElement(
      'div',
      { className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style },
      props.children
    );
  }
});

exports['default'] = PopupInner;
module.exports = exports['default'];
},{"react":"react"}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcUtil = require('rc-util');

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = require('./utils');

function noop() {}

function returnEmptyString() {
  return '';
}

var Trigger = _react2['default'].createClass({
  displayName: 'Trigger',

  propTypes: {
    action: _react.PropTypes.any,
    getPopupClassNameFromAlign: _react.PropTypes.any,
    onPopupVisibleChange: _react.PropTypes.func,
    afterPopupVisibleChange: _react.PropTypes.func,
    popup: _react.PropTypes.node.isRequired,
    popupStyle: _react.PropTypes.object,
    popupClassName: _react.PropTypes.string,
    popupPlacement: _react.PropTypes.string,
    builtinPlacements: _react.PropTypes.object,
    popupTransitionName: _react.PropTypes.string,
    popupAnimation: _react.PropTypes.any,
    mouseEnterDelay: _react.PropTypes.number,
    mouseLeaveDelay: _react.PropTypes.number,
    getPopupContainer: _react.PropTypes.func,
    destroyPopupOnHide: _react.PropTypes.bool,
    popupAlign: _react.PropTypes.object,
    popupVisible: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      onPopupVisibleChange: noop,
      afterPopupVisibleChange: noop,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      action: []
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = undefined;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return { popupVisible: popupVisible };
  },

  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('popupVisible' in nextProps) {
      this.setState({
        popupVisible: !!nextProps.popupVisible
      });
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    var _this = this;

    var props = this.props;
    var state = this.state;
    if (this.popupRendered) {
      var _ret = (function () {
        var self = _this;
        _reactDom2['default'].unstable_renderSubtreeIntoContainer(_this, _this.getPopupElement(), _this.getPopupContainer(), function renderPopup() {
          if (this.isMounted()) {
            self.popupDomNode = _reactDom2['default'].findDOMNode(this);
          } else {
            self.popupDomNode = null;
          }
          if (prevState.popupVisible !== state.popupVisible) {
            props.afterPopupVisibleChange(state.popupVisible);
          }
        });
        if (props.action.indexOf('click') !== -1) {
          if (state.popupVisible) {
            if (!_this.clickOutsideHandler) {
              _this.clickOutsideHandler = _rcUtil.Dom.addEventListener(document, 'mousedown', _this.onDocumentClick);
              _this.touchOutsideHandler = _rcUtil.Dom.addEventListener(document, 'touchstart', _this.onDocumentClick);
            }
            return {
              v: undefined
            };
          }
        }
        if (_this.clickOutsideHandler) {
          _this.clickOutsideHandler.remove();
          _this.touchOutsideHandler.remove();
          _this.clickOutsideHandler = null;
          _this.touchOutsideHandler = null;
        }
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    var popupContainer = this.popupContainer;
    if (popupContainer) {
      _reactDom2['default'].unmountComponentAtNode(popupContainer);
      if (this.props.getPopupContainer) {
        var mountNode = this.props.getPopupContainer();
        mountNode.removeChild(popupContainer);
      } else {
        document.body.removeChild(popupContainer);
      }
      this.popupContainer = null;
    }
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.touchOutsideHandler.remove();
      this.clickOutsideHandler = null;
      this.touchOutsideHandler = null;
    }
  },

  onMouseEnter: function onMouseEnter() {
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },

  onMouseLeave: function onMouseLeave() {
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },

  onFocus: function onFocus() {
    this.focusTime = Date.now();
    this.setPopupVisible(true);
  },

  onMouseDown: function onMouseDown() {
    this.preClickTime = Date.now();
  },

  onTouchStart: function onTouchStart() {
    this.preTouchTime = Date.now();
  },

  onBlur: function onBlur() {
    this.setPopupVisible(false);
  },

  onClick: function onClick(event) {
    // focus will trigger click
    if (this.focusTime) {
      var preTime = undefined;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    this.setPopupVisible(!this.state.popupVisible);
  },

  onDocumentClick: function onDocumentClick(event) {
    var target = event.target;
    var root = _reactDom2['default'].findDOMNode(this);
    var popupNode = this.getPopupDomNode();
    if (!_rcUtil.Dom.contains(root, target) && !_rcUtil.Dom.contains(popupNode, target)) {
      this.setPopupVisible(false);
    }
  },

  getPopupDomNode: function getPopupDomNode() {
    // for test
    return this.popupDomNode;
  },

  getPopupContainer: function getPopupContainer() {
    if (!this.popupContainer) {
      this.popupContainer = document.createElement('div');
      if (this.props.getPopupContainer) {
        var mountNode = this.props.getPopupContainer();
        mountNode.appendChild(this.popupContainer);
      } else {
        document.body.appendChild(this.popupContainer);
      }
    }
    return this.popupContainer;
  },

  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement;
    var builtinPlacements = props.builtinPlacements;
    var prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },

  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement;
    var popupAlign = props.popupAlign;
    var builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },

  getPopupElement: function getPopupElement() {
    var props = this.props;
    var state = this.state;
    var mouseProps = {};
    if (props.action.indexOf('hover') !== -1) {
      mouseProps.onMouseEnter = this.onMouseEnter;
      mouseProps.onMouseLeave = this.onMouseLeave;
    }
    return _react2['default'].createElement(
      _Popup2['default'],
      _extends({ prefixCls: props.prefixCls,
        destroyPopupOnHide: props.destroyPopupOnHide,
        visible: state.popupVisible,
        className: props.popupClassName,
        action: props.action,
        align: this.getPopupAlign(),
        animation: props.popupAnimation,
        getClassNameFromAlign: this.getPopupClassNameFromAlign
      }, mouseProps, {
        wrap: this,
        style: props.popupStyle,
        transitionName: props.popupTransitionName }),
      props.popup
    );
  },

  setPopupVisible: function setPopupVisible(popupVisible) {
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },

  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.delayTimer = null;
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },

  render: function render() {
    this.popupRendered = this.popupRendered || this.state.popupVisible;
    var props = this.props;
    var children = props.children;
    var child = _react2['default'].Children.only(children);
    var childProps = child.props || {};
    var newChildProps = {};
    var trigger = props.action;
    if (trigger.indexOf('click') !== -1) {
      newChildProps.onClick = (0, _rcUtil.createChainedFunction)(this.onClick, childProps.onClick);
      newChildProps.onMouseDown = (0, _rcUtil.createChainedFunction)(this.onMouseDown, childProps.onMouseDown);
      newChildProps.onTouchStart = (0, _rcUtil.createChainedFunction)(this.onTouchStart, childProps.onTouchStart);
    }
    if (trigger.indexOf('hover') !== -1) {
      newChildProps.onMouseEnter = (0, _rcUtil.createChainedFunction)(this.onMouseEnter, childProps.onMouseEnter);
      newChildProps.onMouseLeave = (0, _rcUtil.createChainedFunction)(this.onMouseLeave, childProps.onMouseLeave);
    }
    if (trigger.indexOf('focus') !== -1) {
      newChildProps.onFocus = (0, _rcUtil.createChainedFunction)(this.onFocus, childProps.onFocus);
      newChildProps.onBlur = (0, _rcUtil.createChainedFunction)(this.onBlur, childProps.onBlur);
    }

    return _react2['default'].cloneElement(child, newChildProps);
  }
});

exports['default'] = Trigger;
module.exports = exports['default'];
},{"./Popup":89,"./utils":93,"rc-util":122,"react":"react","react-dom":"react-dom"}],92:[function(require,module,exports){
'use strict';

module.exports = require('./Trigger');
},{"./Trigger":91}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0, _objectAssign2['default'])({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}
},{"object-assign":88}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domAlign = require('dom-align');

var _domAlign2 = _interopRequireDefault(_domAlign);

var _rcUtil = require('rc-util');

var _isWindow = require('./isWindow');

var _isWindow2 = _interopRequireDefault(_isWindow);

function buffer(fn, ms) {
  var timer = undefined;
  return function bufferFn() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, ms);
  };
}

var Align = _react2['default'].createClass({
  displayName: 'Align',

  propTypes: {
    childrenProps: _react.PropTypes.object,
    align: _react.PropTypes.object.isRequired,
    target: _react.PropTypes.func,
    onAlign: _react.PropTypes.func,
    monitorBufferTime: _react.PropTypes.number,
    monitorWindowResize: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    children: _react.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      target: function target() {
        return window;
      },
      onAlign: function onAlign() {},
      monitorBufferTime: 50,
      monitorWindowResize: false,
      disabled: false
    };
  },

  componentDidMount: function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    if (!props.disabled) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
      if (props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;
    var currentTarget = undefined;

    if (!props.disabled) {
      if (prevProps.disabled || prevProps.align !== props.align) {
        reAlign = true;
        currentTarget = props.target();
      } else {
        var lastTarget = prevProps.target();
        currentTarget = props.target();
        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
          reAlign = false;
        } else if (lastTarget !== currentTarget) {
          reAlign = true;
        }
      }
    }

    if (reAlign) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.stopMonitorWindowResize();
  },

  onWindowResize: function onWindowResize() {
    var props = this.props;
    if (!props.disabled) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
    }
  },

  startMonitorWindowResize: function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.resizeHandler = _rcUtil.Dom.addEventListener(window, 'resize', buffer(this.onWindowResize, this.props.monitorBufferTime));
    }
  },

  stopMonitorWindowResize: function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  },

  render: function render() {
    var _props = this.props;
    var childrenProps = _props.childrenProps;
    var children = _props.children;

    var child = _react2['default'].Children.only(children);
    if (childrenProps) {
      var newProps = {};
      for (var prop in childrenProps) {
        if (childrenProps.hasOwnProperty(prop)) {
          newProps[prop] = this.props[childrenProps[prop]];
        }
      }
      return _react2['default'].cloneElement(child, newProps);
    }
    return child;
  }
});

exports['default'] = Align;
module.exports = exports['default'];
},{"./isWindow":96,"dom-align":103,"rc-util":122,"react":"react","react-dom":"react-dom"}],95:[function(require,module,exports){
// export this package's api
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Align = require('./Align');

var _Align2 = _interopRequireDefault(_Align);

exports['default'] = _Align2['default'];
module.exports = exports['default'];
},{"./Align":94}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isWindow;

function isWindow(obj) {
  /* eslint no-eq-null: 0 */
  /* eslint eqeqeq: 0 */
  return obj != null && obj == obj.window;
}

module.exports = exports["default"];
},{}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = _utils2['default'].clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return _utils2['default'].mix(pos, size);
}

exports['default'] = adjustForViewport;
module.exports = exports['default'];
},{"./utils":104}],98:[function(require,module,exports){
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = undefined;
  var y = undefined;

  x = region.left;
  y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

exports['default'] = getAlignOffset;
module.exports = exports['default'];
},{}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getAlignOffset = require('./getAlignOffset');

var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var xy = undefined;
  var diff = undefined;
  var p1 = undefined;
  var p2 = undefined;

  xy = {
    left: elRegion.left,
    top: elRegion.top
  };

  p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
  p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);

  diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: xy.left - diff[0] + offset[0] - targetOffset[0],
    top: xy.top - diff[1] + offset[1] - targetOffset[1]
  };
}

exports['default'] = getElFuturePos;
module.exports = exports['default'];
},{"./getAlignOffset":98}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = element.ownerDocument;
  var body = doc.body;
  var parent = undefined;
  var positionStyle = _utils2['default'].css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = _utils2['default'].css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

exports['default'] = getOffsetParent;
module.exports = exports['default'];
},{"./utils":104}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function getRegion(node) {
  var offset = undefined;
  var w = undefined;
  var h = undefined;
  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
    offset = _utils2['default'].offset(node);
    w = _utils2['default'].outerWidth(node);
    h = _utils2['default'].outerHeight(node);
  } else {
    var win = _utils2['default'].getWindow(node);
    offset = {
      left: _utils2['default'].getWindowScrollLeft(win),
      top: _utils2['default'].getWindowScrollTop(win)
    };
    w = _utils2['default'].viewportWidth(win);
    h = _utils2['default'].viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

exports['default'] = getRegion;
module.exports = exports['default'];
},{"./utils":104}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _getOffsetParent = require('./getOffsetParent');

var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = (0, _getOffsetParent2['default'])(element);
  var scrollX = undefined;
  var scrollY = undefined;
  var winSize = undefined;
  var doc = element.ownerDocument;
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
      var pos = _utils2['default'].offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = (0, _getOffsetParent2['default'])(el);
  }

  // Clip by window's viewport.
  scrollX = _utils2['default'].getWindowScrollLeft(win);
  scrollY = _utils2['default'].getWindowScrollTop(win);
  visibleRect.left = Math.max(visibleRect.left, scrollX);
  visibleRect.top = Math.max(visibleRect.top, scrollY);
  winSize = {
    width: _utils2['default'].viewportWidth(win),
    height: _utils2['default'].viewportHeight(win)
  };
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

exports['default'] = getVisibleRectForElement;
module.exports = exports['default'];
},{"./getOffsetParent":100,"./utils":104}],103:[function(require,module,exports){
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _getOffsetParent = require('./getOffsetParent');

var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

var _getVisibleRectForElement = require('./getVisibleRectForElement');

var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

var _adjustForViewport = require('./adjustForViewport');

var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

var _getRegion = require('./getRegion');

var _getRegion2 = _interopRequireDefault(_getRegion);

var _getElFuturePos = require('./getElFuturePos');

var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function flip(points, reg, map) {
  var ret = [];
  _utils2['default'].each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = undefined;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

function domAlign(el, refNode, align) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var target = align.target || refNode;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};

  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = (0, _getRegion2['default'])(source);
  // 参照节点所占的区域, left/top/width/height
  var refNodeRegion = (0, _getRegion2['default'])(target);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, refNodeRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        fail = 1;
        // 对齐位置反下
        points = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        offset = flipOffset(offset, 0);
        targetOffset = flipOffset(targetOffset, 0);
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        fail = 1;
        // 对齐位置反下
        points = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        offset = flipOffset(offset, 1);
        targetOffset = flipOffset(targetOffset, 1);
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
      _utils2['default'].mix(newElRegion, elFuturePos);
    }

    // 检查反下后的位置是否可以放下了
    // 如果仍然放不下只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    _utils2['default'].css(source, 'width', source.width() + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    _utils2['default'].css(source, 'height', source.height() + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  _utils2['default'].offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

domAlign.__getOffsetParent = _getOffsetParent2['default'];

domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];

exports['default'] = domAlign;

/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/
module.exports = exports['default'];
},{"./adjustForViewport":97,"./getElFuturePos":99,"./getOffsetParent":100,"./getRegion":101,"./getVisibleRectForElement":102,"./utils":104}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = undefined;

function css(el, name, v) {
  var value = v;
  if (typeof name === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return { left: x, top: y };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = elem.ownerDocument;
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  var old = getOffset(elem);
  var ret = {};
  var key = undefined;
  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      if (dir === key) {
        ret[dir] = preset + offset[key] - old[key];
      } else {
        ret[dir] = preset + old[key] - offset[key];
      }
    }
  }
  css(elem, ret);
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var val = undefined;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = undefined;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

exports['default'] = utils;
module.exports = exports['default'];
},{}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChildrenUtils = require('./ChildrenUtils');

var _AnimateChild = require('./AnimateChild');

var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (_react2['default'].isValidElement(children)) {
    if (!children.key) {
      return _react2['default'].cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = _react2['default'].createClass({
  displayName: 'Animate',

  propTypes: {
    component: _react2['default'].PropTypes.any,
    animation: _react2['default'].PropTypes.object,
    transitionName: _react2['default'].PropTypes.string,
    transitionEnter: _react2['default'].PropTypes.bool,
    transitionAppear: _react2['default'].PropTypes.bool,
    exclusive: _react2['default'].PropTypes.bool,
    transitionLeave: _react2['default'].PropTypes.bool,
    onEnd: _react2['default'].PropTypes.func,
    onEnter: _react2['default'].PropTypes.func,
    onLeave: _react2['default'].PropTypes.func,
    onAppear: _react2['default'].PropTypes.func,
    showProp: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      animation: {},
      component: 'span',
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: false,
      onEnd: noop,
      onEnter: noop,
      onLeave: noop,
      onAppear: noop
    };
  },

  getInitialState: function getInitialState() {
    this.currentlyAnimatingKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
    return {
      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var showProp = this.props.showProp;
    var children = this.state.children;
    if (showProp) {
      children = children.filter(function (child) {
        return !!child.props[showProp];
      });
    }
    children.forEach(function (child) {
      _this.performAppear(child.key);
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
    var props = this.props;
    var showProp = props.showProp;
    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
    // last props children if exclusive
    // exclusive needs immediate response
    var currentChildren = this.state.children;
    // in case destroy in showProp mode
    var newChildren = [];
    if (showProp) {
      currentChildren.forEach(function (currentChild) {
        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
        var newChild = undefined;
        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
        } else {
          newChild = nextChild;
        }
        if (newChild) {
          newChildren.push(newChild);
        }
      });
      nextChildren.forEach(function (nextChild) {
        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
          newChildren.push(nextChild);
        }
      });
    } else {
      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
    }

    // need render to avoid update
    this.setState({
      children: newChildren
    });

    nextChildren.forEach(function (child) {
      var key = child.key;
      if (currentlyAnimatingKeys[key]) {
        return;
      }
      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
      if (showProp) {
        var showInNext = child.props[showProp];
        if (hasPrev) {
          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
          if (!showInNow && showInNext) {
            _this2.keysToEnter.push(key);
          }
        } else if (showInNext) {
          _this2.keysToEnter.push(key);
        }
      } else if (!hasPrev) {
        _this2.keysToEnter.push(key);
      }
    });

    currentChildren.forEach(function (child) {
      var key = child.key;
      if (currentlyAnimatingKeys[key]) {
        return;
      }
      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
      if (showProp) {
        var showInNow = child.props[showProp];
        if (hasNext) {
          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
          if (!showInNext && showInNow) {
            _this2.keysToLeave.push(key);
          }
        } else if (showInNow) {
          _this2.keysToLeave.push(key);
        }
      } else if (!hasNext) {
        _this2.keysToLeave.push(key);
      }
    });
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    var _this3 = this;

    // exclusive needs immediate response
    if (this.props.exclusive && this.props !== prevProps) {
      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
        _this3.stop(key);
      });
    }
    if (this.isMounted()) {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  },

  performEnter: function performEnter(key) {
    // may already remove by exclusive
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
    }
  },

  performAppear: function performAppear(key) {
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
    }
  },

  handleDoneAdding: function handleDoneAdding(key, type) {
    var props = this.props;
    delete this.currentlyAnimatingKeys[key];
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    if (!this.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      this.performLeave(key);
    } else {
      if (type === 'appear') {
        if (_util2['default'].allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (_util2['default'].allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  },

  performLeave: function performLeave(key) {
    // may already remove by exclusive
    if (this.refs[key]) {
      this.currentlyAnimatingKeys[key] = true;
      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
    }
  },

  handleDoneLeaving: function handleDoneLeaving(key) {
    var props = this.props;
    delete this.currentlyAnimatingKeys[key];
    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
    // in case state change is too fast
    if (this.isValidChildByKey(currentChildren, key)) {
      this.performEnter(key);
    } else {
      if (_util2['default'].allowLeaveCallback(props)) {
        props.onLeave(key);
        props.onEnd(key, false);
      }
      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
        this.setState({
          children: currentChildren
        });
      }
    }
  },

  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
    var showProp = this.props.showProp;
    if (showProp) {
      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
    }
    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
  },

  stop: function stop(key) {
    delete this.currentlyAnimatingKeys[key];
    var component = this.refs[key];
    if (component) {
      component.stop();
    }
  },

  render: function render() {
    var props = this.props;
    var stateChildren = this.state.children;
    var children = null;
    if (stateChildren) {
      children = stateChildren.map(function (child) {
        if (!child.key) {
          throw new Error('must set key for <rc-animate> children');
        }
        return _react2['default'].createElement(
          _AnimateChild2['default'],
          {
            key: child.key,
            ref: child.key,
            animation: props.animation,
            transitionName: props.transitionName,
            transitionEnter: props.transitionEnter,
            transitionAppear: props.transitionAppear,
            transitionLeave: props.transitionLeave },
          child
        );
      });
    }
    var Component = props.component;
    if (Component) {
      return _react2['default'].createElement(
        Component,
        this.props,
        children
      );
    }
    return children[0] || null;
  }
});

exports['default'] = Animate;
module.exports = exports['default'];
},{"./AnimateChild":106,"./ChildrenUtils":107,"./util":109,"react":"react"}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cssAnimation = require('css-animation');

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = _react2['default'].createClass({
  displayName: 'AnimateChild',

  propTypes: {
    children: _react2['default'].PropTypes.any
  },

  componentWillUnmount: function componentWillUnmount() {
    this.stop();
  },

  componentWillEnter: function componentWillEnter(done) {
    if (_util2['default'].isEnterSupported(this.props)) {
      this.transition('enter', done);
    } else {
      done();
    }
  },

  componentWillAppear: function componentWillAppear(done) {
    if (_util2['default'].isAppearSupported(this.props)) {
      this.transition('appear', done);
    } else {
      done();
    }
  },

  componentWillLeave: function componentWillLeave(done) {
    if (_util2['default'].isLeaveSupported(this.props)) {
      this.transition('leave', done);
    } else {
      done();
    }
  },

  transition: function transition(animationType, finishCallback) {
    var _this = this;

    var node = _reactDom2['default'].findDOMNode(this);
    var props = this.props;
    var transitionName = props.transitionName;
    this.stop();
    var end = function end() {
      _this.stopper = null;
      finishCallback();
    };
    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
    } else {
      this.stopper = props.animation[animationType](node, end);
    }
  },

  stop: function stop() {
    var stopper = this.stopper;
    if (stopper) {
      this.stopper = null;
      stopper.stop();
    }
  },

  render: function render() {
    return this.props.children;
  }
});

exports['default'] = AnimateChild;
module.exports = exports['default'];
},{"./util":109,"css-animation":112,"react":"react","react-dom":"react-dom"}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.toArrayChildren = toArrayChildren;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
exports.isSameChildren = isSameChildren;
exports.mergeChildren = mergeChildren;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function toArrayChildren(children) {
  var ret = [];
  _react2['default'].Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child.key !== child2.key) {
        same = false;
      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
        same = false;
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}
},{"react":"react"}],108:[function(require,module,exports){
// export this package's api
'use strict';

module.exports = require('./Animate');
},{"./Animate":105}],109:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },

  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
exports["default"] = util;
module.exports = exports["default"];
},{}],110:[function(require,module,exports){
'use strict';

var SPACE = ' ';
var RE_CLASS = /[\n\t\r]/g;

function norm(elemClass) {
  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
}

module.exports = {
  addClass: function addClass(elem, className) {
    elem.className += ' ' + className;
  },

  removeClass: function removeClass(elem, n) {
    var elemClass = elem.className.trim();
    var className = norm(elemClass);
    var needle = n.trim();
    needle = SPACE + needle + SPACE;
    // 一个 cls 有可能多次出现：'link link2 link link3 link'
    while (className.indexOf(needle) >= 0) {
      className = className.replace(needle, SPACE);
    }
    elem.className = className.trim();
  }
};
},{}],111:[function(require,module,exports){
'use strict';

var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = TransitionEvents;
},{}],112:[function(require,module,exports){
'use strict';

var Event = require('./Event');
var Css = require('./Css');
var isCssAnimationSupported = Event.endEvents.length !== 0;

function getDuration(node, name) {
  var style = window.getComputedStyle(node);
  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration, animationDuration);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, callback) {
  var className = transitionName;
  var activeClassName = className + '-active';

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Css.removeClass(node, className);
    Css.removeClass(node, activeClassName);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  Css.addClass(node, className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    Css.addClass(node, activeClassName);
    fixBrowserByTimeout(node);
  }, 0);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  ['Webkit', 'Moz', 'O',
  // ms is special .... !
  'ms'].forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.addClass = Css.addClass;
cssAnimation.removeClass = Css.removeClass;
cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

module.exports = cssAnimation;
},{"./Css":110,"./Event":111}],113:[function(require,module,exports){
'use strict';

var React = require('react');

function mirror(o) {
  return o;
}

module.exports = function mapSelf(children) {
  // return ReactFragment
  return React.Children.map(children, mirror);
};
},{"react":"react"}],114:[function(require,module,exports){
'use strict';

var React = require('react');

module.exports = function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function each(c) {
    ret.push(c);
  });
  return ret;
};
},{"react":"react"}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListenerWrap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _addDomEventListener = require('add-dom-event-listener');

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}

module.exports = exports['default'];
},{"add-dom-event-listener":127,"react-dom":"react-dom"}],116:[function(require,module,exports){
"use strict";

module.exports = function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
};
},{}],117:[function(require,module,exports){
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

'use strict';

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

module.exports = KeyCode;
},{}],118:[function(require,module,exports){
'use strict';

var shallowEqual = require('./shallowEqual');

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this Mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   const ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;
},{"./shallowEqual":124}],119:[function(require,module,exports){
'use strict';

var deprecate = require('util-deprecate');
var classNames = require('classnames');

module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');
},{"classnames":79,"util-deprecate":133}],120:[function(require,module,exports){
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
"use strict";

function createChainedFunction() {
  var args = arguments;
  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

module.exports = createChainedFunction;
},{}],121:[function(require,module,exports){
'use strict';

var seed = 0;
module.exports = function guid() {
  return Date.now() + '_' + seed++;
};
},{}],122:[function(require,module,exports){
'use strict';

module.exports = {
  guid: require('./guid'),
  classSet: require('./classSet'),
  joinClasses: require('./joinClasses'),
  KeyCode: require('./KeyCode'),
  PureRenderMixin: require('./PureRenderMixin'),
  shallowEqual: require('./shallowEqual'),
  createChainedFunction: require('./createChainedFunction'),
  Dom: {
    addEventListener: require('./Dom/addEventListener'),
    contains: require('./Dom/contains')
  },
  Children: {
    toArray: require('./Children/toArray'),
    mapSelf: require('./Children/mapSelf')
  }
};
},{"./Children/mapSelf":113,"./Children/toArray":114,"./Dom/addEventListener":115,"./Dom/contains":116,"./KeyCode":117,"./PureRenderMixin":118,"./classSet":119,"./createChainedFunction":120,"./guid":121,"./joinClasses":123,"./shallowEqual":124}],123:[function(require,module,exports){
'use strict';

var deprecate = require('util-deprecate');
var classNames = require('classnames');

module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');
},{"classnames":79,"util-deprecate":133}],124:[function(require,module,exports){
'use strict';

var shallowEqual = require('shallowequal');

module.exports = shallowEqual;
},{"shallowequal":128}],125:[function(require,module,exports){
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];
},{}],126:[function(require,module,exports){
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = require('./EventBaseObject');

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];
},{"./EventBaseObject":125,"object-assign":88}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = require('./EventObject');

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];
},{"./EventObject":126}],128:[function(require,module,exports){
'use strict';

var fetchKeys = require('lodash.keys');

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = fetchKeys(objA);
    var keysB = fetchKeys(objB);

    var len = keysA.length;
    if (len !== keysB.length) {
        return false;
    }

    compareContext = compareContext || null;

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < len; i++) {
        var key = keysA[i];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];

        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (_ret === false || _ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};
},{"lodash.keys":129}],129:[function(require,module,exports){
/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative'),
    isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":130,"lodash.isarguments":131,"lodash.isarray":132}],130:[function(require,module,exports){
/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;

},{}],131:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{}],132:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;

},{}],133:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],134:[function(require,module,exports){
'use strict';
var React = require('react');

module.exports = React.createClass({
	displayName: 'CheckBoxList',

	propTypes: {
		defaultData: React.PropTypes.array,
		onChange: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			data: this.props.defaultData || []
		};
	},

	handleItemChange: function(e) {
		var selectedValues = [],
			newData = [];

		this.state.data.forEach(function(item) {
			if(item.value === e.target.value) {
				item.checked = e.target.checked;
			}
			if(item.checked) {
				selectedValues.push(item.value);
			}
			newData.push(item);
		});

		this.setState({data: newData});

		if(this.props.onChange) {
			this.props.onChange(selectedValues);
		}
	},

	// uncheck all items in the list
	reset: function() {
		var newData = [];
		this.state.data.forEach(function(item) {
			item.checked = false;
			newData.push(item);
		});

		this.setState({data: newData});
	},

	render: function() {
		var options;

		options = this.state.data.map(function(item, index) {
			return (
				React.createElement("div", {key: 'chk-' + index, className: "checkbox"}, 
					React.createElement("label", null, 
						React.createElement("input", {
							type: "checkbox", 
							value: item.value, 
							onChange: this.handleItemChange, 
							checked: item.checked ? true : false}), " ", item.label
					)
				)
			);
		}.bind(this));

		return (
			React.createElement("div", null, 
				options
			)
		);
	}
});

},{"react":"react"}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactMotion = require('react-motion');

var _reactHeight = require('react-height');

var _reactHeight2 = _interopRequireDefault(_reactHeight);

var Collapse = _react2['default'].createClass({
  displayName: 'Collapse',

  propTypes: {
    isOpened: _react2['default'].PropTypes.bool.isRequired,
    children: _react2['default'].PropTypes.node.isRequired,
    fixedHeight: _react2['default'].PropTypes.number,
    style: _react2['default'].PropTypes.object,
    springConfig: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number)
  },

  getDefaultProps: function getDefaultProps() {
    return { fixedHeight: -1, style: {} };
  },

  getInitialState: function getInitialState() {
    return { height: -1 };
  },

  componentWillMount: function componentWillMount() {
    this.height = '0.0';
  },

  shouldComponentUpdate: _reactAddonsPureRenderMixin.shouldComponentUpdate,

  onHeightReady: function onHeightReady(height) {
    this.setState({ height: height });
  },

  renderFixed: function renderFixed() {
    var _props = this.props;
    var isOpened = _props.isOpened;
    var style = _props.style;
    var children = _props.children;
    var fixedHeight = _props.fixedHeight;
    var springConfig = _props.springConfig;

    var props = _objectWithoutProperties(_props, ['isOpened', 'style', 'children', 'fixedHeight', 'springConfig']);

    return _react2['default'].createElement(
      _reactMotion.Motion,
      {
        defaultStyle: { height: 0 },
        style: { height: (0, _reactMotion.spring)(isOpened ? fixedHeight : 0, springConfig) } },
      function (_ref) {
        var height = _ref.height;
        return !isOpened && parseFloat(height).toFixed(1) === '0.0' ? null : _react2['default'].createElement(
          'div',
          _extends({ style: _extends({}, style, { height: height, overflow: 'hidden' }) }, props),
          children
        );
      }
    );
  },

  render: function render() {
    var _this = this;

    var _props2 = this.props;
    var isOpened = _props2.isOpened;
    var style = _props2.style;
    var children = _props2.children;
    var fixedHeight = _props2.fixedHeight;
    var springConfig = _props2.springConfig;

    var props = _objectWithoutProperties(_props2, ['isOpened', 'style', 'children', 'fixedHeight', 'springConfig']);

    if (fixedHeight > -1) {
      return this.renderFixed();
    }

    var height = this.state.height;

    var stringHeight = parseFloat(height).toFixed(1);

    // Cache Content so it is not re-rendered on each animation step
    var content = _react2['default'].createElement(
      _reactHeight2['default'],
      { onHeightReady: this.onHeightReady },
      children
    );

    return _react2['default'].createElement(
      _reactMotion.Motion,
      {
        defaultStyle: { height: 0 },
        style: { height: (0, _reactMotion.spring)(isOpened ? height : 0, springConfig) } },
      function (st) {
        _this.height = Math.max(0, parseFloat(st.height)).toFixed(1);

        // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
        // See https://github.com/chenglou/react-motion/issues/235
        if (!isOpened && _this.height === '0.0') {
          return null;
        }

        var newStyle = isOpened && _this.height === stringHeight ? { height: 'auto' } : {
          height: st.height, overflow: 'hidden'
        };

        return _react2['default'].createElement(
          'div',
          _extends({ style: _extends({}, style, newStyle) }, props),
          content
        );
      }
    );
  }
});

exports['default'] = Collapse;
module.exports = exports['default'];

},{"react":"react","react-addons-pure-render-mixin":137,"react-height":139,"react-motion":149}],136:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

exports['default'] = _Collapse2['default'];
module.exports = exports['default'];

},{"./Collapse":135}],137:[function(require,module,exports){
module.exports = require('react/lib/ReactComponentWithPureRenderMixin');
},{"react/lib/ReactComponentWithPureRenderMixin":167}],138:[function(require,module,exports){
/* eslint "react/no-did-mount-set-state":0, "react/no-did-update-set-state":0 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var ReactHeight = _react2['default'].createClass({
  displayName: 'ReactHeight',

  propTypes: {
    children: _react2['default'].PropTypes.node.isRequired,
    onHeightReady: _react2['default'].PropTypes.func.isRequired,
    hidden: _react2['default'].PropTypes.bool,
    dirty: _react2['default'].PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return { hidden: false, dirty: true };
  },

  getInitialState: function getInitialState() {
    return {
      height: 0, dirty: this.props.dirty
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    if (!this.refs.wrapper) {
      return;
    }
    var height = this.refs.wrapper.clientHeight;
    var dirty = false;

    this.setState({ height: height, dirty: dirty }, function () {
      return _this.props.onHeightReady(_this.state.height);
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var children = _ref.children;
    var dirty = _ref.dirty;

    if (children !== this.props.children || dirty) {
      this.setState({ dirty: true });
    }
  },

  shouldComponentUpdate: _reactAddonsPureRenderMixin.shouldComponentUpdate,

  componentDidUpdate: function componentDidUpdate() {
    var _this2 = this;

    if (!this.refs.wrapper) {
      return;
    }
    var height = this.refs.wrapper.clientHeight;
    var dirty = false;

    if (height !== this.state.height) {
      this.setState({ height: height, dirty: dirty }, function () {
        return _this2.props.onHeightReady(_this2.state.height);
      });
    } else {
      this.setState({ dirty: dirty });
    }
  },

  render: function render() {
    var _props = this.props;
    var onHeightReady = _props.onHeightReady;
    var hidden = _props.hidden;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['onHeightReady', 'hidden', 'children']);

    var dirty = this.state.dirty;

    if (hidden && !dirty) {
      return null;
    }

    if (hidden) {
      return _react2['default'].createElement(
        'div',
        { style: { height: 0, overflow: 'hidden' } },
        _react2['default'].createElement(
          'div',
          _extends({ ref: 'wrapper' }, props),
          children
        )
      );
    }

    return _react2['default'].createElement(
      'div',
      _extends({ ref: 'wrapper' }, props),
      children
    );
  }
});

exports['default'] = ReactHeight;
module.exports = exports['default'];

},{"react":"react","react-addons-pure-render-mixin":137}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ReactHeight = require('./ReactHeight');

var _ReactHeight2 = _interopRequireDefault(_ReactHeight);

exports['default'] = _ReactHeight2['default'];
module.exports = exports['default'];

},{"./ReactHeight":138}],140:[function(require,module,exports){
var React = require('react');
var RegExpPropType = require('./regExpPropType');


var Highlighter = React.createClass({displayName: "Highlighter",
  count: 0,

  propTypes: {
    search: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool,
      RegExpPropType
    ]).isRequired,
    caseSensitive: React.PropTypes.bool,
    matchElement: React.PropTypes.string,
    matchClass: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      caseSensitive: false,
      matchElement: 'strong',
      matchClass: 'highlight'
    }
  },

  render: function() {
    return React.DOM.span(React.__spread({}, this.props), this.renderElement(this.props.children));
  },

  /**
   * A wrapper to the highlight method to determine when the highlighting
   * process should occur.
   *
   * @param  {string} subject
   *   The body of text that will be searched for highlighted words.
   *
   * @return {Array}
   *   An array of ReactElements
   */
  renderElement: function(subject) {
    if (this.isScalar() && this.hasSearch()) {
      var search = this.getSearch();
      return this.highlightChildren(subject, search);
    }

    return this.props.children;
  },

  /**
   * Determine if props are valid types for processing.
   *
   * @return {Boolean}
   */
  isScalar: function() {
    return (/string|number|boolean/).test(typeof this.props.children);
  },

  /**
   * Determine if required search prop is defined and valid.
   *
   * @return {Boolean}
   */
  hasSearch: function() {
    return (typeof this.props.search !== 'undefined') && this.props.search;
  },

  /**
   * Get the search prop, but always in the form of a regular expression. Use
   * this as a proxy to this.props.search for consistency.
   *
   * @return {RegExp}
   */
  getSearch: function() {
    if (this.props.search instanceof RegExp) {
      return this.props.search;
    }

    var flags = '';
    if (!this.props.caseSensitive) {
      flags +='i';
    }

    return new RegExp(this.props.search, flags);
  },

  /**
   * Get the indexes of the first and last characters of the matched string.
   *
   * @param  {string} subject
   *   The string to search against.
   *
   * @param  {RegExp} search
   *   The regex search query.
   *
   * @return {Object}
   *   An object consisting of "first" and "last" properties representing the
   *   indexes of the first and last characters of a matching string.
   */
  getMatchBoundaries: function(subject, search) {
    var matches = search.exec(subject);
    if (matches) {
      return {
        first: matches.index,
        last: matches.index + matches[0].length
      };
    }
  },

  /**
   * Determines which strings of text should be highlighted or not.
   *
   * @param  {string} subject
   *   The body of text that will be searched for highlighted words.
   *
   * @return {Array}
   *   An array of ReactElements
   */
  highlightChildren: function(subject, search) {
    var children = [];

    if (!search.test(subject)) {
      children.push(this.renderPlain(subject));
      return children;
    }

    var boundaries = this.getMatchBoundaries(subject, search);

    // Capture the string that leads up to a match...
    var nonMatch = subject.slice(0, boundaries.first);
    if (nonMatch) {
      children.push(this.renderPlain(nonMatch));
    }

    // Now, capture the matching string...
    var match = subject.slice(boundaries.first, boundaries.last);
    if (match) {
      children.push(this.renderHighlight(match));
    }

    // And if there's anything left over, recursively run this method again.
    var remaining = subject.slice(boundaries.last);
    if (remaining) {
      children = Array.prototype.concat(children, this.highlightChildren(remaining, search));
    }

    return children;
  },

  /**
   * Responsible for rending a non-highlighted element.
   *
   * @param  {string} string
   *   A string value to wrap an element around.
   *
   * @return {ReactElement}
   */
  renderPlain: function(string) {
    this.count++;
    return React.DOM.span({'key': this.count}, string);
  },

  /**
   * Responsible for rending a highlighted element.
   *
   * @param  {string} string
   *   A string value to wrap an element around.
   *
   * @return {ReactElement}
   */
  renderHighlight: function(string) {
    this.count++;
    return React.DOM[this.props.matchElement]({'key': this.count, 'className': this.props.matchClass}, string);
  }
});

module.exports = Highlighter;

},{"./regExpPropType":141,"react":"react"}],141:[function(require,module,exports){
var regExpPropType = function (props, propName, componentName, location) {
  if (!(props[propName] instanceof RegExp)) {
    var propType = typeof props[propName];

    return new Error(
      ("Invalid " + location + " `" + propName + "` of type `" + propType + "` ") +
        ("supplied to `" + componentName + "`, expected `RegExp`.")
    );
  }
};

module.exports = regExpPropType;

},{}],142:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = configAnimation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _performanceNow = require('performance-now');

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function configAnimation() {
  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _config$timeStep = config.timeStep;
  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
  var _config$timeScale = config.timeScale;
  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
  var _config$maxSteps = config.maxSteps;
  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
  var _config$raf = config.raf;
  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
  var _config$now = config.now;
  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;

  var animRunning = [];
  var running = false;
  var prevTime = 0;
  var accumulatedTime = 0;

  function loop() {
    var currentTime = now();
    var frameTime = currentTime - prevTime; // delta

    prevTime = currentTime;
    accumulatedTime += frameTime * timeScale;

    if (accumulatedTime > timeStep * maxSteps) {
      accumulatedTime = 0;
    }

    var frameNumber = Math.ceil(accumulatedTime / timeStep);
    for (var i = 0; i < animRunning.length; i++) {
      var _animRunning$i = animRunning[i];
      var active = _animRunning$i.active;
      var animationStep = _animRunning$i.animationStep;
      var prevPrevState = _animRunning$i.prevState;
      var prevNextState = animRunning[i].nextState;

      if (!active) {
        continue;
      }

      // Seems like because the TS sets destVals as enterVals for the first
      // tick, we might render that value twice. We render it once, currValue is
      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
      // so accumulatedTime (which would be about -16ms from the previous tick)
      // is negative (-16ms + any number less than 16ms < 0). So we just render
      // part ways towards the nextState, but that's enterVal still. We render
      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
      // So we render the same value a second time.
      // The solution below is to recalculate the destination state even when
      // you're moving partially towards it.
      if (accumulatedTime <= 0) {
        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
      } else {
        for (var j = 0; j < frameNumber; j++) {
          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
          var _ref = [prevNextState, animRunning[i].nextState];
          animRunning[i].prevState = _ref[0];
          prevNextState = _ref[1];
        }
      }
    }

    accumulatedTime = accumulatedTime - frameNumber * timeStep;

    // Render and filter in one iteration.
    var alpha = 1 + accumulatedTime / timeStep;
    for (var i = 0; i < animRunning.length; i++) {
      var _animRunning$i2 = animRunning[i];
      var animationRender = _animRunning$i2.animationRender;
      var nextState = _animRunning$i2.nextState;
      var prevState = _animRunning$i2.prevState;

      // Might mutate animRunning........
      animationRender(alpha, nextState, prevState);
    }

    animRunning = animRunning.filter(function (_ref2) {
      var active = _ref2.active;
      return active;
    });

    if (animRunning.length === 0) {
      running = false;
    } else {
      raf(loop);
    }
  }

  function start() {
    if (!running) {
      running = true;
      prevTime = now();
      accumulatedTime = 0;
      raf(loop);
    }
  }

  return function startAnimation(state, animationStep, animationRender) {
    for (var i = 0; i < animRunning.length; i++) {
      var val = animRunning[i];
      if (val.animationStep === animationStep) {
        val.active = true;
        val.prevState = state;
        start();
        return val.stop;
      }
    }

    var newAnim = {
      animationStep: animationStep,
      animationRender: animationRender,
      prevState: state,
      nextState: state,
      active: true
    };

    newAnim.stop = function () {
      return newAnim.active = false;
    };
    animRunning.push(newAnim);

    start();

    return newAnim.stop;
  };
}

module.exports = exports['default'];
},{"performance-now":156,"raf":157}],143:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = components;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _noVelocity = require('./noVelocity');

var _noVelocity2 = _interopRequireDefault(_noVelocity);

var _hasReachedStyle = require('./hasReachedStyle');

var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);

var _mergeDiff = require('./mergeDiff');

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _animationLoop = require('./animationLoop');

var _animationLoop2 = _interopRequireDefault(_animationLoop);

var _zero = require('./zero');

var _zero2 = _interopRequireDefault(_zero);

var _updateTree = require('./updateTree');

var _deprecatedSprings2 = require('./deprecatedSprings');

var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);

var _stripStyle = require('./stripStyle');

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var startAnimation = _animationLoop2['default']();

function mapObject(f, obj) {
  var ret = {};
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = f(obj[key], key);
  }
  return ret;
}

function everyObj(f, obj) {
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
}

function components(React) {
  var PropTypes = React.PropTypes;

  var Motion = React.createClass({
    displayName: 'Motion',

    propTypes: {
      // TOOD: warn against putting a config in here
      defaultValue: function defaultValue(prop, propName) {
        if (prop[propName]) {
          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
        }
      },
      endValue: function endValue(prop, propName) {
        if (prop[propName]) {
          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
        }
      },
      defaultStyle: PropTypes.object,
      style: PropTypes.object.isRequired,
      children: PropTypes.func.isRequired
    },

    getInitialState: function getInitialState() {
      var _props = this.props;
      var defaultStyle = _props.defaultStyle;
      var style = _props.style;

      var currentStyle = defaultStyle || style;
      return {
        currentStyle: currentStyle,
        currentVelocity: mapObject(_zero2['default'], currentStyle)
      };
    },

    componentDidMount: function componentDidMount() {
      this.startAnimating();
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.startAnimating();
    },

    animationStep: function animationStep(timestep, state) {
      var currentStyle = state.currentStyle;
      var currentVelocity = state.currentVelocity;
      var style = this.props.style;

      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);

      // TOOD: this isn't necessary anymore. It was used only against endValue func
      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
        // check explanation in `Motion.animationRender`
        this.stopAnimation(); // Nasty side effects....
      }

      return {
        currentStyle: newCurrentStyle,
        currentVelocity: newCurrentVelocity
      };
    },

    stopAnimation: null,

    // used in animationRender
    hasUnmounted: false,

    componentWillUnmount: function componentWillUnmount() {
      this.stopAnimation();
      this.hasUnmounted = true;
    },

    startAnimating: function startAnimating() {
      // Is smart enough to not start it twice
      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
    },

    animationRender: function animationRender(alpha, nextState, prevState) {
      // `this.hasUnmounted` might be true in the following condition:
      // user does some checks in `style` and calls an owner handler
      // owner sets state in the callback, triggering a re-render
      // unmounts Motion
      if (!this.hasUnmounted) {
        this.setState({
          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
          currentVelocity: nextState.currentVelocity
        });
      }
    },

    render: function render() {
      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
      var renderedChildren = this.props.children(strippedStyle);
      return renderedChildren && React.Children.only(renderedChildren);
    }
  });

  var StaggeredMotion = React.createClass({
    displayName: 'StaggeredMotion',

    propTypes: {
      defaultStyle: function defaultStyle(prop, propName) {
        if (prop[propName]) {
          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
        }
      },
      style: function style(prop, propName) {
        if (prop[propName]) {
          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
        }
      },
      // TOOD: warn against putting configs in here
      defaultStyles: PropTypes.arrayOf(PropTypes.object),
      styles: PropTypes.func.isRequired,
      children: PropTypes.func.isRequired
    },

    getInitialState: function getInitialState() {
      var _props2 = this.props;
      var styles = _props2.styles;
      var defaultStyles = _props2.defaultStyles;

      var currentStyles = defaultStyles ? defaultStyles : styles();
      return {
        currentStyles: currentStyles,
        currentVelocities: currentStyles.map(function (s) {
          return mapObject(_zero2['default'], s);
        })
      };
    },

    componentDidMount: function componentDidMount() {
      this.startAnimating();
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.startAnimating();
    },

    animationStep: function animationStep(timestep, state) {
      var currentStyles = state.currentStyles;
      var currentVelocities = state.currentVelocities;

      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));

      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
      });
      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
      });

      // TODO: is this right?
      if (currentVelocities.every(function (v, k) {
        return _noVelocity2['default'](v, currentStyles[k]);
      }) && newCurrentVelocities.every(function (v, k) {
        return _noVelocity2['default'](v, newCurrentStyles[k]);
      })) {
        this.stopAnimation();
      }

      return {
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities
      };
    },

    stopAnimation: null,

    // used in animationRender
    hasUnmounted: false,

    componentWillUnmount: function componentWillUnmount() {
      this.stopAnimation();
      this.hasUnmounted = true;
    },

    startAnimating: function startAnimating() {
      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
    },

    animationRender: function animationRender(alpha, nextState, prevState) {
      // See comment in Motion.
      if (!this.hasUnmounted) {
        var currentStyles = nextState.currentStyles.map(function (style, i) {
          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
        });
        this.setState({
          currentStyles: currentStyles,
          currentVelocities: nextState.currentVelocities
        });
      }
    },

    render: function render() {
      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
      var renderedChildren = this.props.children(strippedStyle);
      return renderedChildren && React.Children.only(renderedChildren);
    }
  });

  var TransitionMotion = React.createClass({
    displayName: 'TransitionMotion',

    propTypes: {
      defaultValue: function defaultValue(prop, propName) {
        if (prop[propName]) {
          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
        }
      },
      endValue: function endValue(prop, propName) {
        if (prop[propName]) {
          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
        }
      },
      defaultStyle: function defaultStyle(prop, propName) {
        if (prop[propName]) {
          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
        }
      },
      style: function style(prop, propName) {
        if (prop[propName]) {
          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
        }
      },
      // TOOD: warn against putting configs in here
      defaultStyles: PropTypes.objectOf(PropTypes.any),
      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
      willLeave: PropTypes.oneOfType([PropTypes.func]),
      // TOOD: warn against putting configs in here
      willEnter: PropTypes.oneOfType([PropTypes.func]),
      children: PropTypes.func.isRequired
    },

    getDefaultProps: function getDefaultProps() {
      return {
        willEnter: function willEnter(key, value) {
          return value;
        },
        willLeave: function willLeave() {
          return null;
        }
      };
    },

    getInitialState: function getInitialState() {
      var _props3 = this.props;
      var styles = _props3.styles;
      var defaultStyles = _props3.defaultStyles;

      var currentStyles = undefined;
      if (defaultStyles == null) {
        if (typeof styles === 'function') {
          currentStyles = styles();
        } else {
          currentStyles = styles;
        }
      } else {
        currentStyles = defaultStyles;
      }
      return {
        currentStyles: currentStyles,
        currentVelocities: mapObject(function (s) {
          return mapObject(_zero2['default'], s);
        }, currentStyles)
      };
    },

    componentDidMount: function componentDidMount() {
      this.startAnimating();
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.startAnimating();
    },

    animationStep: function animationStep(timestep, state) {
      var currentStyles = state.currentStyles;
      var currentVelocities = state.currentVelocities;
      var _props4 = this.props;
      var styles = _props4.styles;
      var willEnter = _props4.willEnter;
      var willLeave = _props4.willLeave;

      if (typeof styles === 'function') {
        styles = styles(currentStyles);
      }

      // TODO: huh?
      var mergedStyles = styles; // set mergedStyles to styles as the default
      var hasNewKey = false;

      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
      // TODO: stop allocating like crazy in this whole code path
      function (key) {
        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
        if (res == null) {
          // For legacy reason. We won't allow returning null soon
          // TODO: remove, after next release
          return null;
        }

        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
          return null;
        }
        return res;
      });

      Object.keys(mergedStyles).filter(function (key) {
        return !currentStyles.hasOwnProperty(key);
      }).forEach(function (key) {
        var _extends2, _extends3;

        hasNewKey = true;
        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);

        // We can mutate this here because mergeDiff returns a new Obj
        mergedStyles[key] = enterStyle;

        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
      });

      var newCurrentStyles = mapObject(function (mergedStyle, key) {
        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
      }, mergedStyles);
      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
      }, mergedStyles);

      if (!hasNewKey && everyObj(function (v, k) {
        return _noVelocity2['default'](v, currentStyles[k]);
      }, currentVelocities) && everyObj(function (v, k) {
        return _noVelocity2['default'](v, newCurrentStyles[k]);
      }, newCurrentVelocities)) {
        // check explanation in `Motion.animationRender`
        this.stopAnimation(); // Nasty side effects....
      }

      return {
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities
      };
    },

    stopAnimation: null,

    // used in animationRender
    hasUnmounted: false,

    componentWillUnmount: function componentWillUnmount() {
      this.stopAnimation();
      this.hasUnmounted = true;
    },

    startAnimating: function startAnimating() {
      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
    },

    animationRender: function animationRender(alpha, nextState, prevState) {
      // See comment in Motion.
      if (!this.hasUnmounted) {
        var currentStyles = mapObject(function (style, key) {
          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
        }, nextState.currentStyles);
        this.setState({
          currentStyles: currentStyles,
          currentVelocities: nextState.currentVelocities
        });
      }
    },

    render: function render() {
      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
      var renderedChildren = this.props.children(strippedStyle);
      return renderedChildren && React.Children.only(renderedChildren);
    }
  });

  var _deprecatedSprings = _deprecatedSprings3['default'](React);

  var Spring = _deprecatedSprings.Spring;
  var TransitionSpring = _deprecatedSprings.TransitionSpring;

  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
}

module.exports = exports['default'];
},{"./animationLoop":142,"./deprecatedSprings":144,"./hasReachedStyle":145,"./mergeDiff":146,"./noVelocity":147,"./stripStyle":153,"./updateTree":154,"./zero":155}],144:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports['default'] = deprecatedSprings;
var hasWarnedForSpring = {};
var hasWarnedForTransitionSpring = {};

function deprecatedSprings(React) {
  var Spring = React.createClass({
    displayName: 'Spring',

    componentWillMount: function componentWillMount() {
      if (process.env.NODE_ENV === 'development') {
        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
        if (!hasWarnedForSpring[ownerName]) {
          hasWarnedForSpring[ownerName] = true;
          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
        }
      }
    },

    render: function render() {
      return null;
    }
  });

  var TransitionSpring = React.createClass({
    displayName: 'TransitionSpring',

    componentWillMount: function componentWillMount() {
      if (process.env.NODE_ENV === 'development') {
        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
        if (!hasWarnedForTransitionSpring[ownerName]) {
          hasWarnedForTransitionSpring[ownerName] = true;
          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
        }
      }
    },

    render: function render() {
      return null;
    }
  });

  return { Spring: Spring, TransitionSpring: TransitionSpring };
}

module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":30}],145:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = hasReachedStyle;

function hasReachedStyle(currentStyle, style) {
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    var currentValue = currentStyle[key];
    var destValue = style[key];
    if (destValue == null || !destValue.config) {
      // not a spring config
      continue;
    }
    if (currentValue.config && currentValue.val !== destValue.val) {
      return false;
    }
    if (!currentValue.config && currentValue !== destValue.val) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];
},{}],146:[function(require,module,exports){


// this function is allocation-less thanks to babel, which transforms the tail
// calls into loops
'use strict';

exports.__esModule = true;
exports['default'] = mergeDiff;
function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
  var _again = true;

  _function: while (_again) {
    var arrA = _x,
        arrB = _x2,
        collB = _x3,
        indexA = _x4,
        indexB = _x5,
        onRemove = _x6,
        accum = _x7;
    endA = endB = keyA = keyB = fill = fill = undefined;
    _again = false;

    var endA = indexA === arrA.length;
    var endB = indexB === arrB.length;
    var keyA = arrA[indexA];
    var keyB = arrB[indexB];
    if (endA && endB) {
      // returning null here, otherwise lint complains that we're not expecting
      // a return value in subsequent calls. We know what we're doing.
      return null;
    }

    if (endA) {
      accum[keyB] = collB[keyB];
      _x = arrA;
      _x2 = arrB;
      _x3 = collB;
      _x4 = indexA;
      _x5 = indexB + 1;
      _x6 = onRemove;
      _x7 = accum;
      _again = true;
      continue _function;
    }

    if (endB) {
      var fill = onRemove(keyA);
      if (fill != null) {
        accum[keyA] = fill;
      }
      _x = arrA;
      _x2 = arrB;
      _x3 = collB;
      _x4 = indexA + 1;
      _x5 = indexB;
      _x6 = onRemove;
      _x7 = accum;
      _again = true;
      continue _function;
    }

    if (keyA === keyB) {
      accum[keyA] = collB[keyA];
      _x = arrA;
      _x2 = arrB;
      _x3 = collB;
      _x4 = indexA + 1;
      _x5 = indexB + 1;
      _x6 = onRemove;
      _x7 = accum;
      _again = true;
      continue _function;
    }

    if (!collB.hasOwnProperty(keyA)) {
      var fill = onRemove(keyA);
      if (fill != null) {
        accum[keyA] = fill;
      }
      _x = arrA;
      _x2 = arrB;
      _x3 = collB;
      _x4 = indexA + 1;
      _x5 = indexB;
      _x6 = onRemove;
      _x7 = accum;
      _again = true;
      continue _function;
    }

    _x = arrA;
    _x2 = arrB;
    _x3 = collB;
    _x4 = indexA + 1;
    _x5 = indexB;
    _x6 = onRemove;
    _x7 = accum;
    _again = true;
    continue _function;
  }
}

function mergeDiff(a, b, onRemove) {
  var ret = {};
  // if anyone can make this work without allocating the arrays here, we'll
  // give you a medal
  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
  return ret;
}

module.exports = exports['default'];
},{}],147:[function(require,module,exports){

// currentStyle keeps the info about whether a prop is configured as a spring
// or if it's just a random prop that happens to be present on the style

'use strict';

exports.__esModule = true;
exports['default'] = noVelocity;

function noVelocity(currentVelocity, currentStyle) {
  for (var key in currentVelocity) {
    if (!currentVelocity.hasOwnProperty(key)) {
      continue;
    }
    if (currentStyle[key] != null && currentStyle[key].config && currentVelocity[key] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = exports['default'];
},{}],148:[function(require,module,exports){

// [stiffness, damping]
"use strict";

exports.__esModule = true;
exports["default"] = {
  noWobble: [170, 26], // the default
  gentle: [120, 14],
  wobbly: [180, 12],
  stiff: [210, 20]
};
module.exports = exports["default"];
},{}],149:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components2 = require('./components');

var _components3 = _interopRequireDefault(_components2);

var _reorderKeys = require('./reorderKeys');

var _reorderKeys2 = _interopRequireDefault(_reorderKeys);

var _components = _components3['default'](_react2['default']);

var Spring = _components.Spring;
var TransitionSpring = _components.TransitionSpring;
var Motion = _components.Motion;
var StaggeredMotion = _components.StaggeredMotion;
var TransitionMotion = _components.TransitionMotion;
exports.Spring = Spring;
exports.TransitionSpring = TransitionSpring;
exports.Motion = Motion;
exports.StaggeredMotion = StaggeredMotion;
exports.TransitionMotion = TransitionMotion;

var _spring2 = require('./spring');

var _spring3 = _interopRequireDefault(_spring2);

exports.spring = _spring3['default'];

var _presets2 = require('./presets');

var _presets3 = _interopRequireDefault(_presets2);

exports.presets = _presets3['default'];
var utils = {
  reorderKeys: _reorderKeys2['default']
};
exports.utils = utils;
},{"./components":143,"./presets":148,"./reorderKeys":150,"./spring":151,"react":"react"}],150:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = reorderKeys;

function reorderKeys(obj, f) {
  var newKeys = f(Object.keys(obj));
  var ret = {};
  for (var i = 0; i < newKeys.length; i++) {
    var key = newKeys[i];
    ret[key] = obj[key];
  }

  return ret;
}

module.exports = exports["default"];
},{}],151:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = require('./presets');

var _presets2 = _interopRequireDefault(_presets);

function spring(val) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];

  return { val: val, config: config };
}

module.exports = exports['default'];
},{"./presets":148}],152:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = stepper;

var errorMargin = 0.0001;

function stepper(frameRate, x, v, destX, k, b) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * frameRate;
  var newX = x + newV * frameRate;

  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
    return [destX, 0];
  }

  return [newX, newV];
}

module.exports = exports["default"];
},{}],153:[function(require,module,exports){

// turn {x: {val: 1, config: [1, 2]}, y: 2} generated by
// `{x: spring(1, [1, 2]), y: 2}` into {x: 1, y: 2}

'use strict';

exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = style[key] == null || style[key].val == null ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];
},{}],154:[function(require,module,exports){


// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
'use strict';

exports.__esModule = true;
exports.interpolateValue = interpolateValue;
exports.updateCurrentStyle = updateCurrentStyle;
exports.updateCurrentVelocity = updateCurrentVelocity;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stepper = require('./stepper');

var _stepper2 = _interopRequireDefault(_stepper);

var _spring = require('./spring');

var _spring2 = _interopRequireDefault(_spring);

function interpolateValue(alpha, nextStyle, prevStyle) {
  // might be used by a TransitionMotion, where prevStyle might not exist anymore
  if (!prevStyle) {
    return nextStyle;
  }

  var ret = {};
  for (var key in nextStyle) {
    if (!nextStyle.hasOwnProperty(key)) {
      continue;
    }

    if (nextStyle[key] == null || !nextStyle[key].config) {
      ret[key] = nextStyle[key];
      // not a spring config, not something we want to interpolate
      continue;
    }
    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
    ret[key] = _spring2['default'](nextStyle[key].val * alpha + prevValue * (1 - alpha), nextStyle[key].config);
  }

  return ret;
}

// TODO: refactor common logic with updateCurrentVelocity

function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    if (style[key] == null || !style[key].config) {
      ret[key] = style[key];
      // not a spring config, not something we want to interpolate
      continue;
    }
    var _style$key$config = style[key].config;
    var k = _style$key$config[0];
    var b = _style$key$config[1];

    var val = _stepper2['default'](frameRate,
    // might have been a non-springed prop that just became one
    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
    ret[key] = _spring2['default'](val, style[key].config);
  }
  return ret;
}

function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    if (style[key] == null || !style[key].config) {
      // not a spring config, not something we want to interpolate
      ret[key] = 0;
      continue;
    }
    var _style$key$config2 = style[key].config;
    var k = _style$key$config2[0];
    var b = _style$key$config2[1];

    var val = _stepper2['default'](frameRate,
    // might have been a non-springed prop that just became one
    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
    ret[key] = val;
  }
  return ret;
}
},{"./spring":151,"./stepper":152}],155:[function(require,module,exports){

// used by the tree-walking updates and springs. Avoids some allocations
"use strict";

exports.__esModule = true;
exports["default"] = zero;

function zero() {
  return 0;
}

module.exports = exports["default"];
},{}],156:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

}).call(this,require('_process'))
},{"_process":30}],157:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(global, fn)
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":156}],158:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var PageView = (function (_React$Component) {
  _inherits(PageView, _React$Component);

  function PageView() {
    _classCallCheck(this, PageView);

    _get(Object.getPrototypeOf(PageView.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PageView, [{
    key: 'render',
    value: function render() {
      var linkClassName = this.props.pageLinkClassName;
      var cssClassName = this.props.pageClassName;

      if (this.props.selected) {
        if (typeof cssClassName !== 'undefined') {
          cssClassName = cssClassName + ' ' + this.props.activeClassName;
        } else {
          cssClassName = this.props.activeClassName;
        }
      }

      return _react2['default'].createElement(
        'li',
        { className: cssClassName },
        _react2['default'].createElement(
          'a',
          _extends({}, this.props, { href: '', className: linkClassName }),
          this.props.page
        )
      );
    }
  }]);

  return PageView;
})(_react2['default'].Component);

exports['default'] = PageView;
;
module.exports = exports['default'];
},{"react":"react"}],159:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PaginationListView = require('./PaginationListView');

var _PaginationListView2 = _interopRequireDefault(_PaginationListView);

var PaginationBoxView = (function (_Component) {
  _inherits(PaginationBoxView, _Component);

  _createClass(PaginationBoxView, null, [{
    key: 'propTypes',
    value: {
      pageNum: _react.PropTypes.number.isRequired,
      pageRangeDisplayed: _react.PropTypes.number.isRequired,
      marginPagesDisplayed: _react.PropTypes.number.isRequired,
      previousLabel: _react.PropTypes.node,
      nextLabel: _react.PropTypes.node,
      breakLabel: _react.PropTypes.node,
      clickCallback: _react.PropTypes.func,
      initialSelected: _react.PropTypes.number,
      forceSelected: _react.PropTypes.number,
      containerClassName: _react.PropTypes.string,
      subContainerClassName: _react.PropTypes.string,
      pageClassName: _react.PropTypes.string,
      pageLinkClassName: _react.PropTypes.string,
      activeClassName: _react.PropTypes.string,
      previousClassName: _react.PropTypes.string,
      nextClassName: _react.PropTypes.string,
      previousLinkClassName: _react.PropTypes.string,
      nextLinkClassName: _react.PropTypes.string,
      disabledClassName: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      pageNum: 10,
      pageRangeDisplayed: 2,
      marginPagesDisplayed: 3,
      activeClassName: "selected",
      previousClassName: "previous",
      nextClassName: "next",
      previousLabel: "Previous",
      nextLabel: "Next",
      breakLabel: "...",
      disabledClassName: "disabled"
    },
    enumerable: true
  }]);

  function PaginationBoxView(props) {
    var _this = this;

    _classCallCheck(this, PaginationBoxView);

    _get(Object.getPrototypeOf(PaginationBoxView.prototype), 'constructor', this).call(this, props);

    this.handlePreviousPage = function (evt) {
      evt.preventDefault();
      if (_this.state.selected > 0) {
        _this.handlePageSelected(_this.state.selected - 1, evt);
      }
    };

    this.handleNextPage = function (evt) {
      evt.preventDefault();
      if (_this.state.selected < _this.props.pageNum - 1) {
        _this.handlePageSelected(_this.state.selected + 1, evt);
      }
    };

    this.handlePageSelected = function (selected, evt) {
      evt.preventDefault();

      if (_this.state.selected === selected) return;

      _this.setState({ selected: selected });

      // Call the callback with the new selected item:
      _this.callCallback(selected);
    };

    this.callCallback = function (selectedItem) {
      if (typeof _this.props.clickCallback !== "undefined" && typeof _this.props.clickCallback === "function") {
        _this.props.clickCallback({ selected: selectedItem });
      }
    };

    this.state = {
      selected: props.initialSelected ? props.initialSelected : 0
    };
  }

  _createClass(PaginationBoxView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Call the callback with the initialSelected item:
      if (typeof this.props.initialSelected !== 'undefined') {
        this.callCallback(this.props.initialSelected);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var disabled = this.props.disabledClassName;

      var previousClasses = (0, _classnames2['default'])(this.props.previousClassName, { disabled: this.state.selected === 0 });

      var nextClasses = (0, _classnames2['default'])(this.props.nextClassName, { disabled: this.state.selected === this.props.pageNum - 1 });

      return _react2['default'].createElement(
        'ul',
        { className: this.props.containerClassName },
        _react2['default'].createElement(
          'li',
          { onClick: this.handlePreviousPage, className: previousClasses },
          _react2['default'].createElement(
            'a',
            { href: '', className: this.props.previousLinkClassName },
            this.props.previousLabel
          )
        ),
        _react2['default'].createElement(_PaginationListView2['default'], {
          onPageSelected: this.handlePageSelected,
          selected: this.state.selected,
          pageNum: this.props.pageNum,
          pageRangeDisplayed: this.props.pageRangeDisplayed,
          marginPagesDisplayed: this.props.marginPagesDisplayed,
          breakLabel: this.props.breakLabel,
          subContainerClassName: this.props.subContainerClassName,
          pageClassName: this.props.pageClassName,
          pageLinkClassName: this.props.pageLinkClassName,
          activeClassName: this.props.activeClassName,
          disabledClassName: this.props.disabledClassName }),
        _react2['default'].createElement(
          'li',
          { onClick: this.handleNextPage, className: nextClasses },
          _react2['default'].createElement(
            'a',
            { href: '', className: this.props.nextLinkClassName },
            this.props.nextLabel
          )
        )
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.forceSelected !== 'undefined' && nextProps.forceSelected !== this.state.selected) {
        this.setState({ selected: nextProps.forceSelected });
      }
    }
  }]);

  return PaginationBoxView;
})(_react.Component);

exports['default'] = PaginationBoxView;
;
module.exports = exports['default'];
},{"./PaginationListView":160,"classnames":162,"react":"react"}],160:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _PageView = require('./PageView');

var _PageView2 = _interopRequireDefault(_PageView);

var PaginationListView = (function (_Component) {
  _inherits(PaginationListView, _Component);

  function PaginationListView() {
    _classCallCheck(this, PaginationListView);

    _get(Object.getPrototypeOf(PaginationListView.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PaginationListView, [{
    key: 'render',
    value: function render() {
      var items = {};

      if (this.props.pageNum <= this.props.pageRangeDisplayed) {

        for (var index = 0; index < this.props.pageNum; index++) {
          items['key' + index] = _react2['default'].createElement(_PageView2['default'], {
            onClick: this.props.onPageSelected.bind(null, index),
            selected: this.props.selected === index,
            pageClassName: this.props.pageClassName,
            pageLinkClassName: this.props.pageLinkClassName,
            activeClassName: this.props.activeClassName,
            page: index + 1 });
        }
      } else {

        var leftSide = this.props.pageRangeDisplayed / 2;
        var rightSide = this.props.pageRangeDisplayed - leftSide;

        if (this.props.selected > this.props.pageNum - this.props.pageRangeDisplayed / 2) {
          rightSide = this.props.pageNum - this.props.selected;
          leftSide = this.props.pageRangeDisplayed - rightSide;
        } else if (this.props.selected < this.props.pageRangeDisplayed / 2) {
          leftSide = this.props.selected;
          rightSide = this.props.pageRangeDisplayed - leftSide;
        }

        var index = undefined;
        var page = undefined;

        for (index = 0; index < this.props.pageNum; index++) {

          page = index + 1;

          var pageView = _react2['default'].createElement(_PageView2['default'], {
            onClick: this.props.onPageSelected.bind(null, index),
            selected: this.props.selected === index,
            pageClassName: this.props.pageClassName,
            pageLinkClassName: this.props.pageLinkClassName,
            activeClassName: this.props.activeClassName,
            page: index + 1 });

          if (page <= this.props.marginPagesDisplayed) {
            items['key' + index] = pageView;
            continue;
          }

          if (page > this.props.pageNum - this.props.marginPagesDisplayed) {
            items['key' + index] = pageView;
            continue;
          }

          if (index >= this.props.selected - leftSide && index <= this.props.selected + rightSide) {
            items['key' + index] = pageView;
            continue;
          }

          var keys = Object.keys(items);
          var breakLabelKey = keys[keys.length - 1];
          var breakLabelValue = items[breakLabelKey];

          if (breakLabelValue !== this.props.breakLabel) {
            items['key' + index] = this.props.breakLabel;
          }
        }
      }

      return _react2['default'].createElement(
        'ul',
        { className: this.props.subContainerClassName },
        (0, _reactAddonsCreateFragment2['default'])(items)
      );
    }
  }]);

  return PaginationListView;
})(_react.Component);

exports['default'] = PaginationListView;
;
module.exports = exports['default'];
},{"./PageView":158,"react":"react","react-addons-create-fragment":163}],161:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PaginationBoxView = require('./PaginationBoxView');

var _PaginationBoxView2 = _interopRequireDefault(_PaginationBoxView);

module.exports = _PaginationBoxView2['default'];
},{"./PaginationBoxView":159}],162:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

function classNames() {
	var classes = '';
	var arg;

	for (var i = 0; i < arguments.length; i++) {
		arg = arguments[i];
		if (!arg) {
			continue;
		}

		if ('string' === typeof arg || 'number' === typeof arg) {
			classes += ' ' + arg;
		} else if (Object.prototype.toString.call(arg) === '[object Array]') {
			classes += ' ' + classNames.apply(null, arg);
		} else if ('object' === typeof arg) {
			for (var key in arg) {
				if (!arg.hasOwnProperty(key) || !arg[key]) {
					continue;
				}
				classes += ' ' + key;
			}
		}
	}
	return classes.substr(1);
}

// safely export classNames for node / browserify
if (typeof module !== 'undefined' && module.exports) {
	module.exports = classNames;
}

// safely export classNames for RequireJS
if (typeof define !== 'undefined' && define.amd) {
	define('classnames', [], function() {
		return classNames;
	});
}

},{}],163:[function(require,module,exports){
module.exports = require('react/lib/ReactFragment').create;
},{"react/lib/ReactFragment":170}],164:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;
},{}],165:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler,
  fiveArgumentPooler: fiveArgumentPooler
};

module.exports = PooledClass;
}).call(this,require('_process'))
},{"_process":30,"fbjs/lib/invariant":178}],166:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */

'use strict';

var PooledClass = require('./PooledClass');
var ReactElement = require('./ReactElement');

var emptyFunction = require('fbjs/lib/emptyFunction');
var traverseAllChildren = require('./traverseAllChildren');

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;
},{"./PooledClass":165,"./ReactElement":169,"./traverseAllChildren":176,"fbjs/lib/emptyFunction":177}],167:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

'use strict';

var shallowCompare = require('./shallowCompare');

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this Mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;
},{"./shallowCompare":175}],168:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;
},{}],169:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');

var assign = require('./Object.assign');
var canDefineProperty = require('./canDefineProperty');

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

/**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    Object.freeze(element.props);
    Object.freeze(element);
  }

  return element;
};

ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : '' + config.key;
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (typeof props[propName] === 'undefined') {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);

  if (process.env.NODE_ENV !== 'production') {
    // If the key on the original is valid, then the clone is valid
    newElement._store.validated = oldElement._store.validated;
  }

  return newElement;
};

ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (config.ref !== undefined) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (config.key !== undefined) {
      key = '' + config.key;
    }
    // Remaining properties override existing props
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
}).call(this,require('_process'))
},{"./Object.assign":164,"./ReactCurrentOwner":168,"./canDefineProperty":173,"_process":30}],170:[function(require,module,exports){
(function (process){
/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFragment
 */

'use strict';

var ReactChildren = require('./ReactChildren');
var ReactElement = require('./ReactElement');

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * We used to allow keyed objects to serve as a collection of ReactElements,
 * or nested sets. This allowed us a way to explicitly key a set a fragment of
 * components. This is now being replaced with an opaque data structure.
 * The upgrade path is to call React.addons.createFragment({ key: value }) to
 * create a keyed fragment. The resulting data structure is an array.
 */

var numericPropertyRegex = /^\d+$/;

var warnedAboutNumeric = false;

var ReactFragment = {
  // Wrap a keyed object in an opaque proxy that warns you if you access any
  // of its properties.
  create: function (object) {
    if (typeof object !== 'object' || !object || Array.isArray(object)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
      return object;
    }
    if (ReactElement.isValidElement(object)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
      return object;
    }

    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;

    var result = [];

    for (var key in object) {
      if (process.env.NODE_ENV !== 'production') {
        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
          warnedAboutNumeric = true;
        }
      }
      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
    }

    return result;
  }
};

module.exports = ReactFragment;
}).call(this,require('_process'))
},{"./ReactChildren":166,"./ReactElement":169,"_process":30,"fbjs/lib/emptyFunction":177,"fbjs/lib/invariant":178,"fbjs/lib/warning":180}],171:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */

'use strict';

var ReactRootIndex = require('./ReactRootIndex');

var invariant = require('fbjs/lib/invariant');

var SEPARATOR = '.';
var SEPARATOR_LENGTH = SEPARATOR.length;

/**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */
var MAX_TREE_DEPTH = 10000;

/**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */
function getReactRootIDString(index) {
  return SEPARATOR + index.toString(36);
}

/**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */
function isBoundary(id, index) {
  return id.charAt(index) === SEPARATOR || index === id.length;
}

/**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */
function isValidID(id) {
  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
}

/**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */
function isAncestorIDOf(ancestorID, descendantID) {
  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
}

/**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */
function getParentID(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
}

/**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */
function getNextDescendantID(ancestorID, destinationID) {
  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
  if (ancestorID === destinationID) {
    return ancestorID;
  }
  // Skip over the ancestor and the immediate separator. Traverse until we hit
  // another separator or we reach the end of `destinationID`.
  var start = ancestorID.length + SEPARATOR_LENGTH;
  var i;
  for (i = start; i < destinationID.length; i++) {
    if (isBoundary(destinationID, i)) {
      break;
    }
  }
  return destinationID.substr(0, i);
}

/**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */
function getFirstCommonAncestorID(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if (minLength === 0) {
    return '';
  }
  var lastCommonMarkerIndex = 0;
  // Use `<=` to traverse until the "EOL" of the shorter string.
  for (var i = 0; i <= minLength; i++) {
    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
      lastCommonMarkerIndex = i;
    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
      break;
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
  return longestCommonID;
}

/**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {*} arg Argument to invoke the callback with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */
function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || '';
  stop = stop || '';
  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
  var traverseUp = isAncestorIDOf(stop, start);
  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
  // Traverse from `start` to `stop` one depth at a time.
  var depth = 0;
  var traverse = traverseUp ? getParentID : getNextDescendantID;
  for (var id = start;; /* until break */id = traverse(id, stop)) {
    var ret;
    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      ret = cb(id, traverseUp, arg);
    }
    if (ret === false || id === stop) {
      // Only break //after// visiting `stop`.
      break;
    }
    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
  }
}

/**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */
var ReactInstanceHandles = {

  /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */
  createReactRootID: function () {
    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
  },

  /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */
  createReactID: function (rootID, name) {
    return rootID + name;
  },

  /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */
  getReactRootIDFromNodeID: function (id) {
    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
      var index = id.indexOf(SEPARATOR, 1);
      return index > -1 ? id.substr(0, index) : id;
    }
    return null;
  },

  /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */
  traverseEnterLeave: function (leaveID, enterID, cb, upArg, downArg) {
    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
    if (ancestorID !== leaveID) {
      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
    }
    if (ancestorID !== enterID) {
      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
    }
  },

  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseTwoPhase: function (targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, false);
      traverseParentPath(targetID, '', cb, arg, false, true);
    }
  },

  /**
   * Same as `traverseTwoPhase` but skips the `targetID`.
   */
  traverseTwoPhaseSkipTarget: function (targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, true);
      traverseParentPath(targetID, '', cb, arg, true, true);
    }
  },

  /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseAncestors: function (targetID, cb, arg) {
    traverseParentPath('', targetID, cb, arg, true, false);
  },

  getFirstCommonAncestorID: getFirstCommonAncestorID,

  /**
   * Exposed for unit testing.
   * @private
   */
  _getNextDescendantID: getNextDescendantID,

  isAncestorIDOf: isAncestorIDOf,

  SEPARATOR: SEPARATOR

};

module.exports = ReactInstanceHandles;
}).call(this,require('_process'))
},{"./ReactRootIndex":172,"_process":30,"fbjs/lib/invariant":178}],172:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */

'use strict';

var ReactRootIndexInjection = {
  /**
   * @param {function} _createReactRootIndex
   */
  injectCreateReactRootIndex: function (_createReactRootIndex) {
    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
  }
};

var ReactRootIndex = {
  createReactRootIndex: null,
  injection: ReactRootIndexInjection
};

module.exports = ReactRootIndex;
},{}],173:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */

'use strict';

var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
}).call(this,require('_process'))
},{"_process":30}],174:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * @typechecks static-only
 */

'use strict';

/* global Symbol */
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;
},{}],175:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule shallowCompare
*/

'use strict';

var shallowEqual = require('fbjs/lib/shallowEqual');

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;
},{"fbjs/lib/shallowEqual":179}],176:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactElement = require('./ReactElement');
var ReactInstanceHandles = require('./ReactInstanceHandles');

var getIteratorFn = require('./getIteratorFn');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var SEPARATOR = ReactInstanceHandles.SEPARATOR;
var SUBSEPARATOR = ':';

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var userProvidedKeyEscaperLookup = {
  '=': '=0',
  '.': '=1',
  ':': '=2'
};

var userProvidedKeyEscapeRegex = /[=.:]/g;

var didWarnAboutMaps = false;

function userProvidedKeyEscaper(match) {
  return userProvidedKeyEscaperLookup[match];
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  if (component && component.key != null) {
    // Explicit key
    return wrapUserProvidedKey(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} text Component key to be escaped.
 * @return {string} An escaped string.
 */
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
}

/**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */
function wrapUserProvidedKey(key) {
  return '$' + escapeUserProvidedKey(key);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":168,"./ReactElement":169,"./ReactInstanceHandles":171,"./getIteratorFn":174,"_process":30,"fbjs/lib/invariant":178,"fbjs/lib/warning":180}],177:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

"use strict";

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],178:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":30}],179:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],180:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":177,"_process":30}]},{},[21]);
