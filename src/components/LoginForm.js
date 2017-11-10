import React, { Component } from 'react';
import {
  Text,
  View, 
} from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Card, Input, Spinner } from './common';

export default class LoginForm extends Component {

	state = {
		email: '',
		password: '', 
		error: '', 
		loading: false
	};


	onButtonPress() {
		const { email, password } = this.state; 
		this.setState({ error: '', loading: true });


			firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => { // ici en cas d'erreur de connection 
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess.bind(this))
				.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		  });
	}

	onLoginFail() {
		this.setState({ 
			error: 'La creation du comte et l\'authentifications ont échouer.',
			loading: false
		});
	}

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
						secureTextEntry
						placeholder="mdp"
						label="Mot de passe"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					 />
				</CardSection>

				<Text style={styles.errorTextStyle} >
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButtonSpinner()}
				</CardSection>
			</Card>
			);
	}

	renderButtonSpinner() {
		if(this.state.loading) {
			return(
				<Spinner size="small" />
				);
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)} >
					Connexion
			</Button>
			);
	}

}

const styles = {
	errorTextStyle: {
		color: 'red'
	}
}