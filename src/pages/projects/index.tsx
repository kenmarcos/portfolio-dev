import { gql } from "@apollo/client";
import { ProjectCard } from "components/ProjectCard";
import { client } from "lib/apollo";
import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "pages/projects/projects.module.scss";

interface Project {
  id: string;
  name: string;
  thumbnail: {
    url: string;
  };
  description: string;
  mainDescription: string;
  tools: string[];
  projectUrl: string;
  repoUrl: string;
}

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
  };
};

export default Projects;
