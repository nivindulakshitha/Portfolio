import HeroSection from "./sections/HeroSection"
import NavBar from "./sections/NavBar"

const App = () => {
	return (
		<main className="max-w-7xl mx-auto">
			<NavBar />
			<HeroSection />
		</main>
	)
}

export default App