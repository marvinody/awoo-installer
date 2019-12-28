// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {};

const options = [
  { icon: '', desc: 'Install from SD card' },
  { icon: '', desc: 'Instal over LAN or internet' },
  { icon: '', desc: 'Manage signature patches' },
  { icon: '', desc: 'Settings' },
  { icon: '', desc: 'Exit' }
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
          {options.map(opt => (
            <div>{opt.desc}</div>
          ))}
        </div>
        <footer>
          <span>Select</span>
          <span>Exit</span>
        </footer>
      </div>
    );
  }
}
