// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {};
const options = [
  { icon: 'fas fa-sd-card', desc: 'Install from SD card' },
  { icon: 'fas fa-cloud-download-alt', desc: 'Instal over LAN or internet' },
  { icon: 'fab fa-usb', desc: 'Install over USB' },
  { icon: 'fas fa-wrench', desc: 'Manage signature patches' },
  { icon: 'fas fa-cog ', desc: 'Settings' },
  { icon: 'fas fa-door-open', desc: 'Exit' }
];
export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h1>
          Awoo Installer<span>v0.0.1</span>
        </h1>
        <div className={styles.options}>
          {options.map((opt, idx) => (
            <div tabIndex={idx}>
              <i className={opt.icon} />
              {opt.desc}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
