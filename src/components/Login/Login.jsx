import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import TextField from 'elements/TextField/TextField';
import Button from 'elements/Button/Button';

import {
  TiKey,
  TiUser
} from "react-icons/ti";
import css from './Login.css';

class Login extends Component {

  @autobind
  handleSubmit(event) {
    console.log('Form is submited');
    event.preventDefault();
  }

  render() {
    return (
      <div className={css.login}>
        <h2 className={css.loginTitle}>{this.props.title}</h2>

        <div className={css.container}>
          <form onSubmit={this.handleSubmit}>
            <TextField label="Login" type="text" icon={<TiUser />} />
            <TextField label="Pass" type="password" icon={<TiKey />} />

            <div className={css.formBtns}>
              <Button label="Login" type="text" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
