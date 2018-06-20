import React, { Component } from 'react';
import styles from './styles.module.css';
import Header from '../Header/index';
import Logo from './logo.svg';

class Cover extends Component {
    render() {
        return (
            <div className={styles.cover}>
                <Logo/>
                <Header/>
            </div>
        );
    }
}

export default Cover;