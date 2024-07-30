import MainComponent from "./components/MainComponent"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
      <div id="container">
        <Navbar />
        <MainComponent />
        <Footer />
      </div>
    </>
  )
}