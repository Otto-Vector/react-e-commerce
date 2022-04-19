import React from 'react';
import styles from './on-call-button.module.scss';

type OwnProps = {}

export const OnCallButton: React.FC<OwnProps> = () => {

    return (
        <button className={styles.onCallButton}>
            <span className={styles.onCallButton__text}></span>
        </button>
    );
}