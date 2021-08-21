import Footer from "../footer/footer";
import Nav from "../nav";
import UiBlocker from "../ui-blocker/ui-blocker";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Nav />
      {children}
      <Footer />
      <UiBlocker />
    </div>
  );
};

export default Layout;
