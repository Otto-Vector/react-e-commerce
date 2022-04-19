import React from 'react';
import styles from './ui-component.module.scss';
import {Header} from './header/header';
import {TopBar} from './top-bar/top-bar';

export const UiComponent: React.FC = () =>
        <div className={styles.ui}>
            <TopBar/>
            <Header/>
        </div>
