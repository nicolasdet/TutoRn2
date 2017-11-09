import React, { Component } from 'react';
import {
  Text,
  View, 
} from 'react-native';
import { Button, CardSection, Card, Input } from './common';

export default class LoginForm extends Component {

	state = {
		email: '',
		password: ''
	};
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="toto@toto.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					 />
				</CardSection>

				<CardSection>
					<Input 
						placeholder="***"
						label="Mot de passe"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					 />
				</CardSection>


				<CardSection>
					<Button>
						Connexion
					</Button>
				</CardSection>
			</Card>
			);
	}

}