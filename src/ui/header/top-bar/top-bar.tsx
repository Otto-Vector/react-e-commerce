import React from 'react';
import styles from './top-bar.module.scss';
import {Navbar} from './nav/navbar';
import {Logo} from './logo/logo';
import {BackCall} from './back-call/back-call';

type OwnProps = {}

export const TopBar: React.FC<OwnProps> = () => {
    return (
        <header className={styles.topBar}>
            <Logo/>
            <BackCall/>
            <Navbar/>
        </header>
    );
}