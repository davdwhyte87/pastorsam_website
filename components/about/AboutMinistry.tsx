import { FC } from "react";
import Image from "next/image";

import styles from "@styles/About.module.css";

const AboutMinistry: FC = () => {
  return (
    <section className={styles.aboutMain}>
      <article>
        <h1>
          About Sam Agbebakun <br className="show" /> Ministry
        </h1>
        <p>
          To preach the gospel of the lord Jesus <br className="show" /> christ
          to the ends of the earth to depopulate <br className="show" /> hell,
          by winning souls into God&apos;s kingdom. <br className="show" />
          To preach the gospel of the lord Jesus christ <br className="show" />{" "}
          to the ends of the earth <br className="show" />
          to depopulate hell, by winning souls into God&apos;s kingdom.
        </p>
      </article>
      <article className={styles.pstImg}>
        <Image
          src={"/assets/svg/round.svg"}
          alt="pastor standing"
          width={603}
          height={757}
          className={styles.img}
        />
        <div className={styles.mainImg}>
          <Image
            src={"/assets/svg/pastor.svg"}
            alt="pastor standing"
            width={603}
            height={757}
            className={styles.img}
          />
        </div>
      </article>
    </section>
  );
};

export default AboutMinistry;
