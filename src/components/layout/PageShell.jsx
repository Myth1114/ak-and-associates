import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const PageShell = ({ children }) => {
  return (
    <div className="page-shell">
      <Header />

      <main>{children}</main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageShell;
