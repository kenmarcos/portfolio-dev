import { Envelope } from "phosphor-react";

import styles from "components/Footer/footer.module.scss";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span>
          {date.getFullYear()} — Desenvolvido por Marcos Kenji Kuribayashi 😉
        </span>

        <span>
          <Envelope size={20} /> marcosken13@gmail.com
        </span>
      </div>
    </footer>
  );
};
