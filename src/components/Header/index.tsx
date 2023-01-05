import Image from "next/image";
import Link from "next/link";

import styles from "components/Header/header.module.scss";
import logo from "../../../public/images/logo.png";
import { ActiveLink } from "components/ActiveLink";
import { OffCanvasMenu } from "components/OffCanvasMenu";
import { useRef, useState } from "react";
import Hamburger from "hamburger-react";

export const Header = () => {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(false);
  const [imageClasses, setImageClasses] = useState("d-none");

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

            <button>Switch</button>
          </div>
        </div>
      </header>

      {/* <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={500}
        classNames={{
          enterActive: "animate__bounceIn",
          exitActive: "animate__bounceOut",
        }}
        className={`animate__animated my-4 ${imageClasses}`}
        onEnter={() => setShow(true)}
        onExited={() => setShow(false)}
      >
        <OffCanvasMenu setShow={setShow} />
      </CSSTransition> */}

      {!!show && <OffCanvasMenu setShow={setShow} />}
    </>
  );
};
