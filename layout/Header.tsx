import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";

import styles from "@styles/component/Header.module.css";
import Button from "components/Button";

const Header: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            src={"/assets/png/logo.png"}
            alt="Logo"
            width={60}
            height={60}
          />
        </div>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"about"}>About us</Link>
          <Link href={"book"}>Books</Link>
          <Link href={"donate"}>
            <Button>Donate</Button>
          </Link>
        </div>
        <Image
          className={styles.menu}
          src={"/assets/png/menu.png"}
          alt="menu icon"
          width={50}
          height={50}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={styles.moblinks}
          style={{
            visibility: toggle ? "visible" : "hidden",
          }}
        >
          <Link onClick={() => setToggle(false)} href={"/"}>
            Home
          </Link>
          <Link onClick={() => setToggle(false)} href={"about"}>
            About us
          </Link>
          <Link onClick={() => setToggle(false)} href={"book"}>
            Books
          </Link>
          <Link onClick={() => setToggle(false)} href={"donate"}>
            <Button width="100%">Donate</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
