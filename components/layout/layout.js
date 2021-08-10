import Footer from "../footer/footer";
import Nav from "../nav";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
