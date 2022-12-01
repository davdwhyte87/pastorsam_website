import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "../Button";
import useIsMobile from "hooks/useIsMobile";
import styles from "@styles/Home.module.css";

const Donate: FC = () => {
  const router = useRouter();
  const { hasMounted, isMobile } = useIsMobile();
  return (
    <section className={styles.donateWrapper}>
      <div className={styles.donateTop}>
        <h2>Donate</h2>
        <div>
          <p>
            Partner with us today. Help spread the gospel by giving{" "}
            <br className="show" /> to Sam Agbebakun Ministry.
          </p>
          {hasMounted && (
            <Button
              width={isMobile ? "100%" : "452px"}
              height="57px"
              size="24px"
              onClick={() => router.replace("/donate")}
            >
              Donate
            </Button>
          )}
        </div>
      </div>
      <div className={styles.donateBottom}>
        <h1>Connect with us on social media.</h1>
        <div className={styles.donateSocial}>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.youtube.com/@agbebakunsamuel7237"}
          >
            <Image
              src={"/assets/svg/you-b.svg"}
              width={80}
              height={80}
              alt={"youtube icon"}
            />
            <p>YouTube @christ the Rock</p>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={
              "https://www.instagram.com/invites/contact/?i=5pdu7thwh4fg&utm_content=ls1e5xw"
            }
          >
            <Image
              src={"/assets/svg/ig_2.svg"}
              width={80}
              height={80}
              alt={"instagram icon"}
            />
            <p>@agbebakunsamuel</p>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.facebook.com/agbebakun.samuel?mibextid=ZbWKwL"}
          >
            <Image
              src={"/assets/svg/fb-b.svg"}
              width={80}
              height={80}
              alt={"facebook icon"}
            />
            <p>Facebook @pastor sam</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donate;
