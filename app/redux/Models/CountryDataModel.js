let APIURL = "https://restcountries.eu/rest/v2/name/";
let ACCESS_KEY = "4c5825b77b7003acf2d5ed6d024b871a";
let WEATHER_APIURL = "http://api.weatherstack.com/current?access_key=";
let PARAMS_URL = "&query=";

export const CountryDataModel = {
    state: {
        arrCountryData: [],
        isError: '',
        arrWeatherData: [],
        setarrCountryData: [],
    },
    reducers: {
        setCountryData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrCountryData: payload,
                isError: false,
            };
        },
        setCountryErrorData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrCountryData: payload,
                isError: true,
            };
        },
        setWeatherData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrWeatherData: payload,
                isError: false,
            };
        },
        setWeatherErrorData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrWeatherData: payload,
                isError: true,
            };
        },
        clearData(state: Object): Object {
            return {
                ...state,
                arrCountryData: setarrCountryData,
                isError: '',
                arrWeatherData: [],
            };
        }
    },
    effects: (dispatch : any) => ({
        async fetchCountryData(APIdata) {
            if (APIdata.payload) {
                dispatch.CountryDataModel.clearData();
            } else {
                await fetch(APIURL + APIdata.countryName, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        let tempArr = [];
                        responseJSON.map((item, index) => {
                            if(APIdata.countryName === item.name) {
                                tempArr.push(item);
                            }
                        })
                        dispatch.CountryDataModel.setCountryData(tempArr);
                    }).catch((error) => {
                        dispatch.CountryDataModel.setCountryErrorData(error)
                    })
            }
        },
        async fetchWeatherData(APIdata) {
            if (APIdata.payload) {
                dispatch.CountryDataModel.clearData();
            } else {
                await fetch(`${WEATHER_APIURL + ACCESS_KEY + PARAMS_URL + APIdata.capital}`, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        dispatch.CountryDataModel.setWeatherData(responseJSON);
                    }).catch((error) => {
                        dispatch.CountryDataModel.setWeatherErrorData(error)
                    })
            }
        }
    })

}
