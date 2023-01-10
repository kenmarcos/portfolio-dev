import { Dispatch, SetStateAction } from "react";

import { ActiveLink } from "components/ActiveLink";
import styles from "components/OffCanvasMenu/offCanvasMenu.module.scss";

interface OffCanvasMenuProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const OffCanvasMenu = (props: OffCanvasMenuProps) => {
  const handleShow = () => {
    props.setShow(false);
  };

  return (
    <div
      className={`${styles.container} animate__animated animate__fadeIn`}
      onClick={handleShow}
    >
      <aside
        className={`${styles.aside} animate__animated animate__fadeInRight`}
      >
        <div className={styles.content}>
          <nav>
            <div>
              <ActiveLink
                href="/"
                activeClassName={styles.active}
                onClick={handleShow}
              >
                Home
              </ActiveLink>
            </div>

            <div>
              <ActiveLink
                href="/projects"
                activeClassName={styles.active}
                onClick={handleShow}
              >
                Projetos
              </ActiveLink>
            </div>

            <div>
              <ActiveLink
                href="/contacts"
                activeClassName={styles.active}
                onClick={handleShow}
              >
                Contatos
              </ActiveLink>
            </div>
          </nav>

          {/* <div>
            <button>Switch</button>
          </div> */}
        </div>
      </aside>
    </div>
  );
};
