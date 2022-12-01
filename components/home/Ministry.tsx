import React from "react";
import Image from "next/image";

import styles from "@styles/Home.module.css";

const Ministry = (): JSX.Element => {
  return (
    <section className={styles.minstryWrapper}>
      <div className={styles.ministryContainer}>
        <div className={styles.ministryHeading}>
          <h1 className={styles.ministryHeadingText}>Our Ministries</h1>
          <p className={styles.ministryHeadingParag}>
            Listen to life-changing messages from anywhere around the world.
          </p>
        </div>
        <div className={styles.ministryBodyWrapper}>
          <article className={styles.ministryBody_1}>
            <Image
              src={"/assets/svg/mix.svg"}
              width={645}
              height={650}
              alt="pst preaching"
              className={styles.img}
            />
            <div>
              <h1 className={styles.ministryHeadingText}>Harvest crusader</h1>
              <p className={styles.ministryHeadingParag}>
                Harvest crusader is the outreach arm of <br className="show" />{" "}
                sam Agbebakun ministries with the mandate to reach the unreached
                places, kings, and kingdoms, rooting out Alters and Restoring
                dominion, peace, and liberty to lands, and families through the
                gospel.
              </p>
            </div>
          </article>
          <article className={styles.ministryBody_2}>
            <Image
              src={"/assets/svg/kids.svg"}
              width={645}
              height={650}
              alt="children happy"
              className={styles.img}
            />
            <div style={{ width: "100%" }}>
              <h1 className={styles.ministryHeadingText}>
                Africa intervention <br className="show" /> mission
              </h1>
              <p className={styles.ministryHeadingParag}>
                Africa intervention mission is a mission to African nations with
                the mandate to intervene in Africa&apos;s challenges{" "}
                <br className="show" /> such as education, welfare,{" "}
                <br className="show" /> and medical intervention through the{" "}
                <br className="show" /> gospel.
              </p>
            </div>
          </article>
          <article className={styles.ministryBody_3}>
            <Image
              src={"/assets/svg/altar.svg"}
              width={645}
              height={650}
              alt="pst at the altar preaching"
              className={styles.img}
            />
            <div>
              <h1 className={styles.ministryHeadingText}>Jesus the ROCK</h1>
              <p className={styles.ministryHeadingParag}>
                Jesus the ROCK is the church <br className="show" /> arm of the
                ministry which caters to the salvation, and restoration of men
                through sound teachings, moral development, and taking oversight
                of their spiritual maturity to become christ ambassadors in the
                world.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Ministry;
