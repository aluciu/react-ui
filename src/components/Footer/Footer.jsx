import React, { Component } from 'react';

import layout from 'css/layout.css';
import css from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={css.footer}>
        <div className={layout.row}>
          <div className={layout.columns3}>
            <h2 className={css.footerTitle}>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
          </div>
          <div className={layout.columns3}>
            <h2 className={css.footerTitle}>Team</h2>
            <p>We are lorem ipsum dolor sit amet consectuar sit elit</p>
          </div>
          <div className={layout.columns3}>
            <h2 className={css.footerTitle}>Contact</h2>
            <p>
              Mobile: +48 012 345 678<br />
              Mail: contact@freeuikit.zz<br />
              Site: www.freeuikit.zz
            </p>
          </div>
        </div>

        <div className={css.copy}>
            Copyright &copy; 2015
        </div>
      </div>
    );
  }
}

export default Footer;
