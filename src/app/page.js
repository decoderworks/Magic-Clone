import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Animation from "./components/Animation"
import Player from "./components/Player"
import Company from "./components/Company"
import Benefit from "./components/Benefit"
import DetailCard from "./components/DetailCard"
import AnotherHero from "./components/AnotherHero"
import MagicThree from "./components/MagicThree"
import Services from "./components/Services"
import ClientsTwo from "./components/ClientsTwo"
import AlternatingContentDiv from "./components/AlternatingContentDiv"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Hero />
      <Animation />
      <Player />
      <Company />
      <Benefit />
      <DetailCard />
      <AnotherHero />
      <MagicThree />
      <Services />
      <ClientsTwo />
      <AlternatingContentDiv />
      <Blog />
      <Footer />
    </main>
  )
}
