import About from '../static_site_components/About';
import AllInOne from '../static_site_components/AllInOne';
// import Footer from './components/Footer';
import Hero from '../static_site_components/Hero';
import Navbar from '../static_site_components/Navbar'
import Support from '../static_site_components/Support'

function StaticSite() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      {/* <Footer /> */}
    </>
  );
}

export default StaticSite;
