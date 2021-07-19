import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import './userRepositories.scss'

function UserRepositories(props) {
	const repos = props.repos;
	const type = props.type;

	function openRepo(url) {
		window.open(url);
	}

	return (
		<>
			{
				repos.length > 0
					?
					repos.map(repo => (
						<Card key={repo.id} onClick={() => openRepo(repo.html_url)}>
							<Card.Body>
								<div className="repo-info">
									{repo.name} - {repo.language}
								</div>
								<div className="repo-icons">
									<FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
									<FontAwesomeIcon icon={faCodeBranch} /> {repo.forks_count}
								</div>
							</Card.Body>
						</Card>
					))
					:
					type !== '' ? <p>Nenhum {type}.</p> : ''	
			}
		</>
	)
};

export default UserRepositories;