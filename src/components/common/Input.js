import React, { Component } from 'react';
import {
  Text,
  View, 
  TextInput
} from 'react-native';


const Input = ({ label, value, onChangeText, placeholder }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					placeholder={placeholder}
					autoCorrect={false}
					style={inputStyle}
					value={value}
					onChangeText={onChangeText}
				/>
			</View>	
		);
};


const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 25,
		flex: 2, 
		height: 50,
		width: 100
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center' 

	}
}


export { Input };