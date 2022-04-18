import React from 'react';
import styles from './header.module.scss';
import {TopBar} from "./top-bar/top-bar";

type OwnProps = {}

export const Header: React.FC<OwnProps> = () => {
    return (
        <div className={styles.header}>
            <TopBar/>
        </div>
    );
}