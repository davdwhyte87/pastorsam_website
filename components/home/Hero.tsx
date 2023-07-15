import { FC } from "react";
import Image from "next/image";

import Button from "../Button";
import styles from "@styles/Home.module.css";
import useIsMobile from "hooks/useIsMobile";

const Hero: FC = () => {
  const { hasMounted, isMobile } = useIsMobile();
  return (
    <section className={styles.heroContainer}>
      <header className={styles.hero}>
        <h4 className={styles.heroSmall}>Welcome To Church</h4>
        <h2 className={styles.heroBig}>Sam Agbebakun Ministry</h2>
      </header>
      <div className={styles.heroBottom}>
        <Image
          src={"/assets/jpeg/minister.jpeg"}
          alt={"Preacher image"}
          width={356}
          height={353}
          className={styles.pstImg}
        />
        <Image
          src={"/assets/svg/play.svg"}
          alt={"play icon"}
          width={65}
          height={65}
          className={styles.playImg}
        />
        <div className={styles.bottomContent}>
          <div className={styles.bottomText}>
            <h4>Subscribe to watch Pastor Sam on Youtube</h4>
            <p>
              Listen to life-changing messages from anywhere around the world.
            </p>
          </div>
          <div>
            {hasMounted && (
              <Button
                width={isMobile ? "100%" : "452px"}
                size="24px"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@agbebakunsamuel7237",
                    "_blank"
                  )
                }
              >
                Watch now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
