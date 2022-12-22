import Image from "next/image";
import Link from "next/link";

import styles from "components/Header/styles.module.scss";
import logo from "../../../public/images/logo.svg";
import { List } from "phosphor-react";
import ActiveLink from "components/ActiveLink";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <Image src={logo} alt="imagem do logo" />
        </Link>

        <div className={styles.burgerMenu}>
          <List size={48} color="#fff" />
        </div>

        <div className={styles.navBar}>
          <nav>
            <ActiveLink href="/" activeClassName={styles.active}>
              Home
            </ActiveLink>
            <ActiveLink href="/projetos" activeClassName={styles.active}>
              Projetos
            </ActiveLink>
            <ActiveLink href="/contatos" activeClassName={styles.active}>
              Contatos
            </ActiveLink>
          </nav>

          <button>Switch</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
