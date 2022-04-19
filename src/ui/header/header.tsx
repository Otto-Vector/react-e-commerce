import React from 'react';
import styles from './header.module.scss';
import {Ecommerce} from './ecommerce/ecommerce';
import {Phone} from './phone/phone';
import {OnCallButton} from './on-call-button/on-call-button';

type OwnProps = {}

export const Header: React.FC<OwnProps> = () => {
    return (
        <section className={styles.header}>
            <div className={styles.header__ecommerce}>
            <Ecommerce/>
            </div>
            {/*<div className={styles.header__phone}>*/}
            {/*    <Phone/>*/}
            {/*</div>*/}
            <div className={styles.header__onCallButton}>
                <OnCallButton/>
            </div>
            {/*<p className={styles.header__description}>{'Ответим на любой вопрос'}</p>*/}
        </section>
    );
}