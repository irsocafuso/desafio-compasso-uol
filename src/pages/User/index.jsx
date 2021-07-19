import { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import UserInfo from '../../components/UserInfo'
import UserButton from '../../components/UserButton'
import UserRepositories from '../../components/UserRepositories';

import api from '../../services/api'

import './user.scss'

function User() {
	const history = useHistory();

	const [loading, setLoading] = useState(true);
	const [info, setInfo] = useState({});
	const [repos, setRepos] = useState([]);
	const [type, setType] = useState('');

	const { user } = useParams();

	useEffect(() => {
		if (user) {
			api.get(`/${user}`)
			.then(result => {
				setLoading(false);
				setInfo(result.data);
			})
			.catch(error => {
				history.push('/');
			})
		}
	}, [user, history])

	function getRepos() {
		api.get(`/${user}/repos`).then(result => {
			setType('Repositório');
			setRepos(result.data);
		})
	}

	function getStarred(){
		api.get(`/${user}/starred`).then(result => {
			setType('Favorito');
			setRepos(result.data);
		})
	}

	return (
		<>
			{
				loading
					?
					<div className="loading">
						<Spinner animation="border" />
					</div>
					:
					<Container className="user">
						<UserInfo user={info} />
						<div>
							<UserButton label="Repositórios" event={getRepos} />
							<UserButton label="Favoritos" event={getStarred} />
						</div>
						<UserRepositories repos={repos} type={type} />
					</Container>
			}
		</>
	)
};

export default User;