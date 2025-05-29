// import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { GAME, HISTORY } from '../../constants/path';
import { useSelector } from 'react-redux';
import { InAccountState } from '../../interfaces';

export default function Header() {
    const inAccount = useSelector((state: InAccountState) => state.account.inAccount);
    // console.log(inAccount);
    return (
        <header className={styles.header}>
            {inAccount && (
                <NavLink to={GAME} className={styles.header_link}>
                    Игра
                </NavLink>
            )}
            <Link to={HISTORY} className={styles.header_link}>
                История
            </Link>
        </header>
    );
}
