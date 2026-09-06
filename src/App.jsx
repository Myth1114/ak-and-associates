import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageShell from "./components/layout/PageShell";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Industries from "./pages/Industries/Industries";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
};

export default App;
