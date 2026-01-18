import ShowcaseSection from "./sections/ShowcaseSection"
import Updiv from "./sections/Updiv"
import NavBar from "./components/navBar"
import LogoSections from "./sections/LogoSections"
import FeatureCards from "./sections/FeatureCards"
import ExperianceSection from "./sections/ExperianceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
const App = () => {
  return (
   <>
   <NavBar/>
   <Updiv />
   <ShowcaseSection/>
   <LogoSections/>
   <FeatureCards/>
   <ExperianceSection/>
   <TechStack/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App