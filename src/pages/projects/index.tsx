import { GetStaticProps } from "next";
import Head from "next/head";

import { gql } from "@apollo/client";

import styles from "pages/projects/projects.module.scss";
import { ProjectCard } from "components/ProjectCard";
import { client } from "lib/apollo";
import { Project } from "types";

interface ProjectsProps {
  projects: Project[];
}

const Projects = (props: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>MKK - Meus Projetos</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.projects}>
          <h1>Meus Projetos</h1>

          <div className={styles.projectGrid}>
            {props.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        projects {
          id
          name
          thumbnail {
            url
          }
          description
          mainDescription
          projectUrl
          repoUrl
          tools
        }
      }
    `,
  });

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 60 * 60, // a cada 1h
  };
};

export default Projects;
