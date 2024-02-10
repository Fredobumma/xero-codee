import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AOS from "aos";

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
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";

AOS.init(); // Initialize animate on scroll

// add translations
const translationsEn = {
	home: "Home",
	aboutUs: "About Us",
	services: "Services",
	contactUs: "Contact Us",
};
const translationsGe = {
	home: "Heim",
	aboutUs: "über Uns",
	services: "Service",
	contactUs: "Kontakt Uns",
};
const translationsFr = {
	home: "Maison",
	aboutUs: "À propos",
	services: "Service",
	contactUs: "Contactez",
};
const translationsEs = {
	home: "Hogar",
	aboutUs: "Acerca De",
	services: "Servicios",
	contactUs: "Contacto",
};

// initialize translation
i18n
	.use(initReactI18next) // passes i18n down to react-i18next using the middleware
	.init({
		resources: {
			en: { translation: translationsEn },
			ge: { translation: translationsGe },
			fr: { translation: translationsFr },
			es: { translation: translationsEs },
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: { escapeValue: false },
	});

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
// App landing page component
