import { Button } from "components/Button";
import Head from "next/head";
import Image from "next/image";

import styles from "pages/projects/projects.module.scss";

const projects = [
  {
    id: 1,
    name: "Clinitic",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Isso é uma descrição de teste sobre os projeto.",
  },
  {
    id: 2,
    name: "iCash",
    image: "https://picsum.photos/300/200",
    description: "Isso é uma descrição de teste sobre os projeto.",
  },
  {
    id: 3,
    name: "Habitus",
    image: "https://picsum.photos/300/200",

    description: "Isso é uma descrição de teste sobre os projeto.",
  },
  {
    id: 4,
    name: "Drinks Events",
    image: "https://picsum.photos/300/200",
    description: "Isso é uma descrição de teste sobre os projeto.",
  },
  {
    id: 5,
    name: "Board",
    image: "https://picsum.photos/300/200",
    description: "Isso é uma descrição de teste sobre os projeto.",
  },
  {
    id: 6,
    name: "Deliciar",
    image: "https://picsum.photos/300/200",
    description: "Isso é uma descrição de teste sobre os projeto.",
  },
];

const Projects = () => {
  return (
    <>
      <Head>
        <title>MKK - Meus Projetos</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.projects}>
          <h1>Meus Projetos</h1>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <h2>{project.name}</h2>

                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                />
                <div>
                  <p>{project.description}</p>
                  <Button>Detalhes</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
