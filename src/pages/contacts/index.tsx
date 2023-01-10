import Head from "next/head";
import Link from "next/link";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  Envelope,
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  NotePencil,
  PencilSimple,
  User,
  WhatsappLogo,
} from "phosphor-react";

import styles from "pages/contacts/contacts.module.scss";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { ContactForm } from "types";
import * as yup from "yup";

const wppNumber = 5511942312965;
const message = "Olá!%0aVim aqui através do seu portfólio...";

const Contacts = () => {
  const schema = yup.object().shape({
    contact_name: yup.string().trim().required("*Campo obrigatório"),
    contact_email: yup
      .string()
      .email("*E-mail inválido")
      .trim()
      .required("*Campo obrigatório"),
    subject: yup.string().trim().required("*Campo obrigatório"),
    message: yup.string().trim().required("*Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: yupResolver(schema) });

  const handleSubmitFunction = (data: ContactForm, event: any) => {
    emailjs
      .sendForm(
        "service_ze7q70g",
        "template_yoxa9vi",
        event.target,
        "84hIvebUN5X8bzsrr"
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          toast.error("Ocorreu um erro. Tente novamente, mais tarde.");
        }
      );
  };

  return (
    <>
      <Head>
        <title>MKK - Contatos</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <h1>Enviar E-mail</h1>

          <form
            className={styles.emailForm}
            onSubmit={handleSubmit(handleSubmitFunction)}
          >
            <div>
              <Input
                icon={<User size={25} weight="light" />}
                type="text"
                placeholder="Seu Nome"
                error={errors.contact_name?.message}
                {...register("contact_name")}
              />
            </div>

            <div>
              <Input
                icon={<Envelope size={25} weight="light" />}
                type="text"
                placeholder="Seu E-mail"
                error={errors.contact_email?.message}
                {...register("contact_email")}
              />
            </div>

            <div>
              <Input
                icon={<PencilSimple size={25} weight="light" />}
                type="text"
                placeholder="Assunto"
                error={errors.subject?.message}
                {...register("subject")}
              />
            </div>

            <div>
              <TextArea
                icon={<NotePencil size={25} weight="light" />}
                placeholder="Mensagem"
                error={errors.message?.message}
                {...register("message")}
              />
            </div>

            <div className={styles.buttonBox}>
              <Button type="submit">Enviar</Button>
            </div>
          </form>

          <div className={styles.otherContacts}>
            <Link
              href={`https://wa.me/${wppNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="outline">
                <WhatsappLogo size={32} />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/marcos-kuribayashi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="outline">
                <LinkedinLogo size={32} />
              </Button>
            </Link>

            <Link
              href="https://github.com/kenmarcos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="outline">
                <GithubLogo size={32} />
              </Button>
            </Link>

            <Link
              href="https://gitlab.com/kenmarcos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="outline">
                <GitlabLogo size={32} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacts;
