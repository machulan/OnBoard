import React, { Component } from 'react';
import styles from './styles.module.css';
import SubmitButton from '../SubmitButton/index';

class MainForm extends Component {
    render() {
        return (
            <form className={styles.main}>
                <input className={styles.input} placeholder="Username" />
                <SubmitButton />
            </form>
        );
    }
}

export default MainForm;