import { FC } from "react";
import Image from "next/image";

import styles from "@styles/Book.module.css";

const data = [
  {
    path: "/assets/jpeg/book1.jpeg",
    title: "Soaring in Dominion",
    price: "$89.00",
  },
];

const BooksGrid: FC = () => {
  return (
    <section className={styles.gridWrapper}>
      <h1>Books by Pastor Sam</h1>
      <p>Get blessed by the books Pastor Sam has written</p>
      <div className={styles.gridBody}>
        {data?.map((val, i) => (
          <div className={styles.gridItem} key={i}>
            <Image
              src={val?.path}
              alt={"pastor books"}
              width={282}
              height={363}
            />
            <p>Title: {val.title}</p>
            <p>{val.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksGrid;
