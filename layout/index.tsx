import Header from "./Header";
import { PropsWithChildren } from "react";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
