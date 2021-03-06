import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import TextField from 'elements/TextField/TextField';
import Button from 'elements/Button/Button';

import {
  TiBusinessCard,
  TiMail,
  TiDocumentText
} from "react-icons/ti";
import css from './ContactForm.css';

class ContactForm extends Component {

  @autobind
  handleSubmit(event) {
    console.log('Form is submited');
    event.preventDefault();
  }

  render() {
    return (
      <div className={css.contactForm}>
          <form onSubmit={this.handleSubmit}>
            <TextField label="Email" type="text" icon={<TiMail />} />
            <TextField label="Name" type="text" icon={<TiBusinessCard />} />
            <TextField label="Comment" type="text" icon={<TiDocumentText />} />

            <div className={css.formBtns}>
              <Button label="Send" type="text" />
            </div>
          </form>
      </div>
    );
  }
}

export default ContactForm;
