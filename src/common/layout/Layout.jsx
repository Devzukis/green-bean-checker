import { Helmet } from "react-helmet";
import favIcon from "../../assets/images/fav_icon.ico";
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        {/* meta tag*/}
        <meta charset="utf-8" />
        <title> Devzukis - Green Bean Checker</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" type="image/x-icon" href={favIcon} />
        {/* responsive tag */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">{children}</div>
    </>
  );
};

export default Layout;
