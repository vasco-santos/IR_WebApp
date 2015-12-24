import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
  
    
  render() {
    //var classicalStyle = {height: "100%"};
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;