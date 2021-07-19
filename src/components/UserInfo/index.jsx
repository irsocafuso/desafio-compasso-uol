import Image from 'react-bootstrap/Image'

import './userinfo.scss'

function UserInfo(props) {
	const user = props.user;
	return (
		<div className="user-info">
			<Image className="avatar" src={user.avatar_url} roundedCircle />
			<h3>{user.name}</h3>
		</div>
	)
};

export default UserInfo;