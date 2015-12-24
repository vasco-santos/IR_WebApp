
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'; // spm error
import DateTimeFormat from 'gregorian-calendar-format';
import GregorianCalendar from 'gregorian-calendar';
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN';
import NavbarActions from '../actions/NavbarActions';
import NavbarStore from '../stores/NavbarStore';

const formatter = new DateTimeFormat('yyyy-MM-dd HH:mm:ss');

var MyCalendar = React.createClass({
  onChange(value) {
    let date = {id:this.props.id,date:(value && formatter.format(value))};
    NavbarActions.updateRange(date);
    this.setState({value});
  },

  getInitialState() {
    var value = new GregorianCalendar(zhCn);
    value.setTime(Date.now());
    return {
      open: false,
      showTime: true,
      value: value
    };
  },

  onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked
    });
  },

  render() {
    var state = this.state;
   // var calendar = <Calendar locale={CalendarLocale}
   //                          showTime={this.state.showTime}
   //                          />;
    var calendar =   <Calendar showWeekNumber
                          showOk={true}
                          showToday={true}
                          showTime={false}/>
    return <div className="form-group" style={{width: 400, margin: 20}} >
      <div className="input-group">
        <span>
          {this.props.id}</span>
      </div>
      <div className="input-group" style={{width:250}}>
        <DatePicker ref='picker'
                    calendar={calendar}
                    value={state.value}
                    onChange={this.onChange}
                    >
          {
            ({value}) => {
              return <span>
                <input type="text"
                       className="form-control"
                       readOnly
                       value={value &&formatter.format(value)}
                       id={this.props.id}
                       style={{
                       background: "white",
                       borderTopRightRadius:4,
                       borderBottomRightRadius:4,
                       cursor: "pointer",
                     
                       }}/>
                <span className="input-group-addon" style={{
                width:39,
                height:34,
                borderRight:0,
                borderLeft:'1px solid #ccc',
                position:'absolute',
                zIndex:99,
                right:1,top:0}}>
          <span className="glyphicon glyphicon-calendar"></span>
        </span>
                </span>;
            }
          }
        </DatePicker>
      </div>
    </div>;
  }
});

export default MyCalendar