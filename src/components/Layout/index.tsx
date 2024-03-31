import { inter } from "../../styles/fonts";

import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import { useRouter } from "next/router";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div className={inter.className}>
      <Header />
      <Navbar display={router.pathname !== "/"} text={router.pathname} />
      {children}
      <Footer />
    </div>
  );
}
