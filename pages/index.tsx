import Title from "components/Title";
import Hero from "components/home/Hero";
import Books from "components/home/Books";
import Donate from "components/home/Donate";
import Vision from "components/home/Vision";
import Ministry from "components/home/Ministry";

export default function Home(): JSX.Element {
  return (
    <>
      <Title title="Home" />
      <Hero />
      <Vision />
      <Ministry />
      <Books />
      <Donate />
    </>
  );
}
