import React from 'react';
import styles from './ui-component.module.scss';
import {Header} from './header/header';

export const UiComponent: React.FC = () =>
        <div className={styles.ui}>
            <Header/>
        </div>
