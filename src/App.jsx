import About from "./components/About"
import HeroSection from "./sections/HeroSection"
import NavBar from "./sections/NavBar"
import Projects from "./sections/Projects"

const App = () => {
	return (
		<main className="max-w-7xl mx-auto">
			<NavBar />
			<HeroSection />
			<About />
			<Projects />
		</main>
	)
}

export default App