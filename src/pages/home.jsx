import Header from "../components/section/header/Header";
import Layout from "../common/layout";
import Footer from "../components/section/footer/Footer";
import About from "../components/section/about/About";

const HomeV1 = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
