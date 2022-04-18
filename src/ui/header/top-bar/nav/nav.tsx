import React from 'react';
import styles from './nav.module.scss';

type OwnProps = {}

export const Nav: React.FC<OwnProps> = () => {
    type titleUrl = { title: string, url: string }

    const menu: titleUrl[] = [
        {title: 'О студии', url: '#about'},
        {title: 'Портфолио', url: '#cases'},
        {title: 'Наши услуги', url: '#how'},
        {title: 'Новости', url: '#news'},
        {title: 'Отзывы', url: '#reviews'},
        {title: 'Контакты', url: '#contacts'},
    ]

    return (
        <nav className={styles.nav}>
            <button className={styles.nav__burger + ' ' + styles.burger}>
                <div className={styles.burger__plate}/>

            </button>
            {menu.map((elem) =>
                <a className={styles.nav__item} href={elem.url}>{elem.title}</a>)}
        </nav>
    );
}