import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles';

export default class CountryFormScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: "",
        }
    }

    async getCountryData() {
        await this.props.fetchCountryData({ payload: false, countryName: this.state.countryName });
    }

    async _onSubmit() {
        await this.getCountryData();
        this.props.navigation.navigate("CountryDetailScreen");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputView}>
                    <TextInput
                        value={this.state.countryName}
                        onChangeText={(text) => { this.setState({ countryName: text }) }}
                        placeholder="Country Name"
                        placeholderTextColor="gray"
                        style={styles.textInputStyles}
                    />
                </View>
                <View style={styles.textInputView}>
                <TouchableOpacity style={styles.btnStyles} disabled={this.state.countryName ? false : true} onPress={() => this._onSubmit()}>
                    <Text style={styles.btnTextStyles}> Submit </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}
