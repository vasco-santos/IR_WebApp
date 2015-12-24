import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	
	componentDidMount() {
		FooterStore.listen(this.onChange);
		FooterActions.getTopCharacters();
	}
	
	componentWillUnmount() {
		FooterStore.unlisten(this.onChange);
	}
	
	onChange(state) {
		this.setState(state);
	}
	
	render(){
		let style = {'textAlign': 'center'};
		return (
		<footer>
			<div className='container'>
				<div style={style} className='row'>
					<h4>Powered by <strong>Node.js</strong>, <strong>Solr</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</h4>
					<p>Based on this <a href='https://github.com/sahat/newedenfaces-react'>Repository</a> on GitHub.</p>
					<p>© IR 2015 <strong>Miguel Vicente</strong> & <strong>Vasco Santos</strong></p>
				</div>
			</div>
		</footer>
		);
	}
}

export default Footer;