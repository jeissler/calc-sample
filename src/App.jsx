import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import LifeCalculator from './components/LifeCalculator'
import Footer from './components/Footer'
import Promo from './components/Promo'

export default function App() {
	return (
		<Router>
			<div>
				<Header />
				<Hero />
				<main>
					<Routes>
						<Route path="/" element={<Intro />} />
						<Route
							path="/calc"
							element={
								<>
									<LifeCalculator />
									<Promo />
								</>
							}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	)
}
