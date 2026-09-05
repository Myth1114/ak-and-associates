import Header from "./Header";
import Footer from "./Footer";

const PageShell = ({ children }) => {
  return (
    <div className="page-shell">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default PageShell;
