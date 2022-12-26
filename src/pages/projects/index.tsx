import Head from "next/head";

import styles from "pages/projects/projects.module.scss";

const Projects = () => {
  return (
    <>
      <Head>
        <title>MKK - Meus Projetos</title>
      </Head>

      <main className={styles.container}>
        <h1>Projetos</h1>
      </main>
    </>
  );
};

export default Projects;
