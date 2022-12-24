import Head from "next/head";
import Link from "next/link";

import { Button } from "components/Button";
import styles from "styles/home.module.scss";
import classNames from "classnames";

import { ArrowFatLinesRight, Download } from "phosphor-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const skills = [
  {
    id: 1,
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 5,
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 6,
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 7,
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 8,
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 9,
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: 10,
    name: "Sass",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    id: 11,
    name: "Redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 12,
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 13,
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: 14,
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 15,
    name: "Django",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
];

interface Skill {
  id: number;
  name: string;
  src: string;
}
interface SkillInfo {
  isForShow: boolean;
  skill: Skill | null;
}

export default function Home() {
  const [skillInfo, setSkillInfo] = useState<SkillInfo>({
    isForShow: false,
    skill: null,
  });

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 1,
      mode: "free",
      slides: { origin: "center", perView: 2.5, spacing: 12 },
    },
    [
      // add plugins here
    ]
  );

  const showSkill = (skill: any) => {
    setSkillInfo({
      isForShow: true,
      skill,
    });
  };

  const hideSkill = (skill: any) => {
    setSkillInfo({
      isForShow: false,
      skill,
    });
  };

  const skillClass = classNames({
    visibleSkill: skillInfo.isForShow,
    invisibleSkill: !skillInfo.isForShow,
  });

  return (
    <>
      <Head>
        <title>MKK - Home</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.intro}>
              <h1>Olá, eu sou o Marcos!</h1>

              <p>
                Seja bem-vindo(a) ao meu portfólio. Aqui você vai conhecer um
                pouco sobre mim, o que eu faço, ver meus projetos e muito mais.
              </p>
              <p>
                Esse site foi feito com muito amor, carinho e dedicação. Espero
                que goste!
              </p>

              <div>
                <Link href="/projetos">
                  <Button>Projetos</Button>
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1dliLFFyLMfrCiAve5SycyjSCGqKCnmfF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="outline">
                    Currículo
                    <Download size={25} />
                  </Button>
                </Link>
              </div>
            </div>

            <figure className={styles.introFigure}>
              <img
                src="/images/web-dev.svg"
                alt="https://storyset.com/people"
              />
              <Link href="https://storyset.com/people">
                People illustrations by Storyset
              </Link>
            </figure>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <img
              className={styles.aboutImg}
              src="/images/profile.png"
              alt="banner"
            />

            <div className={styles.about}>
              <h2>Sobre mim</h2>

              <h3>Marcos Kenji Kuribayashi</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                magnam iste minus doloribus consequuntur ipsum consectetur odio
                earum iusto repellat sed vel et, voluptatum ipsa nemo, harum
                quisquam? Consequuntur, error! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Exercitationem, debitis. Explicabo
                totam omnis fugiat quis voluptatum minima quaerat sequi cum quo
                tempora doloribus, mollitia enim, at fuga vel quibusdam
                exercitationem?
              </p>
            </div>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <div className={styles.skills}>
              <h2>Habilidades & Conhecimentos</h2>

              <h3 className={styles[skillClass]}>
                {skillInfo.skill ? skillInfo.skill?.name : "null"}
              </h3>

              <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`keen-slider__slide ${styles.skillCard}`}
                    onMouseEnter={() => showSkill(skill)}
                  >
                    <img src={skill.src} />
                  </div>
                ))}
              </div>

              <ul className={styles.techs}>
                {skills.map((skill) => (
                  <li
                    key={skill.id}
                    onMouseEnter={() => showSkill(skill)}
                    onMouseLeave={() => hideSkill(skill)}
                    className={styles.skillCard}
                  >
                    <img src={skill.src} width={80} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <div className={styles.contact}>
              <p>
                Quando precisar, entre em contato comigo. Estarei à disposição!
              </p>
              <ArrowFatLinesRight
                className="animate__animated animate__headShake animate__infinite animate__slower	"
                size={80}
              />
            </div>

            <Link href="/contatos" className={styles.contactLink}>
              <Button>Contatos</Button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
