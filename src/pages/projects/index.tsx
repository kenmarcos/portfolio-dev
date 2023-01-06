import { ProjectCard } from "components/ProjectCard";
import Head from "next/head";

import styles from "pages/projects/projects.module.scss";

const projects = [
  {
    id: 1,
    name: "Clinitic",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "Aplicação digital de agendamentos para profissionais da saúde.",
    mainDescription:
      "Clinitic é uma aplicação de saúde digital de agendamentos para profissionais da saúde. Com a função de agendamento, o profissional terá sempre uma visão geral de sua agenda e saberá quanto tempo precisa para estar com um paciente. Com a Clinitic, é mais fácil administrar os atendimentos mensais e semanais, tornando a gestão de tempo mais clara, organizada e profissional.",
    tools: [
      "React.js",
      "Context API",
      "TypeScript",
      "Styled Components",
      "React Router DOM",
    ],
    projectUrl: "https://clinitic-web.vercel.app/",
    repoUrl: "https://github.com/kenmarcos/clinitic-web",
  },
  {
    id: 2,
    name: "iCash",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    description:
      "Marketplace onde as lojas oferecem parte do dinheiro gasto nas compras em forma de cashback.",
    mainDescription:
      "iCash é um marketplace, onde lojistas oferecem cashback para atrair e fidelizar clientes, que então, podem utilizar o cashback acumulado para realizar pagamentos de compras em toda a rede de lojas cadastradas na plataforma.",
    tools: [
      "React.js",
      "Context API",
      "TypeScript",
      "Styled Components",
      "React Router DOM",
      "JSON Server Auth",
    ],
    projectUrl: "https://icash-project.vercel.app/",
    repoUrl: "https://gitlab.com/kenmarcos/icash",
  },
  {
    id: 3,
    name: "Habitus",
    image:
      "https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Plataforma de gestão de hábitos.",
    mainDescription:
      "Habitus é uma plataforma de gestão de hábitos. Seu objetivo é fazer com que o usuário possa administrar seus hábitos, além de participar de grupos com outros participantes que compartilham hábitos e metas semelhantes.",
    tools: [
      "React.js",
      "Context API",
      "JavaScript",
      "Styled Components",
      "React Router DOM",
    ],
    projectUrl: "https://habitus-front.vercel.app/",
    repoUrl: "https://gitlab.com/kenmarcos/habitus",
  },
  {
    id: 4,
    name: "Drinks Events",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
    description: "Aplicativo para auxiliar a administração de eventos.",
    mainDescription:
      "Este projeto consiste em uma plataforma para auxiliar a administração de eventos. Seu objetivo é facilitar a organização das bebidas de diferentes eventos, de maneira que o usuário pode selecionar as bebidas desejadas, bem como, verificar a lista de bebidas de cada evento.",
    tools: [
      "React.js",
      "Context API",
      "JavaScript",
      "Styled Components",
      "React Router DOM",
      "Material UI",
    ],
    projectUrl: "https://drinks-events-alpha.vercel.app/",
    repoUrl: "https://gitlab.com/kenmarcos/drinks-events",
  },
  {
    id: 5,
    name: "Board",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
    description:
      "Aplicação de gerenciamento de tarefas com o objetivo de tornar o dia a dia mais fácil e eficaz.",
    mainDescription:
      "Board é uma aplicação básica de gerenciamento de tarefas com o objetivo de tornar o dia a dia mais fácil e eficaz. Com ele é possível planejar compromissos, reuniões, eventos e tarefas diárias de maneira descomplicada, gratuita e online. Com uma interface simples e intuitiva, Board organiza todas as tarefas, garantindo que nada de importante seja esquecido!",
    tools: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Sass",
      "Firebase",
      "NextAuth",
    ],
    projectUrl: "https://board-web.vercel.app/",
    repoUrl: "https://github.com/kenmarcos/board-web",
  },
  {
    id: 6,
    name: "Deliciar",
    image:
      "https://images.unsplash.com/photo-1671725778785-03aa4fc16ab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Livro de receitas culinárias digital.",
    mainDescription: "Em breve...",
    tools: ["Nexts.js", "React.js", "TypeScript", "Tailwind CSS", "Firebase"],
    projectUrl: "",
    repoUrl: "",
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
