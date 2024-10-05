import About from "./components/About"
import HeroSection from "./sections/HeroSection"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"
import Clients from "./sections/Clients"

const App = () => {
	return (
		<main className="max-w-7xl mx-auto">
			<NavBar />
			<HeroSection />
			<About />
			<Projects />
			<Clients />
		</main>
	)
}

export default App