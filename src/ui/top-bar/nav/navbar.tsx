import React, {useState} from 'react';
import styles from './navbar.module.scss';

type OwnProps = {}

export const Navbar: React.FC<OwnProps> = () => {

    const [isExpand, setIsExpand]=useState(false)

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
        <div className={styles.navbar}>
            <button className={styles.navbar__burger + ' ' + styles.burger }
            onClick={()=>setIsExpand(!isExpand)}>
                <div className={styles.burger__plate}/>
            </button>
            <nav className={styles.navbar__nav+ ' ' + (isExpand && styles.navbar__nav_active)}
            onClick={()=>setIsExpand(!isExpand)}>
            {menu.map((elem) =>
                <a className={styles.navbar__item} href={elem.url} key={elem.title}>{elem.title}</a>)}
            </nav>
        </div>
    );
}