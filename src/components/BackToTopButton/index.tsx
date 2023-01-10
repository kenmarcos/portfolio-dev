import { ArrowUp } from "phosphor-react";

import styles from "components/BackToTopButton/backToTopButton.module.scss";

export const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.container} onClick={scrollToTop}>
      <ArrowUp size={30} />
    </button>
  );
};
