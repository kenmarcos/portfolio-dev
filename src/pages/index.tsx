/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { AnimationOnScroll } from "react-animation-on-scroll";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { gql } from "@apollo/client";
import classNames from "classnames";
import {
  ArrowFatLinesRight,
  Download,
  PresentationChart,
} from "phosphor-react";

import { BackToTopButton } from "components/BackToTopButton";
import { HomeData, Skill, SkillInfo } from "types";
// import { differenceInYears } from "date-fns";
import styles from "styles/home.module.scss";
import { Button } from "components/Button";
import { client } from "lib/apollo";

export interface HomeProps {
  homeData: HomeData;
  skills: Skill[];
}

export default function Home(props: HomeProps) {
  // const [experience, setExperience] = useState(0);

  const [skillInfo, setSkillInfo] = useState<SkillInfo>({
    isForShow: false,
    skill: null,
  });

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 1,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 12 },
  });

  const showSkill = (skill: Skill) => {
    setSkillInfo({
      isForShow: true,
      skill,
    });

    // setExperience(differenceInYears(new Date(), new Date(skill.startDate)));
  };

  const hideSkill = (skill: Skill) => {
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
        <title>MKK - Portfólio</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.intro}>
              <h1>
                {props.homeData.introTitle}{" "}
                <Image
                  src={
                    "https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  }
                  width={38}
                  height={38}
                  alt="Emoji de Saudação"
                />
              </h1>

              <p>{props.homeData.introText}</p>

              <div>
                <Link href="/projects">
                  <Button>
                    <PresentationChart size={25} />
                    Projetos
                  </Button>
                </Link>

                <Link
                  href={props.homeData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="outline">
                    <Download size={25} />
                    Currículo
                  </Button>
                </Link>
              </div>
            </div>

            <figure className={styles.introFigure}>
              <img src={props.homeData.introImg.url} alt="Imagem Principal" />
              <Link href="https://storyset.com/people">
                People illustrations by Storyset
              </Link>
            </figure>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <AnimationOnScroll animateIn="animate__fadeIn">
              <img
                className={styles.aboutImg}
                src={props.homeData.aboutImg.url}
                alt="Foto de Perfil"
              />
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              className={styles.about}
            >
              <h2>Sobre mim</h2>

              <h3>{props.homeData.aboutName}</h3>

              <p>{props.homeData.aboutDescription}</p>
            </AnimationOnScroll>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <div className={styles.skills}>
              <AnimationOnScroll animateIn="animate__fadeInLeft">
                <h2>Habilidades & Conhecimentos</h2>
              </AnimationOnScroll>

              <div className={styles[skillClass]}>
                <h3>{skillInfo.skill ? skillInfo.skill?.name : "null"}</h3>
                {/* <p>
                  Experiência: {experience} - {experience + 1} ano
                  {experience < 1 ? "" : "s"}
                </p> */}
              </div>

              <AnimationOnScroll animateIn="animate__fadeInRight">
                <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
                  {props.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className={`keen-slider__slide ${styles.skillCard}`}
                      onMouseEnter={() => showSkill(skill)}
                    >
                      <img src={skill.icon} alt="" />
                    </div>
                  ))}
                </div>

                <ul className={styles.techs}>
                  {props.skills.map((skill) => (
                    <li
                      key={skill.id}
                      onMouseEnter={() => showSkill(skill)}
                      onMouseLeave={() => hideSkill(skill)}
                      className={styles.skillCard}
                    >
                      <img src={skill.icon} width={80} alt="" />
                    </li>
                  ))}
                </ul>
              </AnimationOnScroll>
            </div>
          </section>

          <hr className={styles.divisor} />

          <section className={styles.section}>
            <AnimationOnScroll
              animateIn="animate__flipInX"
              className={styles.contact}
            >
              <p>
                Quando precisar, entre em contato comigo. Estarei à disposição!
              </p>
              <ArrowFatLinesRight
                className="animate__animated animate__headShake animate__infinite animate__slower	"
                size={80}
              />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__flipInX">
              <Link href="/contacts" className={styles.contactLink}>
                <Button>Entrar em Contato</Button>
              </Link>
            </AnimationOnScroll>
          </section>
        </div>

        <BackToTopButton />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const { data: homeData } = await client.query({
    query: gql`
      query MyQuery {
        home(where: { id: "clcp7p5mc584n0altrc9wcsmf" }) {
          introTitle
          introText
          resumeUrl
          introImg {
            url
          }
          aboutName
          aboutDescription
          aboutImg {
            url
          }
        }
      }
    `,
  });

  const { data: skillData } = await client.query({
    query: gql`
      query MyQuery {
        skills(first: 30) {
          id
          name
          icon
          startDate
        }
      }
    `,
  });

  return {
    props: {
      homeData: homeData.home,
      skills: skillData.skills,
    },
    revalidate: 60 * 60, // a cada 1h
  };
};
