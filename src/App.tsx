import { Header } from './components/Header';
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
			</main>
		</>
	);
}

export default App;
