import Header from "../components/section/header/Header";
import Layout from "../common/layout";
import Footer from "../components/section/footer/Footer";
import About from "../components/section/about/About";
import { Analytics } from '@vercel/analytics/react';

const HomeV1 = () => {
  return (
    <>
    <Layout>
      <Header />
      <About />
      <Footer />
    </Layout>
    <Analytics/>
    </>
  );
};

export default HomeV1;
