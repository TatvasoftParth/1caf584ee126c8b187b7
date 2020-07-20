
import { connect } from 'react-redux';
import CountryFormScreen from '../component/Country/CountryFormScreen';

const mapStateToProps = ({ CountryDataModel }) => ({
        arrCountryData : CountryDataModel.arrCountryData,
        isError: CountryDataModel.isError,
    });

const mapDispatchToProps = ({ CountryDataModel : {fetchCountryData}}) => ({
    fetchCountryData : (APIData) => fetchCountryData(APIData),
})

const CountryScreenContainer = connect(mapStateToProps,mapDispatchToProps)(CountryFormScreen);

export default CountryScreenContainer;
