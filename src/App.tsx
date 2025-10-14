import { Header } from './components/Header';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Profile } from './sections/Profile';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />
				<Profile />
				<Projects />
				<Skills />
				<Contact />
			</main>
		</>
	);
}

export default App;
