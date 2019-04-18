import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Alert } from 'reactstrap';
const axios = require('axios');

class LoginBotton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginModalOpen: false,
			email: '',
			pw: '',
			isLoggedin: false
		};

		this._loginModalToggle = this._loginModalToggle.bind(this);
		this._onChangeEmail = this._onChangeEmail.bind(this);
		this._onChangePw = this._onChangePw.bind(this);
		this._onClickLogin = this._onClickLogin.bind(this);
		this._onClickLogout = this._onClickLogout.bind(this);
	}

	_loginModalToggle() {
		this.setState((prevState) => ({
			loginModalOpen: !prevState.loginModalOpen
		}));
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

	_onClickLogout() {
		this.setState((prevState) => ({
			isLoggedin: !prevState.isLoggedin
		}));

		this.props.history.push('/');
	}
	_onClickLogin() {
		const userData = {
			email: this.state.email,
			pw: this.state.pw
		};

		axios.post('http://localhost:3002/user/signin', userData).then((result) => {
			if (result) {
				this.setState((prevState) => ({
					isLoggedin: !prevState.isLoggedin
				}));
				this._loginModalToggle();
				// localStorage.setItem
			}
		});
	}

	render() {
		const { loginModalOpen, isLoggedin } = this.state;
		const LoginOrLogoutBotton = isLoggedin ? (
			<Button onClick={this._onClickLogout} color="danger">
				Log Out
			</Button>
		) : (
			<Button onClick={this._loginModalToggle} color="danger">
				Log In
			</Button>
		);

		return (
			<div>
				{LoginOrLogoutBotton}
				<Modal isOpen={loginModalOpen} toggle={this._loginModalToggle}>
					<ModalHeader> Log In</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="exampleEmail">Email </Label>
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
									placeholder="password"
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this._onClickLogin}>
							Log In
						</Button>
						<Button color="secondary" onClick={this._loginModalToggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default LoginBotton;
