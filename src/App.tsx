import "./App.css";
import {
	CallToAction,
	ChooseUs,
	Crew,
	Empowering,
	Footer,
	Hero,
	NavBar,
	Sponsors,
	Teams,
	Testimonials,
} from "./sections";

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<Teams />
			<Empowering />
			<Sponsors />
			<Testimonials />
			<ChooseUs />
			<Crew />
			<CallToAction />
			<Footer />
		</>
	);
}

export default App;
