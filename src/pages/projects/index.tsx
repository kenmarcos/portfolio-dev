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
    description:
      "Aplicação digital de agendamentos para profissionais da saúde.",
  },
  {
    id: 2,
    name: "iCash",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    description:
      "Marketplace onde as lojas oferecem parte do dinheiro gasto nas compras em forma de cashback.",
  },
  {
    id: 3,
    name: "Habitus",
    image:
      "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Plataforma de gestão de hábitos.",
  },
  {
    id: 4,
    name: "Drinks Events",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
    description: "Aplicativo para auxiliar a administração de eventos.",
  },
  {
    id: 5,
    name: "Board",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
    description:
      "Aplicação básica de gerenciamento de tarefas com o objetivo de tornar o dia a dia mais fácil e eficaz.",
  },
  {
    id: 6,
    name: "Deliciar",
    image:
      "https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Livro de receitas culinárias digital.",
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
