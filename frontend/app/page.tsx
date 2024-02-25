import styles from "./page.module.css"
import Header from "./components/header/header"
import Hero from "./components/hero/hero"
import About from "./components/about/about"
import Menu from "./components/menu/menu"
import Gallery from "./components/gallery/gallery"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <div>
      <div id="header">
        <Header></Header>
      </div>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="menu">
        <Menu></Menu>
      </div>
      <div id="gallery">
        <Gallery></Gallery>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
      <div id="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
