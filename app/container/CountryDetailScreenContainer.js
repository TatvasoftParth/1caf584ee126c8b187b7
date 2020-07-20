
import { connect } from 'react-redux';
import CountryDetailScreen from '../component/CountryDetail/CountryDetailScreen';

const mapStateToProps = ({ CountryDataModel }) => ({
        arrCountryData : CountryDataModel.arrCountryData,
        arrWeatherData : CountryDataModel.arrWeatherData,
        isError: CountryDataModel.isError,
    });

const mapDispatchToProps = ({ CountryDataModel : {fetchWeatherData}}) => ({
    fetchWeatherData : (APIData) => fetchWeatherData(APIData),
})

const CountryDetailScreenContainer = connect(mapStateToProps,mapDispatchToProps)(CountryDetailScreen);

export default CountryDetailScreenContainer;
