import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
const axios = require('axios');

class SignupBotton extends Component {
	constructor() {
		super();

		this.state = {
			signupmodalOpen: false,
			name: '',
			email: '',
			pw: '',
			welcomeModalOpen: false,
			welcomingName: ''
		};

		this._onChangeName = this._onChangeName.bind(this);
		this._onChangeEmail = this._onChangeEmail.bind(this);
		this._onChangePw = this._onChangePw.bind(this);
		this._onClickSignup = this._onClickSignup.bind(this);
		this._signupmodalToggle = this._signupmodalToggle.bind(this);
		this._welcomeModalToggle = this._welcomeModalToggle.bind(this);
	}

	_onChangeName(e) {
		e.preventDefault();
		this.setState({
			name: e.target.value
		});
	}

	_onChangeEmail(e) {
		e.preventDefault();
		this.setState({
			email: e.target.value
		});
	}

	_onChangePw(e) {
		e.preventDefault();
		this.setState({
			pw: e.target.value
		});
	}

	_onClickSignup() {
		const userData = {
			name: this.state.name,
			email: this.state.email,
			pw: this.state.pw
		};

		axios.post('http://localhost:3002/user/signup', userData).then((result) => {
			if (result.data.name) {
				this.setState({
					signupmodalOpen: false,
					welcomeModalOpen: true,
					welcomingName: result.data.name
				});
			}
		});
	}

	_signupmodalToggle() {
		this.setState((prevState) => ({
			signupmodalOpen: !prevState.signupmodalOpen
		}));
	}

	_welcomeModalToggle() {
		this.setState((prevState) => ({
			welcomeModalOpen: !prevState.welcomeModalOpen
		}));
	}

	render() {
		const { signupmodalOpen, welcomeModalOpen, welcomingName } = this.state;
		return (
			<div>
				<Button onClick={this._signupmodalToggle} color="danger">
					Sign Up
				</Button>

				<Modal isOpen={signupmodalOpen} toggle={this._signupmodalToggle}>
					<ModalHeader>Sign Up</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="exampleName">Name</Label>
								<Input
									onChange={this._onChangeName}
									type="email"
									name="name"
									id="name"
									placeholder="name"
								/>
							</FormGroup>

							<FormGroup>
								<Label for="exampleEmail">Email</Label>
								<Input
									onChange={this._onChangeEmail}
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="yelp-seoul@gamil.com"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="examplePassword">Password</Label>
								<Input
									onChange={this._onChangePw}
									type="password"
									name="password"
									id="examplePassword"
									placeholder="password placeholder"
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button onClick={this._onClickSignup} color="danger">
							Sing Up
						</Button>{' '}
						<Button color="secondary" onClick={this._signupmodalToggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>

				<Modal isOpen={welcomeModalOpen}>
					<ModalBody>{`${welcomingName} 님 환영합니다! 로그인해주세요`}</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this._welcomeModalToggle}>
							OK
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default SignupBotton;
