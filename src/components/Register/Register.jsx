import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import TextField from 'elements/TextField/TextField';
import Button from 'elements/Button/Button';

import { TiKey, TiMail } from "react-icons/ti";
import css from './Register.css';

class Register extends Component {

  @autobind
  handleSubmit(event) {
    console.log('Form is submited');
    event.preventDefault();
  }

  render() {
    return (
      <div className={css.register}>
        <h2 className={css.registerTitle}>{this.props.title}</h2>

        <div className={css.container}>
          <form onSubmit={this.handleSubmit}>
            <TextField label="Mail" type="text" icon={<TiMail />} />
            <TextField label="Pass" type="password" icon={<TiKey />} />

            <div className={css.formBtns}>
              <Button label="Register" type="text" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
