import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/desktop/Header";
import Layout from "../common/layout";
import Footer from "../components/section/footer/Footer";
import About from "../components/section/about/About";
import { Analytics } from '@vercel/analytics/react';

const HomeV1 = () => {
  return (
    <>
    <Layout>
      <GlobalStyles />
      <Header />  
      <About /> 
      <Footer />
    </Layout>
    <Analytics/>
    </>
  );
};

export default HomeV1;
