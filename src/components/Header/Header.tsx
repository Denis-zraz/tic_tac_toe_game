// import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { GAME } from '../../constants/path';
import { useSelector } from 'react-redux';
import { InAccountState } from '../../interfaces';

export default function Header() {
    const inAccount = useSelector((state: InAccountState) => state.account.inAccount);
    console.log(inAccount);
    return (
        <header className={styles.header}>
            {}
            <NavLink to={GAME}>Игра</NavLink>
        </header>
    );
}
