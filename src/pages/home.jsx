import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/desktop/Header";
import Layout from "../common/layout";
import Footer from "../components/section/footer/";
import About from "../components/section/about/";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
const HomeV1 = () => {
  const {
    metamaskModal,
    walletModalvisibility
  } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      {metamaskModal && <MetamaskModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />  
      <About /> 
      <Footer />
    </Layout>
  );
};

export default HomeV1;
