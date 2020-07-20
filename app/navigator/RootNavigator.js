import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import CountryScreenContainer from '../container/CountryScreenContainer';
import CountryDetailScreenContainer from '../container/CountryDetailScreenContainer';

const Stack = createStackNavigator();

class RootNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="CountryScreen">
                            <Stack.Screen
                                name="CountryScreen"
                                component={CountryScreenContainer}
                                options={{ title: 'Home' }}
                            />
                            <Stack.Screen
                                name="CountryDetailScreen"
                                component={CountryDetailScreenContainer}
                                options={{ title: 'Country Detail' }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

export default RootNavigator;
