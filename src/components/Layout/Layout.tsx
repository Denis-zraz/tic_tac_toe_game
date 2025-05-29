import { Outlet } from 'react-router-dom'
import Header from '../Header'
import styles from './Layout.module.scss'

export default function Layout() {
  return (
    <section className={styles.game_wrapper}>
        <Header />
        <main className={styles.main}>
            <Outlet/>
        </main>
    </section>
  )
}
