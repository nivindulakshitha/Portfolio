import { useState } from "react"

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space">
					<a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
						Nivindu
					</a>

					<button>
						<img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu-icon" className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	)
}

export default NavBar