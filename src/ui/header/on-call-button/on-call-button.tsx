import React from 'react';
import styles from './on-call-button.module.scss';

type OwnProps = {}

export const OnCallButton: React.FC<OwnProps> = () => {

    return (<div className={styles.onCallButton}>
        <button className={styles.onCallButton__button}>
            <span className={styles.onCallButton__text}></span>
        </button>
            <div className={styles.onCallButton__description}>{'Ответим на любой вопрос'}</div>
        </div>
    );
}