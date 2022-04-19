import React from 'react';
import styles from './logo.module.scss';
import logoIcon from './media/logo.svg'
import logoText from './media/WEB ALTERNATIVE.png'
type OwnProps = {}

export const Logo: React.FC<OwnProps> = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logo__icon} src={logoIcon} alt="Logo"/>
            <img className={styles.logo__text} src={logoText} alt="Web Alternative"/>
        </div>
    );
}