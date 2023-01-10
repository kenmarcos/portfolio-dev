import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Hamburger from "hamburger-react";

import styles from "components/Header/header.module.scss";
import { OffCanvasMenu } from "components/OffCanvasMenu";
import logo from "../../../public/images/logo.png";
import { ActiveLink } from "components/ActiveLink";

export const Header = () => {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.content}>
          <Link href="/">
            <Image src={logo} alt="imagem do logo" priority />
          </Link>

          <button className={styles.burgerMenu} onClick={() => setShow(!show)}>
            <Hamburger toggled={show} toggle={setShow} color="#afafaf" />
          </button>

          <div className={styles.navBar}>
            <nav>
              <ActiveLink href="/" activeClassName={styles.active}>
                Home
              </ActiveLink>
              <ActiveLink href="/projects" activeClassName={styles.active}>
                Projetos
              </ActiveLink>
              <ActiveLink href="/contacts" activeClassName={styles.active}>
                Contatos
              </ActiveLink>
            </nav>

            {/* <button>Switch</button> */}
          </div>
        </div>
      </header>

      {!!show && <OffCanvasMenu setShow={setShow} />}
    </>
  );
};
