import { FC } from "react";
import Title from "components/Title";
import styles from "@styles/Donate.module.css";

const Donate: FC = () => {
  return (
    <>
      <Title title="Donate" />
      <section className={styles.donateWrapper}>
        <div className={styles.donateBody}>
          <div className={styles.donateCard}>
            <h1 style={{ color: "#201919" }}>0042002068</h1>
            <p>Access Bank</p>
            <p>samuel Agbebakun idowu</p>
          </div>
          <h1 style={{ margin: 0 }}>
            Thank You For your <br className="show" /> Contribution to the
            ministry.
          </h1>
        </div>
      </section>
    </>
  );
};

export default Donate;
