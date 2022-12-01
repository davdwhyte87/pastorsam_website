import { FC } from "react";
import Title from "components/Title";
import MainImg from "components/book/MainImg";
import BooksGrid from "components/book/BooksGrid";

import styles from "@styles/Book.module.css";

const Book: FC = () => {
  return (
    <>
      <Title title="Book" />
      <section className={styles.bookWrapper}>
        <MainImg />
        <BooksGrid />
      </section>
    </>
  );
};

export default Book;
