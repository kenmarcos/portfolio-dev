import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import Head from "next/head";
import Link from "next/link";
import styles from "pages/contacts/contacts.module.scss";
import {
  Envelope,
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  NotePencil,
  PencilSimple,
  User,
} from "phosphor-react";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>MKK - Contatos</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <h1>Enviar E-mail</h1>

          <form action="" className={styles.emailForm}>
            <div>
              <Input
                icon={<User size={25} weight="light" />}
                type="text"
                placeholder="Seu Nome"
              />
            </div>

            <div>
              <Input
                icon={<Envelope size={25} weight="light" />}
                type="text"
                placeholder="Seu E-mail"
              />
            </div>

            <div>
              <Input
                icon={<PencilSimple size={25} weight="light" />}
                type="text"
                placeholder="Assunto"
              />
            </div>

            <div>
              <TextArea
                icon={<NotePencil size={25} weight="light" />}
                placeholder="Mensagem"
              />
            </div>

            <div className={styles.buttonBox}>
              <Button>Enviar</Button>
            </div>
          </form>

          <div className={styles.otherContacts}>
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
