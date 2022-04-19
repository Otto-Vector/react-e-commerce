import React from 'react';
import styles from './phone.module.scss';
import phoneImg from './media/phone.png'
import eImg from './media/E.png'

type OwnProps = {}

export const Phone: React.FC<OwnProps> = () => {
    return (
        <div className={styles.phone}>
            <img className={styles.phone__bigE} src={eImg} alt="E"/>
            <div className={styles.phone__circle}/>
            <img className={styles.phone__image} src={phoneImg} alt="phone"/>
        </div>
    );
}