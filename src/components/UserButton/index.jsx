import Button from "react-bootstrap/Button";

import './userButton.scss'

function UserButton(props) {
	const label = props.label;
	const event = props.event;
  return (
  	<Button
			className="user-button"
			variant="secondary"
			onClick={event}
		>
			{label}
		</Button>
  )
};

export default UserButton;