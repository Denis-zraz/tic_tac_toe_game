import styles from './Main.module.scss';
import image from '../../assets/image.jpeg'
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/path';

export default function Main() {
  return (
    <section className={styles.welcome_content}>
        <h1 className={styles.welcome_content_title}> Добро пожаловать в игру "крестики-нолики"</h1>
        <div className={styles.welcome_content_box}>
          <img src={image} alt="Какая-то картинка" className={styles.welcome_content_img} />
        </div>
        <button className={styles.welcome_content_btn}>
          <Link to={LOGIN} className={styles.welcome_content_link}>Погнали поиграем?</Link>
        </button>
    </section>
  )
}
