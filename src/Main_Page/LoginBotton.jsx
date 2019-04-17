import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Row,
	ButtonGroup,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
	ModalFooter
} from 'reactstrap';

class LoginBotton extends Component {
	constructor() {
		super();

		this.state = {
			loginModalOpen: false
		};

		this._loginModalToggle = this._loginModalToggle.bind(this);
	}

	_loginModalToggle() {
		this.setState((prevState) => ({
			loginModalOpen: !prevState.loginModalOpen
		}));
	}

	render() {
		const { loginModalOpen } = this.state;
		// console.log('loginBotton::: ', this.props);
		return (
			<Row>
				<ButtonGroup>
					<Button onClick={this._loginModalToggle} color="danger">
						Log In
					</Button>
					<Button color="danger">Sign Up</Button>
				</ButtonGroup>
				<Modal isOpen={loginModalOpen} toggle={this._loginModalToggle}>
					<ModalHeader>Log In</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="exampleEmail">Email</Label>
								<Input type="email" name="email" id="exampleEmail" placeholder="yelp-seoul@gamil.com" />
							</FormGroup>
							<FormGroup>
								<Label for="examplePassword">Password</Label>
								<Input
									type="password"
									name="password"
									id="examplePassword"
									placeholder="password placeholder"
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggle}>
							Log In
						</Button>{' '}
						<Link to="/">
							<Button color="secondary" onClick={this.toggle}>
								Cancel
							</Button>
						</Link>
					</ModalFooter>
				</Modal>
			</Row>
		);
	}
}

export default LoginBotton;
