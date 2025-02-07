import "./App.css";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Getintouch from "./components/Getintouch";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sisyphus from "./components/sisyphus";

function App() {
  return (
    <>
      <div className="center-container">
        <Navbar />
        <Hero />
        <hr />
        <Features />
        <Sisyphus />
        <Faq />
        <Getintouch />
        <hr />
        <Blog />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default App;
