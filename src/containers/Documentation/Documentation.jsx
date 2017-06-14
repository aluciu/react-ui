import React, {Component} from 'react';

import PageLayout from 'components/PageLayout/PageLayout';
import PageContent from 'components/PageLayout/PageContent';

import Button from 'elements/Button/Button';
import TextField from 'elements/TextField/TextField';
import Avatar from 'elements/Avatar/Avatar';

import Sidebar from 'components/Sidebar/Sidebar';
import {
  MdAdd,
  MdClose
} from "react-icons/md";

import css from './Documentation.css';

const navigation = [
  {
    id: 1,
    label: 'Button',
    url: '#button',
  },
  {
    id: 2,
    label: 'Text field',
    url: '#textfield',
  },
  {
    id: 3,
    label: 'Avatars',
    url: '#avatar',
  },
  {
    id: 4,
    label: 'Avatars',
    url: '#avatar',
  },
];

class Contact extends Component {
	render() {
		return (
      <PageLayout sidebar="right">
        <PageContent title="Components">
          <div className={css.section} id="button">
  					<h3 id="button">Buttons</h3>
  					Button elements can be text or icon... see the readme.md
  					<span className={css.spacer} />
  					<Button
  						label="Text Button"
  					/>
  					<span className={css.spacer} />
  					<Button
  						label="Add Button"
  						icon={<MdAdd />}
  					/>
            &nbsp; &nbsp; &nbsp;
  					<Button
  						label="Button"
  						icon={<MdClose />}
  						alt
  					/>
            <span className={css.spacer} />
            <p>Buttons with Material design Ripple effect</p>
            <Button
						label="Text Button"
              ripple
					/>
            <span className={css.spacer} />
            <Button
						label="Add Button"
						icon={<MdAdd />}
              ripple
					/>
            &nbsp; &nbsp; &nbsp;
            <Button
              label="Button"
              icon={<MdClose />}
              alt
              ripple
            />
          </div>

          <div className={css.section} id="textfield">
            <h3>Text fields</h3>
            <TextField
              label="Text"
              icon={<MdClose />}
            />
          </div>

          <div className={css.section} id="avatar">
            <h3>Avatars</h3>
            <Avatar
              size={100}
              image="https://placem.at/people?w=265&h=150&txt=0&random=3"
            />
          </div>

          <div className={css.section} id="avatar">
            <h3>Avatars</h3>
            <Avatar
              size={100}
              image="https://placem.at/people?w=265&h=150&txt=0&random=3"
            />
          </div>


        </PageContent>

				<Sidebar
					title="Sidebar"
					nav={navigation}
          type="text"
				/>
      </PageLayout>
		);
	}
}

export default Contact;
