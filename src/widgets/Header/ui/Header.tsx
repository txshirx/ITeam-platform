import { LogoIcon } from "@/shared/ui/icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/config/router/routes";

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLogo}>
              <LogoIcon />
              <span>Yeahub</span>
            </div>
            <div className={styles.headerNav}>
              <Link to={ROUTES.QUESTIONS}><button>База вопросов</button></Link>
              <Link to={ROUTES.QUIZ.CREATE}><button>Тренажер</button></Link>
            </div>
          </div>

          <div className={styles.headerRight}>
            <button className={styles.headerLogin}>
              Вход
            </button>
            <button
              className={styles.headerRegister}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};