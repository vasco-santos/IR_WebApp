import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    let style = {'textAlign': 'center'};
    return (
      <div className='container' style={style}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Information Retrieval Assignment 3</h2>
          </div>
        </div>
        <div className="container row">
            <img className='text-center' src={'/img/RI3_Diagram3.png'} />
        </div>
      </div>
    );
  }
}

export default Home;