import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleName } from '../../slices/GameUsersSlice';
import { GameUserSliceState } from '../../interfaces';

export default function Login() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state: GameUserSliceState) => state.users);

    useEffect(() => {
        console.log(user);
    }, [user]);

    function handleSubmitUsers(evt: React.FormEvent<HTMLFormElement>, user: string, value: string) {
        evt.preventDefault();
        dispatch(toggleName({ user, value }));
    }

    return (
        <section className={styles.login}>
            <div className={styles.login_section}>
                <form className={styles.login_form} onSubmit={(evt) => handleSubmitUsers(evt, 'userOne', inputValue)}>
                    <label htmlFor="login-input">Имя первого игрока</label>
                    <input
                        type="text"
                        id="login-input"
                        name="name"
                        placeholder="Ваше имя"
                        className={styles.login_form_input}
                        value={inputValue}
                        onChange={(evt) => setInputValue(evt.target.value)}
                    />
                    <label htmlFor="login-select">Чем будете играть?</label>
                    <select name="login-select" id="login-select" className={styles.login_form_input}>
                        <option value="">Выберите X/O</option>
                        <option value="X">X</option>
                        <option value="O">O</option>
                    </select>
                    <button type="submit" className={styles.login_form_btn}>
                        Зарегистрироваться
                    </button>
                </form>
                <form className={styles.login_form} onSubmit={(evt) => handleSubmitUsers(evt, 'userTwo', inputValue)}>
                    <label htmlFor="login-input">Имя второго игрока</label>
                    <input
                        type="text"
                        id="login-input"
                        name="name"
                        placeholder="Ваше имя"
                        className={styles.login_form_input}
                    />
                    <label htmlFor="login-select">Чем будете играть?</label>
                    <select name="login-select" id="login-select" className={styles.login_form_input}>
                        <option value="">Выберите X/O</option>
                        <option value="X">X</option>
                        <option value="O">O</option>
                    </select>
                    <button className={styles.login_form_btn}>Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
}
