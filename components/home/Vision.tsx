import React from "react";
import Image from "next/image";

import styles from "@styles/Home.module.css";

const Vision = (): JSX.Element => {
  return (
    <section className={styles.visionSection}>
      <article className={styles.vision}>
        <div className={styles.flex}>
          <Image
            src={"/assets/svg/vision.svg"}
            alt={"hand holding bible"}
            width={540}
            height={460}
            className={styles.img}
          />
        </div>
        <div className={styles.articleRight}>
          <h4>Our Vision</h4>
          <p>
            To preach the gospel of the lord Jesus christ{" "}
            <br className="show" /> to the ends of the earth to{" "}
            <br className="show" /> depopulate hell, by winning souls into{" "}
            <br className="show" /> God&apos;s kingdom.
          </p>
        </div>
      </article>
      <article className={styles.mission}>
        <div className={styles.flex}>
          <Image
            src={"/assets/svg/mission.svg"}
            alt={"hand raised to heaven"}
            width={540}
            height={460}
            className={styles.img}
          />
        </div>
        <div className={styles.articleRight}>
          <h4>Our Mission</h4>
          <p>
            Called and sent to preach DOMINION to <br className="show" /> the
            preserved, and to RESTORE them to <br className="show" /> their
            Divine position by the word of God.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Vision;
