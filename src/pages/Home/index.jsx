import Container from 'react-bootstrap/Container';

import Searchbar from '../../components/Searchbar';

import './home.scss';

function Home() {
	return (
		<Container className="home">
			<h1>GitHub Explorer</h1>
			<Searchbar />
		</Container>
	)
};

export default Home;