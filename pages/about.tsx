import { FC } from "react";

import Title from "components/Title";
import MainImg from "components/about/MainImg";
import AboutMinistry from "components/about/AboutMinistry";
import styles from "@styles/About.module.css";

const About: FC = () => {
  return (
    <>
      <Title title="About" />
      <section className={styles.aboutContainer}>
        <MainImg />
        <AboutMinistry />
      </section>
    </>
  );
};

export default About;
