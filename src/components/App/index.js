import React, { Component } from 'react';
import styles from './styles.module.css';
import Cover from '../Cover/index';
import MainForm from '../MainForm/index';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Cover />
                <MainForm />
            </div>
        );
    }
}

export default App;