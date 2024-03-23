// import styles from "./page.module.css"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Menu from "./components/menu/menu"
import Gallery from "./components/gallery/gallery"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
