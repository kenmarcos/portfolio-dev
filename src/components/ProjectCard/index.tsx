import { useState } from "react";
import Image from "next/image";

import styles from "components/ProjectCard/projectCard.module.scss";
import { ProjectModal } from "components/ProjectModal";
import { Button } from "components/Button";
import { Project } from "types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h2>{props.project.name}</h2>

        <Image
          priority
          src={props.project.thumbnail.url}
          alt={`Imagem ${props.project.name}`}
          width={300}
          height={200}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMvAYAAX4BKd5Md4EAAAAASUVORK5CYII="
        />
        <div>
          <p>{props.project.description}</p>
          <Button onClick={() => setIsOpen(true)}>Detalhes</Button>
        </div>
      </div>

      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        project={props.project}
      />
    </>
  );
};
