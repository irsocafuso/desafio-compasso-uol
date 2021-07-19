import { useState } from 'react';

import { useHistory } from 'react-router-dom';


import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './searchbar.scss';

function Searchbar() {
	const history = useHistory();

	const [user,setUser] = useState('');

	function searchUser() {
		history.push('/' + user);
	}

	return (
		<Form className="searchbar" data-testid="searchbar-1">
			<InputGroup size="lg">
				<FormControl
					placeholder="Digite o usuário..."
					onChange={event => setUser(event.target.value)}
					value={user}
				/>
				<Button 
					variant="secondary"
					type="submit"
					onClick={searchUser}
					data-testid="searchbar-button-1"
				>
					<FontAwesomeIcon icon={faSearch} />
				</Button>
			</InputGroup>
		</Form>
	)
};

export default Searchbar;