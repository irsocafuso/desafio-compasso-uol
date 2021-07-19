import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('Deve rendezirar os componentes da Home', () => {
	render(<Home />)

	const searchbarElement = screen.getByTestId("searchbar-1");
	const btnElement = screen.getByTestId("searchbar-button-1");

	expect(searchbarElement).toBeInTheDocument();
	expect(btnElement).toBeInTheDocument();
});