import React from 'react';
import { ButtonGroup } from 'reactstrap';
import SignupButton from './SignupBotton';
import LoginButton from './LoginBotton';

const LoginSignupButton = ({ history }) => {
	return (
		<ButtonGroup>
			<LoginButton history={history} />
			<SignupButton history={history} />
		</ButtonGroup>
	);
};

export default LoginSignupButton;
