import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import styles from './styles';

export default class CountryDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryData: this.props.arrCountryData,
            weatherData: {},
        }
    }

    componentDidMount() {
        const arrCountryData = this.props.arrCountryData;
        console.log("arrCountryData==>", arrCountryData);
        this.setState({ countryData: arrCountryData });
    }

    async getWeatherData(item) {
        await this.props.fetchWeatherData({ payload: false, capital: item.capital });
        const arrWeatherData = this.props.arrWeatherData;
        console.log("arrWeatherData==>", arrWeatherData);
        this.setState({ weatherData: arrWeatherData });
    }

    render() {
        const { countryData, weatherData } = this.state;
        console.log("CountryData: ==", weatherData.current && weatherData.current.weather_icons[0])
        return (
            <View style={styles.container}>
                <Text style={styles.textStyles}> Capital : {countryData[0] && countryData[0].capital} </Text>
                <Text style={styles.textStyles}> Population : {countryData[0] && countryData[0].population} </Text>
                <Text style={styles.textStyles}> Latlng : {countryData[0] && countryData[0].latlng} </Text>
                <View style={styles.flexView}>
                    <Text style={styles.textStyles}> Flag : </Text>
                    <SvgUri
                            width="50"
                            height="50"
                            source={{ uri: countryData[0].flag }}
                        />
                </View>
                {weatherData.current && <View>
                    <Text style={styles.textStyles}> Temperature : {weatherData.current.temperature} </Text>
                    <View style={styles.flexView}>
                        <Text style={styles.textStyles}> Weather Icons : </Text>
                        <Image source={{ uri: weatherData.current && weatherData.current.weather_icons[0] }} style={styles.iconStyles} resizeMode="contain" />
                    </View>
                    <Text style={styles.textStyles}> Wind Speed : {weatherData.current.wind_speed} </Text>
                    <Text style={styles.textStyles}> Precip : {weatherData.current.precip} </Text>
                </View>}
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btnStyles} onPress={() => this.getWeatherData(countryData[0])}>
                        <Text style={styles.btnTextStyles}> Capital Weather </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
