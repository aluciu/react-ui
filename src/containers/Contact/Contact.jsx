import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div>

          Contact page
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Roster</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
          </ul>

			</div>
		);
	}
}

export default Contact;
