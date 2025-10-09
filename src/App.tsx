import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Profile } from './sections/Profile';
import { Projects } from './sections/Projects';

function App() {
	return (
		<>
			<Header />

			<main>
				<Hero />
				<Profile />
				<Projects />
			</main>
		</>
	);
}

export default App;
