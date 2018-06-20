import React, { Component } from 'react';
import styles from './styles.module.css';

class SubmitButton extends Component {
    render() {
        return (
            <button className={styles.submitbutton}>Submit</button>
        );
    }
}

export default SubmitButton;