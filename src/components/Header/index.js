import React, { Component } from 'react';
import styles from './styles.module.css';

class Header extends Component {
    render() {
        return (
            <h1 className={styles.header}>Welcome on board, username!</h1>
        );
    }
}

export default Header;