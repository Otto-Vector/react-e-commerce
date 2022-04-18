import React from 'react';
import styles from './top-bar.module.scss';
import {Nav} from './nav/nav';
import {Logo} from './logo/logo';

type OwnProps = {}

export const TopBar: React.FC<OwnProps> = () => {
    return (
        <header className={styles.topBar}>
            <Logo/>
            <Nav/>
        </header>
    );
}