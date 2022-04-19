import React from 'react';
import styles from './ecommerce.module.scss';

type OwnProps = {}

export const Ecommerce: React.FC<OwnProps> = () => {

    return (
        <article className={styles.ecommerce}>
            <h2 className={styles.ecommerce__header}>{'E-commerce'}</h2>
            <p className={styles.ecommerce__title}>{'Интернет-магазин принесет вам максимум прибыли!'}</p>
            <p className={styles.ecommerce__description}>{'Рассказываем что такое интернет магазин и зачем это нужно.'}</p>
        </article>
    );
}