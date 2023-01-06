import { Button } from "components/Button";
import styles from "components/ProjectCard/projectCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "components/ProjectModal";

interface ProjectCardProps {
  project: {
    name: string;
    image: string;
    description: string;
    mainDescription: string;
    tools: string[];
    projectUrl: string;
    repoUrl: string;
  };
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h2>{props.project.name}</h2>

        <Image
          priority
          src={props.project.image}
          alt="project"
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
