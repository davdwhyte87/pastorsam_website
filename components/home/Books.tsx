import { FC } from "react";
import Carousel from "../Carousel";
import styles from "@styles/Home.module.css";

const paths = [
  {
    path: "/assets/jpeg/book1.jpeg",
    url: "#",
  },
];

const Books: FC = () => {
  return (
    <section className={styles.bookWrapper}>
      <div>
        <h1 className={styles.bookHeading}>Books</h1>
        <p className={styles.bookParag}>
          Get blessed by the books Pastor Sam has written
        </p>
      </div>
      <div style={{ padding: "20px 30px" }}>
        <Carousel images={paths} />
      </div>
    </section>
  );
};

export default Books;
