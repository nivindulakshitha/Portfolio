import About from "./components/About"
import HeroSection from "./sections/HeroSection"
import NavBar from "./sections/NavBar"

const App = () => {
	return (
		<main className="max-w-7xl mx-auto">
			<NavBar />
			<HeroSection />
			<About />
		</main>
	)
}

export default App