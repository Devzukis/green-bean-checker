import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Footer from "../components/section/footer/v1";
import About from "../components/section/about/v2";
import MetamaskModal from "../common/modal/metamaskModal/MetamaskModal";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
const HomeV1 = () => {
  const {
    visibility,
    metamaskModal,
    walletModalvisibility
  } = useModal();
  return (
    <Layout>
      <GlobalStyles />
      {metamaskModal && <MetamaskModal />}
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      <Header />  
      <About /> 
      <Footer />
    </Layout>
  );
};

export default HomeV1;
