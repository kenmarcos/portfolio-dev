import { Button } from "components/Button";
import styles from "components/ProjectCard/projectCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "components/ProjectModal";
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
