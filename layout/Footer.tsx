import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@styles/component/Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Image
          src={"/assets/png/logo.png"}
          width={200}
          height={200}
          alt={"church logo"}
          className={styles.img}
        />
        <div className={styles.topLinkContainer}>
          <div className={styles.topLink}>
            <Image
              src={"/assets/svg/mail.svg"}
              alt={"email icon"}
              width={53.33}
              height={42.67}
            />
            <p>Email: Samuelidowuagbebakun@gmail.com</p>
          </div>
          <div className={styles.topLink}>
            <Image
              src={"/assets/svg/phone.svg"}
              alt={"call icon"}
              width={48}
              height={48}
            />
            <p>Phone number: 08069639461</p>
          </div>
          <div className={styles.topLink}>
            <Image
              src={"/assets/svg/location.svg"}
              alt={"address marker icon"}
              width={47.33}
              height={63.33}
            />
            <p>
              Address : Rosd 6 house1 ogo-oluwa housing estate APETE ibadan
              Nigeria
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.youtube.com/@agbebakunsamuel7237"}
        >
          <Image
            src={"/assets/svg/youtube.svg"}
            alt={"youtube icon"}
            width={40}
            height={40}
          />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={
            "https://www.instagram.com/invites/contact/?i=5pdu7thwh4fg&utm_content=ls1e5xw"
          }
        >
          <Image
            src={"/assets/svg/ig.svg"}
            alt={"instagram icon"}
            width={40}
            height={40}
          />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.facebook.com/agbebakun.samuel?mibextid=ZbWKwL"}
        >
          <Image
            src={"/assets/svg/fb.svg"}
            alt={"facebook icon"}
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
