import Head from "next/head";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  meta?: ReactNode[];
};
const Title: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Title;
