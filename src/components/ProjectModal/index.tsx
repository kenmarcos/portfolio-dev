import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { X } from "phosphor-react";

import styles from "components/ProjectModal/projectModal.module.scss";
import { Button } from "components/Button";
import { Project } from "types";

interface ProjectModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: Project;
}

export const ProjectModal = (props: ProjectModalProps) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      className={styles.dialog}
    >
      <div className={styles.backdrop}>
        <Dialog.Panel className={styles.panel}>
          <Dialog.Title>{props.project.name}</Dialog.Title>
          <button
            onClick={() => props.setIsOpen(false)}
            className={styles.closeBtn}
          >
            <X size={35} />
          </button>

          <div className={styles.bodyContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={props.project.thumbnail.url}
                alt={`Imagem ${props.project.name}`}
                width={600}
                height={500}
                priority
              />
            </div>

            <div className={styles.descriptionContainer}>
              <p>{props.project.mainDescription}</p>

              <h3>Principais Tecnologias:</h3>
              <ul>
                {props.project.tools?.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <a
              href={props.project.projectUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button>Acessar Projeto</Button>
            </a>

            <Link
              href={props.project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button className="outline">Acessar Repositório</Button>
            </Link>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
