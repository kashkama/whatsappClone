import React from 'react';
import { createStackNavigator } from "react-navigation";
import { routes } from "./config/routes";

const RootStack =  createStackNavigator(routes, {
	initialRouteName: "Home"
});

export default class App extends React.Component {
	render() {
		return (
			<RootStack/>
		)
	}
}
