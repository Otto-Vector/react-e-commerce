import React from 'react';
import styles from './back-call.module.scss';

type OwnProps = {}

export const BackCall: React.FC<OwnProps> = () => {
    const buttonText = 'Заказать звонок'
    const phoneNumber = '+7 (4212) 25-30-85'
    const href = '#callForm'
    return (
        <div className={styles.backCall}>
            <a href={href}>
                <button className={styles.backCall__button} type={'button'}>
                    {buttonText}
                </button>
            </a>
            <span className={styles.backCall__phone}>{phoneNumber}</span>
        </div>
    );
}